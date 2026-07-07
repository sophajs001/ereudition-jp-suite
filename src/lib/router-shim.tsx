/**
 * Compatibility shim so route files written against @tanstack/react-router
 * keep working on top of react-router-dom.
 *
 * Aliased from "@tanstack/react-router" in vite.config.ts.
 */
import {
  Link as RRLink,
  NavLink,
  useParams as rrUseParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useMemo, type ComponentType, type ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Not-found handling                                                          */
/* -------------------------------------------------------------------------- */

export class NotFoundError extends Error {
  __isNotFound = true;
  constructor() {
    super("Not found");
  }
}
export function notFound() {
  return new NotFoundError();
}

/* -------------------------------------------------------------------------- */
/* createFileRoute / createRootRouteWithContext                                */
/* -------------------------------------------------------------------------- */

export interface RouteOptions {
  head?: (ctx: { loaderData?: any }) => {
    meta?: Array<Record<string, any>>;
    links?: Array<Record<string, any>>;
  };
  component?: ComponentType<any>;
  notFoundComponent?: ComponentType<any>;
  errorComponent?: ComponentType<any>;
  loader?: (ctx: { params: any }) => any;
  shellComponent?: ComponentType<any>;
}

export interface RouteObject {
  path: string;
  options: RouteOptions;
  useLoaderData: () => any;
  useParams: () => any;
  useRouteContext: () => any;
}

// Module-level slot the RouteView populates before rendering the component,
// so calls like Route.useLoaderData() inside components resolve at render time.
let _currentLoaderData: any = null;

export function createFileRoute(path: string) {
  return (options: RouteOptions): RouteObject => ({
    path,
    options,
    useLoaderData: () => _currentLoaderData,
    useParams: () => rrUseParams(),
    useRouteContext: () => ({}),
  });
}

export function createRootRouteWithContext<_T = unknown>() {
  return (options: RouteOptions) => ({ path: "__root__", options });
}

/* -------------------------------------------------------------------------- */
/* Link that accepts TanStack-style API                                         */
/*   <Link to="/blog/$slug" params={{ slug }} activeProps={{...}} />           */
/* -------------------------------------------------------------------------- */

type LinkProps = {
  to: string;
  params?: Record<string, string | number>;
  activeProps?: { className?: string; style?: React.CSSProperties };
  activeOptions?: { exact?: boolean };
  preload?: any;
  search?: any;
  hash?: any;
  children?: ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Link({
  to,
  params,
  activeProps,
  activeOptions,
  preload: _preload,
  search: _search,
  hash: _hash,
  className,
  style,
  ...rest
}: LinkProps) {
  const href = useMemo(() => {
    let out = to || "/";
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        out = out.replace(`$${k}`, String(v));
      }
    }
    return out;
  }, [to, params]);

  if (activeProps) {
    return (
      <NavLink
        to={href}
        end={activeOptions?.exact}
        className={({ isActive }) =>
          isActive && activeProps.className ? activeProps.className : (className ?? "")
        }
        style={({ isActive }) =>
          isActive && activeProps.style ? activeProps.style : style
        }
        {...(rest as any)}
      />
    );
  }
  return <RRLink to={href} className={className} style={style} {...(rest as any)} />;
}

/* -------------------------------------------------------------------------- */
/* Placeholders / hooks used elsewhere                                          */
/* -------------------------------------------------------------------------- */

export function Outlet() {
  return null;
}
export function HeadContent() {
  return null;
}
export function Scripts() {
  return null;
}

export function useRouter() {
  const navigate = useNavigate();
  return {
    invalidate: () => {
      // no-op: react-router doesn't have loader invalidation the same way
    },
    subscribe: (_ev: string, _cb: () => void) => () => {},
    navigate,
  };
}

/* -------------------------------------------------------------------------- */
/* Head metadata application                                                    */
/* -------------------------------------------------------------------------- */

function applyMeta(meta: Array<Record<string, any>>) {
  const titleEntry = meta.find((m) => "title" in m);
  if (titleEntry?.title) document.title = titleEntry.title;

  const upsert = (selector: string, attrs: Record<string, string>) => {
    let el = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      for (const [k, v] of Object.entries(attrs)) {
        if (k !== "content") el.setAttribute(k, v);
      }
      document.head.appendChild(el);
    }
    if (attrs.content) el.setAttribute("content", attrs.content);
  };

  for (const m of meta) {
    if (m.name === "description") {
      upsert(`meta[name="description"]`, { name: "description", content: m.content });
    } else if (m.name && m.content) {
      upsert(`meta[name="${m.name}"]`, { name: m.name, content: m.content });
    } else if (m.property && m.content) {
      upsert(`meta[property="${m.property}"]`, { property: m.property, content: m.content });
    }
  }
}

/* -------------------------------------------------------------------------- */
/* RouteView: renders a tanstack-style Route object using react-router          */
/* -------------------------------------------------------------------------- */

export function RouteView({ route }: { route: RouteObject }) {
  const params = rrUseParams();
  const location = useLocation();

  let loaderData: any = undefined;
  let isNotFound = false;
  let error: unknown = null;

  if (route.options.loader) {
    try {
      loaderData = route.options.loader({ params });
    } catch (e) {
      if (e instanceof NotFoundError || (e as any)?.__isNotFound) {
        isNotFound = true;
      } else {
        error = e;
      }
    }
  }
  _currentLoaderData = loaderData;

  const headResult = route.options.head?.({ loaderData });
  const meta = headResult?.meta ?? [];

  useEffect(() => {
    if (meta.length) applyMeta(meta);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    // rerun when path changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (error && route.options.errorComponent) {
    const EC = route.options.errorComponent;
    return <EC error={error as Error} reset={() => {}} />;
  }
  if (isNotFound) {
    const NF = route.options.notFoundComponent;
    return NF ? <NF /> : <DefaultNotFound />;
  }

  const C = route.options.component;
  return C ? <C /> : null;
}

function DefaultNotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-3 text-sm text-gray-500">Page not found.</p>
    </div>
  );
}

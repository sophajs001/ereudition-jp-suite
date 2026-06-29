import type { ReactNode, CSSProperties } from "react";
import * as React from "react";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
  y?: number;
};

export function Reveal({ children, delay = 0, as = "div", className = "", style, y = 18 }: Props) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity .7s ease-out ${delay}ms, transform .7s ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

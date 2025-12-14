"use client";

import React from "react";
import { useInView } from "@/lib/useInView";

type Direction = "up" | "down" | "left" | "right";

const directionClasses: Record<Direction, string> = {
  up: "translate-y-4 md:translate-y-8",
  down: "-translate-y-4 md:-translate-y-8",
  left: "translate-x-2 sm:translate-x-4 md:translate-x-8",
  right: "-translate-x-2 sm:-translate-x-4 md:-translate-x-8",
};

type Props = {
  children: React.ReactNode;
  direction?: Direction;
  delayMs?: number;
  className?: string;
};

export default function AnimateOnScroll({
  children,
  direction = "up",
  delayMs = 0,
  className = "",
}: Props) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        isInView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionClasses[direction]}`,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

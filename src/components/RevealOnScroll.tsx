"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "zoom" | "slide-left" | "slide-right" | "none";
}

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translate3d(0, 0, 0) scale(1)";
            el.style.filter = "blur(0)";
            observer.unobserve(el);

            setTimeout(() => {
              if (el) {
                el.style.transform = "none";
              }
            }, 900 + delay);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 32px, 0)";
      case "down":
        return "translate3d(0, -32px, 0)";
      case "zoom":
        return "scale(0.92)";
      case "slide-left":
        return "translate3d(44px, 0, 0)";
      case "slide-right":
        return "translate3d(-44px, 0, 0)";
      case "none":
      default:
        return "none";
    }
  };

  const getInitialFilter = () => {
    if (direction === "zoom") return "blur(4px)";
    return "none";
  };

  return (
    <div
      ref={ref}
      className={`w-full ${className}`.trim()}
      style={{
        opacity: 0,
        transform: getInitialTransform(),
        filter: getInitialFilter(),
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}
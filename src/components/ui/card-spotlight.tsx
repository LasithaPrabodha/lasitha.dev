"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useEffect, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  hideOnLightTheme = false,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
  /** Skip the hover glow entirely while the site's `data-theme` is "light". */
  hideOnLightTheme?: boolean;
} & React.ComponentProps<typeof motion.div>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const [isLightTheme, setIsLightTheme] = useState(false);
  useEffect(() => {
    if (!hideOnLightTheme) return;

    const update = () => setIsLightTheme(document.body.getAttribute("data-theme") === "light");
    update();

    const observer = new MutationObserver(update);
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, [hideOnLightTheme]);

  const spotlightDisabled = hideOnLightTheme && isLightTheme;

  const maskImage = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${mouseX}px ${mouseY}px,
      white,
      transparent 80%
    )
  `;

  return (
    <motion.div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-oklch(0.922 0 0) border-neutral-800 bg-black dark:border-neutral-800 dark:border-oklch(1 0 0 / 10%)",
        className
      )}
      onMouseMove={spotlightDisabled ? undefined : handleMouseMove}
      onMouseEnter={spotlightDisabled ? undefined : handleMouseEnter}
      onMouseLeave={spotlightDisabled ? undefined : handleMouseLeave}
      {...props}
    >
      {!spotlightDisabled && (
        <motion.div
          className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
          style={{
            backgroundColor: color,
            maskImage,
          }}
        >
          {isHovering && (
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent absolute inset-0 pointer-events-none"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={3}
            />
          )}
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

"use client";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import { CanvasText } from "@/components/ui/canvas-text";
import { EncryptedText } from "@/components/ui/encrypted-text";

const IDLE_DELAY_MS = 15000;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
  idle: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  idle: {
    opacity: 0.05,
    y: 0,
    filter: "blur(4px)",
    transition: { duration: 1.8, ease: "easeInOut" },
  },
};

export function HeroReveal() {
  const [isReady, setIsReady] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isReady) return;

    const resetIdleTimer = () => {
      setIsIdle(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setIsIdle(true), IDLE_DELAY_MS);
    };

    const activityEvents = ["mousemove", "keydown", "scroll", "touchstart", "click"];
    activityEvents.forEach((eventName) =>
      window.addEventListener(eventName, resetIdleTimer, { passive: true }),
    );

    resetIdleTimer();

    return () => {
      activityEvents.forEach((eventName) =>
        window.removeEventListener(eventName, resetIdleTimer),
      );
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [isReady]);

  const hasMountedIdleRef = useRef(false);
  useEffect(() => {
    if (!hasMountedIdleRef.current) {
      hasMountedIdleRef.current = true;
      return;
    }
    window.dispatchEvent(new CustomEvent("hero-idle-change", { detail: { idle: isIdle } }));
  }, [isIdle]);

  const animateState = !isReady ? "hidden" : isIdle ? "idle" : "visible";

  return (
    <section className="min-h-screen center flex-col">
      <motion.div
        className="contents"
        initial="hidden"
        animate={animateState}
        variants={container}
      >
        <motion.h1 variants={item} className="text-5xl max-sm:text-4xl">
          Hi, I am{" "}
          <CanvasText
            text="Lasitha Prabodha"
            className="font-bold"
            backgroundClassName="bg-[#6344F5]"
            colors={[
              "rgba(174, 72, 255, 1)",
              "rgba(174, 72, 255, 0.9)",
              "rgba(174, 72, 255, 0.8)",
              "rgba(174, 72, 255, 0.7)",
              "rgba(174, 72, 255, 0.6)",
              "rgba(174, 72, 255, 0.5)",
              "rgba(174, 72, 255, 0.4)",
              "rgba(174, 72, 255, 0.3)",
              "rgba(174, 72, 255, 0.2)",
              "rgba(174, 72, 255, 0.1)",
            ]}
            lineGap={4}
            animationDuration={20}
            onReady={() => setIsReady(true)}
          />
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-[2.4rem] leading-[0.8] max-sm:text-3xl max-sm:mt-4 text-[color:var(--clr-quote)]"
        >
          I build things for <span className="glow-text">web and mobile</span>
        </motion.h2>

        <motion.p variants={item} className="mt-6">
          <EncryptedText
            text="A software engineer specializing in building exceptional digital experiences"
            encryptedClassName="text-[color:var(--clr-quote)]"
            revealDelayMs={15}
            flipDelayMs={25}
            startWhen={isReady}
          />
        </motion.p>

        <motion.a
          variants={item}
          href="/blog"
          className="button-container z-0 my-0 mt-4 mx-auto w-[200px]"
        >
          <span className="mas">Check out my blog!</span>
          <button type="button" name="Hover">
            Check out my blog!
          </button>
        </motion.a>
      </motion.div>
    </section>
  );
}

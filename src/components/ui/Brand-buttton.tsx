"use client";
import { cn } from "@/lib/utils";
import { LiquidMetal } from "@paper-design/shaders-react";
import { motion } from "motion/react";
export const Brand_button = () => {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="h-10  cursor-pointer z-0 w-30 flex items-center rounded-2xl justify-center  relative overflow-hidden"
    >
      <div
        className={cn(
          "absolute flex items-center  overflow-hidden h-9 w-29 rounded-2xl font-sans  z-10 text-[12.5px]",
          "bg-linear-to-b  from-white to-neutral-100 text-black",
          "dark:bg-linear-to-b dark:from-neutral-700 dark:to-neutral-900 dark:text-white"
        )}
      >
        <LiquidMetal
          width={50}
          height={50}
          image="https://shaders.paper.design/images/logos/diamond.svg"
          colorBack="#ffffff00"
          colorTint="#ff5c5c"
          shape="daisy"
          repetition={2}
          softness={0.1}
          shiftRed={0.3}
          shiftBlue={0.3}
          distortion={0.07}
          contour={0.4}
          angle={70}
          speed={1}
          scale={0.6}
          fit="contain"
          className="-z-10"
        />
        <span className="-translate-x-2">Pro Access</span>
      </div>
      <LiquidMetal
        width={500}
        height={500}
        image="https://shaders.paper.design/images/logos/diamond.svg"
        colorBack="#ffffff"
        colorTint="#ff5c5c"
        shape="daisy"
        repetition={2}
        softness={0.1}
        shiftRed={0.3}
        shiftBlue={0.3}
        distortion={0.07}
        contour={0.4}
        angle={70}
        speed={1.3}
        scale={1.9}
        fit="contain"
        className="rotate-10 -z-10"
      />
    </motion.button>
  );
};

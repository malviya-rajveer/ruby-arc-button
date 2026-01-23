"use client";
import { Brand_button } from "@/components/ui/Brand-buttton";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center  bg-zinc-50 font-sans dark:bg-black">
      <Brand_button></Brand_button>
      <div className="dark:text-white text-black/60 pt-4 text-[20px]">
        Crafted with care
      </div>

      <div className="dark:text-neutral-200 text-black/60 pt-2 text-[10px]">
        @rajveer_0077
      </div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative flex justify-center mt-5 text-white"
      >
        <IconMoon
          size={23}
          className="absolute  scale-100 rotate-0 dark:scale-0 dark:rotate-40 transition-transform duration-175 dark:text-white text-neutral-600"
        ></IconMoon>
        <IconSun className="absolute rotate-45 dark:rotate-0 scale-0 dark:scale-100  transition-transform duration-175 dark:text-white text-neutral-600"></IconSun>
      </button>
    </div>
  );
}

import { Brand_button } from "@/components/ui/Brand-buttton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center  bg-black/1 font-sans dark:bg-black">
      <Brand_button></Brand_button>
      <div className="dark:text-white text-black/60 pt-4 text-[20px]">
        crafted with care
      </div>

      <div className="dark:text-neutral-200 text-black/60 pt-2 text-[10px]">
        @rajveer_0077
      </div>
    </div>
  );
}

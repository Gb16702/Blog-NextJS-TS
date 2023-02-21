"use client";

import { usePathname } from "next/navigation";
import React from "react";

export const Submit = () =>  {
  const path = usePathname()
  return (
    <div
      className="flex flex-col bg-[#4660b5]
          opacity-100 w-full rounded-lg px-3  mt-10 transition ease-out duration-[.25s] hover:bg-[#5d75c3]">
      <button
        type="submit"
        className="text-white px-5 py-2 rounded-lg h-12">
          {path?.includes('inscription') ? "S'inscrire" : "Se connecter"}
      </button>
    </div>
  );
}

export const SubmitOnError = () => {
  const path = usePathname()
  return (
    <div
      className="flex flex-col bg-red-300/50 border border-red-400
          opacity-100 w-full rounded-lg px-3  mt-10 transition ease-out duration-[.25s]">
      <button
        type="submit"
        className="text-red-400 px-5 py-2 rounded-lg h-12">
          {path?.includes('inscription') ? "S'inscrire" : "Se connecter"}
      </button>
    </div>
  );
};

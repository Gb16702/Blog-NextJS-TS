"use client";

import Banner from "./UI/auth/AuthBanner";
import { usePathname } from "next/navigation";
import formTitle from "./UI/auth/foreGround/text";

export default function FormBackground({children}: {children: React.ReactNode}) {
  const path = usePathname();

  return (
    <div className="h-screen w-screen flex items-center justify-center relative bg-[#fafafa]">

      <Banner />
      <div className="w-[560px] bg-white mx-auto h-[620px] rounded-xl px-10 py-[27px] relative drop-shadow-sm">
        {formTitle({ children: path?.includes("inscription") ? "Inscription" : "Connexion" })}
        <h5 className="mt-2 text-zinc-600/60 text-[15.1px]">
          {path?.includes("inscription") ? "Inscrivez-vous en quelques clics" : "Entrez vos informations de connexion"}</h5>
        <form className="">{children}</form>
      </div>

    </div>
  );
}
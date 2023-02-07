"use client";

import React from "react";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export function FirstName({ firstName }: { firstName: string }) {
  return (
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Votre nom"
      className="bg-transparent h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 transition-all duration-300 focus:border-[#6F75F5] focus:text-[#6F75F5] focus:placeholder:text-[#6F75F5] outline-none text-[15px]  flex flex-col border border-[#9b9ff43e] opacity-100 w-full rounded-lg px-3"
    />
  );
}

export function LastName({ lastName }: { lastName: string }) {
  return (
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Votre prénom"
      className="bg-transparent h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 outline-none transition duration-300 focus:border-[#6F75F5] focus:text-[#6F75F5] focus:placeholder:text-[#6F75F5]  flex flex-col border border-[#9b9ff43e] opacity-100 w-full rounded-lg px-3 text-[15px] "
    />
  );
}

export function EmailAddress({ email }: { email: string }) {
  return (
    <input
      type="text"
      name="email"
      id="email"
      placeholder="Votre adresse mail"
      className="bg-transparent h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 outline-none transition duration-300 focus:border-[#6F75F5] focus:text-[#6F75F5] focus:placeholder:text-[#6F75F5]  flex flex-col border border-[#9b9ff43e] opacity-100 w-full rounded-lg px-3 mt-5 text-[15px] "
    />
  );
}
export function Password({ password }: { password: string }) {
  return (
    <input
      type="text"
      name="password"
      id="password"
      placeholder="Votre mot de passe"
      className="bg-transparent h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 outline-none text-[15px] flex flex-col border border-[#9b9ff43e] opacity-100 w-full rounded-lg px-3 mt-5 transition duration-300 focus:border-[#6F75F5] focus:text-[#6F75F5] focus:placeholder:text-[#6F75F5]"
    />
  );
}

export function PasswordConfirm({
  passwordConfirm,
}: {
  passwordConfirm: string;
}) {
  return (
    <input
      type="text"
      name="passwordConfirm"
      id="passwordConfirm"
      placeholder="Confirmez votre mot de passe"
      className="bg-transparent h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 outline-none  text-[15px] flex flex-col border border-[#9b9ff43e] opacity-100 w-full rounded-lg px-3 mt-5 transition duration-300 focus:border-[#6F75F5] focus:text-[#6F75F5] focus:placeholder:text-[#6F75F5]"
    />
  );
}

export function SubmitButton({children} : {children: React.ReactNode}) {
  return (
    <div
      className="flex flex-col bg-[#6F75F5]
     opacity-100 w-full rounded-lg px-3  mt-10 transition ease-out duration-[.25s] hover:bg-[#8e93f7]">
      <button
        type="submit"
        className="text-white px-5 py-2 rounded-lg h-12">
        {children}
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import Banner from "./UI/auth/AuthBanner";
import { usePathname } from "next/navigation";
import formTitle from "./UI/auth/foreGround/text";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Submit } from "./Form";
import GenerateSecurePassword from "../utils/generateSecurePassword";
import { ShowPassword, HidePassword } from "./PasswordIcons";

export default function FormBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };

  const path = usePathname();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const handleClick = () => {
    const password = GenerateSecurePassword(16);
    console.log(password);
    setValue("password", password);
    setValue("passwordConfirm", password);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative bg-[#fafafa]">
      <Banner />
      <div
        className={`w-[560px] bg-white mx-auto rounded-xl px-10 py-[27px] relative drop-shadow-sm transition-all duration-300 `}>
        {formTitle({
          children: path?.includes("inscription")
            ? "Inscription"
            : "Connexion",
        })}
        <h5 className="mt-2 text-zinc-600/60 text-[15.1px]">
          {path?.includes("inscription")
            ? "Inscrivez-vous en quelques clics"
            : "Entrez vos identifiants de connexion"}
        </h5>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Votre prénom"
              id="firstName"
              className="formInput"
              {...register("firstName", { required: true })}
            />
            <input
              type="text"
              placeholder="Votre nom"
              id="lastName"
              className="formInput"
              {...register("lastName", { required: true })}
            />
          </div>
          <input
            type="email"
            placeholder="Votre adresse mail"
            id="email"
            className="formInput"
            {...register("lastName", { required: true })}
          />
          <div className="relative bg-transparent h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 outline-none text-[15px] flex flex-row justify-between border border-[#829cea3e] opacity-100 w-full rounded-lg overflow-hidden px-3 mt-5 focus-within:border-[#607bd4] focus-within:text-[#607bd4] focus-within:placeholder:text-[#607bd4] transition duration-300">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Votre mot de passe"
              id="password"
              className="outline-none w-full"
              {...register("password", { required: true })}
            />
            <div
              className="absolute right-[50px] w-[50px] bg-[#4660b5] h-full border-r border-zinc-800 border-opacity-20 flex items-center justify-center hover:cursor-pointer"
              onClick={handleTogglePassword}>
              {showPassword ? <HidePassword /> : <ShowPassword />}
            </div>
            <div
              className="absolute right-0 w-[50px] bg-[#4660b5] h-full top-0 flex items-center justify-center hover:cursor-pointer"
              onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmez votre mot de passe"
            id="passwordConfirm"
            className="formInput"
            {...register("passwordConfirm", { required: true })}
          />

          <Submit>S'inscrire</Submit>
        </form>
        <small className="text-zinc-400 w-full text-center block mt-7">
          {path?.includes("inscription")
            ? "Vous avez déjà un compte ? Connectez-vous"
            : "Pas encore de compte ? Inscrivez-vous"}{" "}
          <Link
            href={
              path?.includes("inscription")
                ? "./connexion"
                : "./inscription"
            }
            className="text-[#4660b5]">
            ici
          </Link>
        </small>

        {path?.includes("inscription") && (
          <small className="text-zinc-400 relative top-5 block text-center">
            En vous inscrivant, vous acceptez nos conditions et
            politique des données
          </small>
        )}
      </div>
    </div>
  );
}

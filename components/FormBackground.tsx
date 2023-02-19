"use client";

import { useState } from "react";
import Banner from "./UI/auth/AuthBanner";
import { usePathname } from "next/navigation";
import formTitle from "./UI/auth/foreGround/text";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Submit } from "./Form";
import GenerateSecurePassword from "../utils/generateSecurePassword";
import {
  ShowPasswordIcon,
  HidePasswordIcon,
  GeneratePasswordIcon,
} from "./UI/auth/PasswordIcons";
import { formValidations } from "./asserts/validation";
import { kMaxLength } from "buffer";

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
  } = useForm<FormValues>({ mode: "onBlur" });

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
    <div className="h-screen w-screen flex items-center justify-center relative md:bg-[#fafafa] bg-[#fff]">
      <Banner />
      <div
        className={`max-md:w-full bg-white mx-auto md:rounded-xl md:px-10 py-[27px] relative md:drop-shadow-sm transition-all duration-300 px-6 `}>
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
          <div className="flex sm:space-x-1 max-sm:flex-col">
            <input
              type="text"
              placeholder="Votre prénom"
              id="firstName"
              className="formInput"
              autoFocus
              {...register("firstName", {
                required: {
                  value: true,
                  message: formValidations.name.firstName.required.message,
                },
                minLength: {
                  value:
                    formValidations.name.firstName.minLength.value,
                  message:
                    formValidations.name.firstName.minLength.message(
                      formValidations.name.firstName.minLength.value
                    ),
                },
                maxLength: {
                  value:
                    formValidations.name.firstName.maxLength.value,
                  message:
                    formValidations.name.firstName.maxLength.message(
                      formValidations.name.firstName.maxLength.value
                    ),
                },
                pattern : {
                  value: formValidations.name.firstName.pattern.value,
                  message: formValidations.name.firstName.pattern.message,
                }
              })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Votre nom"
              id="lastName"
              className="formInput"
              autoFocus
              {...register("lastName", {
                required: {
                  value: true,
                  message: formValidations.name.lastName.required.message,
                },
                minLength: {
                  value: formValidations.name.lastName.minLength.value,
                  message: formValidations.name.lastName.minLength.message(formValidations.name.lastName.minLength.value),
                },
                maxLength : {
                  value: formValidations.name.lastName.maxLength.value,
                  message: formValidations.name.lastName.maxLength.message(formValidations.name.lastName.maxLength.value),
                }
              })}
            />
          </div>
          <input
            type="email"
            placeholder="Votre adresse mail"
            id="email"
            className="formInput"
            autoFocus
            {...register("email", { required: true })}
          />
          <div className="relative bg-transparent h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 outline-none text-[15px] flex flex-row justify-between border border-[#829cea3e] opacity-100 w-full rounded-lg overflow-hidden px-3 mt-5 focus-within:border-[#607bd4] focus-within:text-[#607bd4] focus-within:placeholder:text-[#607bd4] transition duration-300">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Votre mot de passe"
              id="password"
              className="outline-none w-full"
              autoFocus
              {...register("password", { required: true })}
            />
            <div
              className="absolute right-[45px] w-[45px] bg-[#fff] h-full flex items-center justify-center hover:cursor-pointer"
              onClick={handleTogglePassword}>
              {showPassword ? (
                <HidePasswordIcon />
              ) : (
                <ShowPasswordIcon />
              )}
            </div>
            <div
              className="absolute right-0 w-[45px] bg-[#fff] h-full top-0 flex items-center justify-center hover:cursor-pointer"
              onClick={handleClick}>
              <GeneratePasswordIcon />
            </div>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmez votre mot de passe"
            id="passwordConfirm"
            className="formInput"
            autoFocus
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

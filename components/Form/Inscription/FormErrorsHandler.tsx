"use client";

import { useState } from "react";
import Banner from "../../UI/auth/AuthBanner";
import { usePathname } from "next/navigation";
import title, {
  FormTitleError as titleError,
} from "../../UI/auth/foreGround/text";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Submit, SubmitOnError } from "../Mix/Form";
import GenerateSecurePassword from "../../../utils/generateSecurePassword";
import {
  ShowPasswordIcon,
  HidePasswordIcon,
  GeneratePasswordIcon,
  ShowPasswordIconOnError,
  HidePasswordIconOnError,
  GeneratePasswordIconOnError,
} from "../../UI/auth/PasswordIcons";
import { formValidations } from "../../asserts/validation";

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

  const { register, handleSubmit, setValue, watch, formState: { errors }} = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormValues> = async ({firstName, lastName, email, password}) => {
    console.log(firstName, lastName, email, password);
    const call = await fetch('http://localhost:3000/api/auth/inscriptionAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };

  const handleClick = () => {
    const password = GenerateSecurePassword(16);
    setValue("password", password);
    setValue("passwordConfirm", password);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword)

  const hasError = Object.values(errors).some((error) => error);

  const passwordWatch = watch("password", "");
  const passwordConfirmWatch = watch("passwordConfirm", "");

  return (
    <div className="h-screen w-screen flex items-center justify-center relative md:bg-[#fafafa] bg-[#fff]">
      <Banner />
      <div
        className={`max-md:w-full w-[600px] min-h-[600px] bg-white mx-auto md:rounded-xl md:px-10 py-[27px] relative md:drop-shadow-sm transition-all duration-300 px-6 `}>
        {hasError
          ? titleError({
              children: path?.includes("inscription")
                ? "Inscription"
                : "Connexion",
            })
          : title({
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
          <div className="flex sm:space-x-2 max-sm:flex-col">
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                placeholder="Votre prénom"
                id="firstName"
                className={
                  errors.firstName ? "triggeredOnError" : "formInput"
                }
                {...register("firstName", {
                  required: {
                    value: true,
                    message:
                      formValidations.name.firstName.required.message,
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
                  pattern: {
                    value:
                      formValidations.name.firstName.pattern.value,
                    message:
                      formValidations.name.firstName.pattern.message,
                  },
                })}
              />
              {errors.firstName && (
                <small className="text-red-400 text-[12px]">
                  {errors.firstName.message}
                </small>
              )}
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                placeholder="Votre nom"
                id="lastName"
                className={
                  errors.lastName ? "triggeredOnError" : "formInput"
                }
                {...register("lastName", {
                  required: {
                    value: true,
                    message:
                      formValidations.name.lastName.required.message,
                  },
                  minLength: {
                    value:
                      formValidations.name.lastName.minLength.value,
                    message:
                      formValidations.name.lastName.minLength.message(
                        formValidations.name.lastName.minLength.value
                      ),
                  },
                  maxLength: {
                    value:
                      formValidations.name.lastName.maxLength.value,
                    message:
                      formValidations.name.lastName.maxLength.message(
                        formValidations.name.lastName.maxLength.value
                      ),
                  },
                })}
              />
              {errors.lastName && (
                <small className="text-red-400 text-[12px]">
                  {errors.lastName.message}
                </small>
              )}
            </div>
          </div>
          <input
            type="email"
            placeholder="Votre adresse mail"
            id="email"
            className={
              errors.email ? "triggeredOnError" : "formInput"
            }
            {...register("email", {
              required: {
                value: formValidations.email.required.value,
                message: formValidations.email.required.message,
              },
              pattern: {
                value: formValidations.email.pattern.value,
                message: formValidations.email.pattern.message,
              },
            })}
          />
          {errors.email && (
            <small className="text-red-400 text-[12px]">
              {errors.email.message}
            </small>
          )}
          <div
            className={
              errors.password
                ? "relative h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 outline-none text-[15px] flex flex-row justify-between border border-[#829cea3e] opacity-100 w-full rounded-lg overflow-hidden px-3 mt-5 border-red-300 text-red-400 placeholder:text-red-400 transition duration-300 bg-red-400/10"
                : "relative bg-transparent h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 outline-none text-[15px] flex flex-row justify-between border border-[#829cea3e] opacity-100 w-full rounded-lg overflow-hidden px-3 mt-5 focus-within:border-[#607bd4] focus-within:text-[#607bd4] focus-within:placeholder:text-[#607bd4] transition duration-300"
            }>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Votre mot de passe"
              id="password"
              className={
                errors.password
                  ? "placeholder:text-red-400 text-red-400 outline-none w-full bg-transparent"
                  : "outline-none w-full bg-transparent"
              }
              {...register("password", {
                required: {
                  value:
                    formValidations.passwords.password.required.value,
                  message:
                    formValidations.passwords.password.required
                      .message,
                },
                minLength: {
                  value:
                    formValidations.passwords.password.minLength
                      .value,
                  message:
                    formValidations.passwords.password.minLength.message(
                      formValidations.passwords.password.minLength
                        .value
                    ),
                },
                maxLength: {
                  value:
                    formValidations.passwords.password.maxLength
                      .value,
                  message:
                    formValidations.passwords.password.maxLength.message(
                      formValidations.passwords.password.maxLength
                        .value
                    ),
                },
              })}
            />
            <div
              className="absolute right-[45px] w-[45px] bg-transparent h-full flex items-center justify-center hover:cursor-pointer"
              onClick={handleTogglePassword}>
              {showPassword ? (
                errors.password ? (
                  <HidePasswordIconOnError />
                ) : (
                  <HidePasswordIcon />
                )
              ) : errors.password ? (
                <ShowPasswordIconOnError />
              ) : (
                <ShowPasswordIcon />
              )}
            </div>
            <div
              className="absolute right-0 w-[45px] bg-transparent h-full top-0 flex items-center justify-center hover:cursor-pointer"
              onClick={handleClick}>
              {errors.password ? (
                <GeneratePasswordIconOnError />
              ) : (
                <GeneratePasswordIcon />
              )}
            </div>
          </div>
          {errors.password && (
            <small className="text-red-400 text-[12px]">
              {errors.password.message}
            </small>
          )}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmez votre mot de passe"
            id="passwordConfirm"
            className={
              errors.passwordConfirm
                ? "placeholder:text-red-400 text-red-400 outline-none w-full bg-transparent triggeredOnError"
                : "outline-none w-full bg-transparent formInput"
            }
            {...register("passwordConfirm", {
              required: {
                value:
                  formValidations.passwords.passwordConfirm.required
                    .value,
                message:
                  formValidations.passwords.passwordConfirm.required
                    .message,
              },
              minLength: {
                value:
                  formValidations.passwords.passwordConfirm.minLength
                    .value,
                message:
                  formValidations.passwords.passwordConfirm.minLength.message(
                    formValidations.passwords.passwordConfirm
                      .minLength.value
                  ),
              },
              maxLength: {
                value:
                  formValidations.passwords.passwordConfirm.maxLength
                    .value,
                message:
                  formValidations.passwords.passwordConfirm.maxLength.message(
                    formValidations.passwords.passwordConfirm
                      .maxLength.value
                  ),
              },
            })}
          />
          {errors.passwordConfirm ? (
            <small className="text-red-400 text-[12px]">
              {errors.passwordConfirm.message}
            </small>
          ) :
          passwordWatch !== passwordConfirmWatch && (
            <small className="text-red-400 text-[12px]">
              Les mots de passe ne correspondent pas
            </small>
          )
          }
          {hasError ? <SubmitOnError /> : <Submit />}
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

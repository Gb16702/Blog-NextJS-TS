"use client";

import Link from "next/link";
import {
  GoogleIcon,
  GithubIcon,
} from "../../../components/UI/auth/ProvidersIcons";
import GenerateSecurePassword from "../../../utils/generateSecurePassword";
import FormBackground from "../../../components/FormBackground";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function Inscription() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const handleClick = () => {
    const password = GenerateSecurePassword(16);
    console.log(password);
    setValue("password", password);
  };

  return (
    <FormBackground>
        <div className="flex space-x-4">

        <div
          className="relative bg-transparent h-12 shadow-sm text-slate-500/70 placeholder-slate-500/70 outline-none text-[15px] flex flex-row justify-between border border-[#829cea3e] opacity-100 w-full rounded-lg overflow-hidden px-3 mt-5 focus-within:border-[#607bd4] focus-within:text-[#607bd4] focus-within:placeholder:text-[#607bd4] transition duration-300"
          onClick={handleClick}>
          <input
            type="password"
            id="password"
            placeholder="Votre mot de passe"
            className="transition duration-300 focus:border-[#607bd4] focus:text-[#607bd4] focus:placeholder:text-[#607bd4] w-full h-full outline-none"
            {...register("password", { required: true })}
          />
          <div className="absolute right-0 w-[50px] bg-[#4660b5] h-full top-0 flex items-center justify-center">
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
      </div>
      <div className="w-full flex items-center justify-center mt-6 space-x-4">
        <GithubIcon />
        <GoogleIcon />
      </div>
    </FormBackground>
  );
}

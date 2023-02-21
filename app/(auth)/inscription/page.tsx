"use client";

import {
  GoogleIcon,
  GithubIcon,
} from "../../../components/UI/auth/ProvidersIcons";
import FormBackground from "../../../components/Form/Inscription/FormErrorsHandler";
import React from "react";



export default function Inscription() {

  return (
    <FormBackground>
      <div className="w-full flex items-center justify-center mt-6 space-x-4">
        <GithubIcon />
        <GoogleIcon />
      </div>
    </FormBackground>
  );
}

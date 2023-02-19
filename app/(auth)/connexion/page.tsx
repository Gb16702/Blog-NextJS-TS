import Link from "next/link";
import {
  GoogleIcon,
  GithubIcon,
} from "../../../components/UI/auth/ProvidersIcons";

import FormBackground from "../../../components/FormBackground";
import {
  EmailAddress,
  Password,
  SubmitButton,
} from "../../../components/Form";


export default function Connexion() {
  return (
    <FormBackground>
      <div className="mt-10 w-full">
        <EmailAddress email="" />
        <Password password="" />
        <Link
          href=""
          className="text-[12.7px] text-slate-500/70 w-full hover:cursor-pointer flex items-center justify-center relative top-5">
          Vous avez oublié votre mot de passe ?
        </Link>
        <SubmitButton>Se connecter</SubmitButton>
      </div>
      <div className="w-full flex items-center justify-center mt-6 space-x-4">
        <GithubIcon />
        <GoogleIcon />
      </div>
    </FormBackground>
  );
}

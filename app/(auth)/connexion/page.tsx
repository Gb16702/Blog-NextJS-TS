import Link from "next/link";
import {
  GoogleIcon,
  GithubIcon,
} from "../../../components/UI/auth/ProvidersIcons";

import FormBackground from "../../../components/FormBackground";
import {
  EmailAddress,
  FirstName,
  LastName,
  Password,
  PasswordConfirm,
  SubmitButton,
} from "../../../components/Form";

import formTitle from "../../../components/UI/auth/foreGround/text";

export default function Connexion() {
  return (
    <FormBackground>
      <div className="mt-10 w-full">
        <EmailAddress email="" />
        <Password password="" />
        <SubmitButton>Se connecter</SubmitButton>
      </div>
      <div className="w-full flex items-center justify-center mt-6 space-x-4">
        <GithubIcon />
        <GoogleIcon />
      </div>
      <small className="text-zinc-400 w-full text-center block mt-7">
        Pas encore de compte ? Inscrivez-vous{" "}
        <Link href="./inscription" className="text-[#6F75F5]">
          ici
        </Link>
      </small>
    </FormBackground>
  );
}

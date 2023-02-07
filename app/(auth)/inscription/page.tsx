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

export default function Inscription() {
  return (
    <FormBackground>
      <div className="mt-10 w-full">
        <div className="flex space-x-4">
          <FirstName firstName="" />
          <LastName lastName="" />
        </div>
        <EmailAddress email="" />
        <Password password="" />
        <PasswordConfirm passwordConfirm="" />
        <SubmitButton>S'inscrire</SubmitButton>
      </div>
      <div className="w-full flex items-center justify-center mt-6 space-x-4">
        <GithubIcon />
        <GoogleIcon />
      </div>
      <small className="text-zinc-400 w-full text-center block mt-7">
        Vous avez déjà un compte ? Connectez-vous{" "}
        <Link href="./connexion" className="text-[#6F75F5]">
          ici
        </Link>
      </small>
      <small className="text-zinc-400 relative top-5 block">
        En vous inscrivant, vous acceptez nos conditions et politique
        des données
      </small>
    </FormBackground>
  );
}

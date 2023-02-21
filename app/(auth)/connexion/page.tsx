import Link from "next/link";
import {
  GoogleIcon,
  GithubIcon,
} from "../../../components/UI/auth/ProvidersIcons";

import FormBackground from "../../../components/Form/Inscription/FormErrorsHandler";



export default function Connexion() {
  return (
    <FormBackground>
      <div className="mt-10 w-full">

      </div>
      <div className="w-full flex items-center justify-center mt-6 space-x-4">
        <GithubIcon />
        <GoogleIcon />
      </div>
    </FormBackground>
  );
}

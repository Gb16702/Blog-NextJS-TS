import Banner from "./UI/auth/Banner";

export default function FormBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex items-center justify-center relative bg-[#fafafa]">
      <Banner />
      <div className="w-[570px] bg-white mx-auto h-[620px] rounded-xl px-10 py-8 relative drop-shadow-sm">
        <h2 className=" text-[#6F75F5] font-semibold text-2xl  rounded-sm tracking-[1.1px] ">
          Inscrivez-vous
        </h2>
        <h5 className="mt-2 text-zinc-600/60 text-[15.1px]">
          Rejoignez-nous en quelques clics
        </h5>
        <form className="">{children}</form>
        <small className="text-zinc-400 relative top-5 block">
          En vous inscrivant, vous acceptez nos conditions et
          politique de confidentialité.
        </small>
      </div>
    </div>
  );
}

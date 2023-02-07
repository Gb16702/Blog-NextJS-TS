export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 mb-10">
      <div>
        <h1 className="text-6xl font-bold">Le Blog de Geoffrey</h1>
        <h2 className="mt-3 text-zinc-[#2f435e]">
          Bienvenue <span className="">sur le blog préféré</span> de
          chaque développeur
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Solutions web sur mesure pour votre entreprise en évolution.
      </p>
    </div>
  );
}

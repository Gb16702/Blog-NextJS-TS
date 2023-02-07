import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className=" items-center justify-between space-x-2 px-10 fixed top-0 left-0 right-0 h-14">
      <div className="flex items-center space-x-2 max-w-7xl mx-auto bg-[#fff] h-full relative">
        {/* <Link href="/">
          <Image
            width={50}
            height={50}
            alt="Logo"
            className="rounded-full"
            src=""
          />
        </Link> */}
        <h1>Web-mastery</h1>
        <Link href="/inscription">S'authentifier</Link>
      </div>
    </header>
  );
}

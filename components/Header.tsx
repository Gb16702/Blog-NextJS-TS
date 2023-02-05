import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              width={50}
              height={50}
              alt="Logo"
              className="rounded-full"
              src=""
            />
          </Link>
        <h1>Web-mastery</h1>
        </div>
      </header>
    </>
  );
}

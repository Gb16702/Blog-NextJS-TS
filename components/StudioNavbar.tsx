import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { NavbarProps } from "sanity";

function StudioNavbar(props: NavbarProps) {
  return (
    <div>
      <div className="justify-center p-5">
        <Link href="/" className="text-[#CBB7F2] flex items-center">
          <ArrowUturnLeftIcon className="w-6 h-6 mr-2 text-[#CBB7F2]" />
          Aller sur le site
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;

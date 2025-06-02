import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo({ handleToggle }) {
  return (
    <Link
      onClick={handleToggle}
      href="/"
      className="flex items-center gap-4 z-10 flex-col md:flex-row mb-2 md:mb-0"
    >
      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={100}
      />
      <span className="text-xl font-semibold hover:text-accent-400 transition-colors text-black md:text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;

import { auth } from "../_lib/auth";
import NavToggle from "./NavToggle";

async function Header() {
  const session = await auth();

  return (
    <header className="border-b border-primary-900 p-2 md:px-8 md:py-5">
      {/* <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div> */}
      <NavToggle session={session} />
    </header>
  );
}

export default Header;

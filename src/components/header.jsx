import { Link } from "react-router-dom";
// import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        {/* logo */}
        <Link>
          <img src="/logo.png" alt="logo" className="h-20" />
        </Link>

        {/* login button */}
        {/* <Button variant="outline">Login</Button> */}

        {/* Clerk SignOut Buttons */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  );
};

export default Header;

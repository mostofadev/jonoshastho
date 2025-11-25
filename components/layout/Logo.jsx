import Image from "next/image"; 
import LogoImage from "../../public/next.svg"
import Link from "next/link";

function Logo() {
  return (
    <div className="flex shrink-0 items-center hidden lg:block">
      <Link href={"/"}>
        <Image
          width={32}
          alt="Your Company"
          src={LogoImage}
          className="h-8 w-auto"
        />
      </Link>
    </div>
  );
}

export default Logo;

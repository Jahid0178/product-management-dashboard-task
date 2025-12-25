import Link from "next/link";
import Image from "next/image";

interface Args {
  href?: string;
}

const Logo = ({ href = "/" }: Args) => {
  return (
    <Link href={href}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={300}
        height={50}
        className="w-full h-auto"
        priority
      />
    </Link>
  );
};

export default Logo;

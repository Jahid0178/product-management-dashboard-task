import Image from "next/image";
import { generateInitials } from "@/utils";

interface Args {
  name: string;
  role: string;
  imageUrl: string;
}

const UserAvatar = ({ name = "", role = "", imageUrl = "" }: Args) => {
  const initials = generateInitials(name);
  return (
    <figure className={"flex items-center gap-3 cursor-pointer"}>
      <div className="relative shrink-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${name}'s profile`}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
            {initials}
          </div>
        )}
      </div>
      <figcaption className="flex flex-col">
        <span className="text-sm font-semibold text-gray-900 leading-none truncate w-32">
          {name}
        </span>
        {role && (
          <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-medium">
            {role}
          </span>
        )}
      </figcaption>
    </figure>
  );
};

export default UserAvatar;

import UserAvatar from "@/components/common/UserAvatar/UserAvatar";

const Navbar = () => {
  return (
    <header className="p-4 border-b border-gray-200">
      <nav className="flex items-center justify-end">
        <UserAvatar
          name="John Doe"
          role="Admin"
          imageUrl=""
        />
      </nav>
    </header>
  );
};

export default Navbar;

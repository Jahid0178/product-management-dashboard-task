import { IconType } from "react-icons";

interface Args {
  onClick: () => void;
  className?: string;
  icon: IconType;
}

const IconButton = ({ onClick, className, icon }: Args) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg hover:bg-gray-100 transition-colors mx-auto ${className}`}
      aria-label="Toggle Sidebar"
    >
      {icon({ size: 16 })}
    </button>
  );
};

export default IconButton;

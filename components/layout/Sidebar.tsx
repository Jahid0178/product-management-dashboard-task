"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../common/Logo/Logo";
import { dashboardNavigations } from "@/data";
import IconButton from "../ui/IconButton/IconButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-white text-black flex flex-col gap-4 p-4 sticky top-0 border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-80"
      }`}
    >
      {/* Brand section */}
      <header className="flex items-center justify-between gap-2">
        {!isCollapsed && <Logo />}
        <IconButton
          icon={isCollapsed ? FaChevronRight : FaChevronLeft}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </header>

      {/* Navigation section */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden">
        <ul className="space-y-2">
          {dashboardNavigations.map((navigation) => (
            <li key={navigation.title}>
              <Link
                href={navigation.href}
                className={`flex items-center gap-3 p-3 rounded-lg text-gray-900 hover:bg-blue-400/20 hover:text-blue-500 font-semibold transition-all ${
                  isCollapsed ? "justify-center" : ""
                }`}
                title={navigation.title}
              >
                <span className="shrink-0">
                  {navigation.icon({ size: 20 })}
                </span>
                {!isCollapsed && (
                  <span className="whitespace-nowrap">{navigation.title}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

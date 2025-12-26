"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../common/Logo/Logo";
import { dashboardNavigations } from "@/data";
import IconButton from "../ui/IconButton/IconButton";
import {
  FaChevronLeft,
  FaChevronRight,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 bg-white rounded z-50">
        <IconButton
          icon={FaBars}
          onClick={() => setIsMobileOpen(true)}
        />
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-60 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`
          w-full h-full bg-white text-black flex flex-col gap-4 p-4 border-r border-gray-200 transition-all duration-300 z-70
          fixed top-0 left-0 transform ${
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          }
          md:sticky md:translate-x-0 ${isCollapsed ? "md:w-20" : "md:w-80"}
        `}
      >
        <header className="flex items-center justify-center gap-2">
          {(!isCollapsed || isMobileOpen) && <Logo />}

          <div className="hidden md:block">
            <IconButton
              icon={isCollapsed ? FaChevronRight : FaChevronLeft}
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          </div>

          <div className="md:hidden">
            <IconButton
              icon={FaXmark}
              onClick={() => setIsMobileOpen(false)}
            />
          </div>
        </header>

        <nav className="flex-1 overflow-y-auto overflow-x-hidden">
          <ul className="space-y-2">
            {dashboardNavigations.map((navigation) => (
              <li key={navigation.title}>
                <Link
                  href={navigation.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg text-gray-900 hover:bg-blue-400/20 hover:text-blue-500 font-semibold transition-all ${
                    isCollapsed ? "md:justify-center" : ""
                  }`}
                  title={navigation.title}
                >
                  <span className="shrink-0">
                    {navigation.icon({ size: 20 })}
                  </span>
                  {(!isCollapsed || isMobileOpen) && (
                    <span className="whitespace-nowrap">
                      {navigation.title}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

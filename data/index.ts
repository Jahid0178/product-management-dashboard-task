import { BsStack } from "react-icons/bs";
import { FaCartShopping, FaGear } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { DashboardNavigation } from "../typescript/interface";

export const dashboardNavigations: DashboardNavigation[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: MdSpaceDashboard,
  },
  {
    title: "Products",
    href: "/",
    icon: FaCartShopping,
  },
  {
    title: "Category",
    href: "#",
    icon: BsStack,
  },
  {
    title: "Settings",
    href: "#",
    icon: FaGear,
  },
];

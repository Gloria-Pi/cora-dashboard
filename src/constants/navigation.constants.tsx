import {
  ChatCircleDotsIcon,
  GearIcon,
  LightbulbIcon,
  PaletteIcon,
  SignOutIcon,
  SquaresFourIcon,
  TranslateIcon,
  TrendUpIcon,
} from "@phosphor-icons/react";

import type { AdminItemProps } from "../components/Menus/Sidebar/AdminMenu/AdminDropdown/AdminItem/AdminItem.models";
import type INavItem from "../components/Menus/Sidebar/NavItem/NavItem.models";

export const NAV_ITEMS: INavItem[] = [
  {
    to: "/overview",
    icon: <SquaresFourIcon size={26} weight="regular" />,
    label: "Overview",
    title: "Overview",
  },
  {
    to: "/opinions",
    icon: <ChatCircleDotsIcon size={26} weight="regular" />,
    label: "Opinions",
    title: "Opinions",
  },
  {
    to: "/trends",
    icon: <TrendUpIcon size={26} weight="regular" />,
    label: "Trends",
    title: "Trends",
  },
  {
    to: "/insights",
    icon: <LightbulbIcon size={26} weight="regular" />,
    label: "Insights",
    title: "Insights",
  },
];

export const ADMIN_ITEMS: AdminItemProps[] = [
  {
    label: "Language",
    icon: <TranslateIcon size={18} />,
    onClick: () => console.log("Language selected"),
  },
  {
    label: "Theme",
    icon: <PaletteIcon size={18} />,
    onClick: () => console.log("Theme selected"),
  },
  {
    label: "Settings",
    icon: <GearIcon size={18} />,
    onClick: () => console.log("Settings selected"),
  },
  {
    label: "Logout",
    icon: <SignOutIcon size={18} />,
    onClick: () => console.log("Logout selected"),
  },
];

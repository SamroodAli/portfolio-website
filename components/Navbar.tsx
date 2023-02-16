import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "@/hooks/useTheme";
import { FC } from "react";

export const Navbar: FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-end p-3 md:p-4 dark:bg-slate-900">
      <span className="absolute left-1 top-1 rounded-lg px-2 py-1  text-day-900 dark:text-white">
        Beta
      </span>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleTheme}
        sunColor="#dc4619"
        size={45}
        className="animate-spin-slow dark:animate-pulse-slow md:hover:animate-spin hover:dark:animate-pulse  dark:animate-none"
      />
    </nav>
  );
};

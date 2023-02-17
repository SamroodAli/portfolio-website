import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "@/hooks/useTheme";
import { FC } from "react";
import { Element } from "@/types/Element";
import classNames from "classnames";

export const Navbar: FC<Element> = ({ className }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={classNames(
        "flex justify-end p-3 md:p-4 dark:bg-slate-900 bg-white app-width relative",
        className
      )}
    >
      <span className="absolute left-1 top-1 rounded-lg px-2 py-1  text-day-900 dark:text-teal-300">
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

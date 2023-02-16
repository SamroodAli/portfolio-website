import classNames from "classnames";
import { Inter } from "@next/font/google";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { appActions } from "@/store/slices/app";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const inter = Inter({ subsets: ["latin"] });

export const Navbar: FC = () => {
  const { isDarkMode } = useAppSelector((state) => state.app);

  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(appActions.toggle());
  };

  return (
    <nav className="flex justify-end p-3 md:p-4 dark:bg-slate-900">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleTheme}
        sunColor="#dc4619"
        size={45}
        className={classNames({
          "animate-spin-slow md:hover:animate-spin": !isDarkMode,
        })}
      />
    </nav>
  );
};

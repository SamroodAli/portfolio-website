import classNames from "classnames";
import { Inter } from "@next/font/google";
import { FC, ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { appActions } from "@/store/slices/app";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
  className?: string;
}

export const AppLayout: FC<Props> = ({ children, className }) => {
  const { isDarkMode } = useAppSelector((state) => state.app);

  const [isWarning, setIsWarning] = useState(true);

  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(appActions.toggle());
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsWarning(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  });

  return (
    <main
      className={classNames(
        "dark:text-white absolute top-0 left-0 right-0 bottom-0 flex flex-col",
        inter.className,
        {
          dark: isDarkMode,
        }
      )}
    >
      {isWarning && (
        <div className="bg-yellow-100 p-2 -p-3 dark:bg-slate-400 dark:text-white absolute w-full pl-4">
          Beta - Work in progress
        </div>
      )}
      <nav className="flex justify-end dark:bg-slate-900 dark:text-white p-3 md:p-4">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleTheme}
          sunColor="darkOrange"
          size={45}
          className={classNames({
            "animate-spin-slow md:hover:animate-spin": !isDarkMode,
          })}
        />
      </nav>

      <div
        className={classNames(
          "dark:bg-slate-900 dark:text-white flex-grow ",
          className
        )}
      >
        {children}
      </div>
    </main>
  );
};

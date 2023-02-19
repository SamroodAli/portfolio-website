import classNames from "classnames";
import { Inter } from "@next/font/google";
import { FC, ReactNode } from "react";
import { useAppSelector } from "@/hooks/useStore";
import { Navbar } from "@/components/Navbar";
import { useThemeBgColor } from "@/hooks/useThemeBgColor";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
  className?: string;
}

export const AppLayout: FC<Props> = ({ children, className }) => {
  const { isDarkMode } = useAppSelector((state) => state.app);

  useThemeBgColor();

  return (
    <main
      className={classNames("dark:text-white flex flex-col", inter.className, {
        "dark bg-teal-900 bg-opacity-70": isDarkMode,
        "bg-day-200": !isDarkMode,
      })}
    >
      <Navbar />

      <div
        className={classNames(
          "dark:bg-slate-900 dark:text-white flex-grow app-width bg-white ",
          className
        )}
      >
        {children}
      </div>
    </main>
  );
};

import classNames from "classnames";
import { Inter } from "@next/font/google";
import { FC, ReactNode, useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/useStore";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
  className?: string;
}

export const AppLayout: FC<Props> = ({ children, className }) => {
  const { isDarkMode } = useAppSelector((state) => state.app);

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
      <Navbar />

      <div
        className={classNames(
          "dark:bg-slate-900 dark:text-white flex-grow",
          className
        )}
      >
        {children}
      </div>
    </main>
  );
};

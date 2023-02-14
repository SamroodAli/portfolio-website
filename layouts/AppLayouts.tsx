import classNames from "classnames";
import { Inter } from "@next/font/google";
import { FC, ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { Switch } from "@headlessui/react";
import { appActions } from "@/store/slices/app";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => {
  const { isDarkMode } = useAppSelector((state) => state.app);

  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(appActions.toggle());
  };

  return (
    <main
      className={classNames(
        "dark:bg-black dark:text-white absolute top-0 left-0 right-0 bottom-0 flex flex-col",
        inter.className,
        {
          dark: isDarkMode,
        }
      )}
    >
      <nav className="flex justify-end dark:bg-black dark:text-white p-3 md:p-4">
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          className={classNames(
            "relative inline-flex h-6 w-11 items-center rounded-full border bg-black dark:bg-white"
          )}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={classNames(
              "inline-block h-4 w-4 transform rounded-full transition translate-x-1 bg-white dark:translate-x-6 dark:bg-black"
            )}
          />
        </Switch>
      </nav>

      <div className="dark:bg-black dark:text-white flex-grow p-3 md:p-4">
        {children}
      </div>
    </main>
  );
};

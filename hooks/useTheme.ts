import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { appActions } from "@/store/slices/app";

export const useTheme = () => {
  const { isDarkMode } = useAppSelector((state) => state.app);

  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(appActions.toggle());
  };

  return { isDarkMode, toggleTheme };
};

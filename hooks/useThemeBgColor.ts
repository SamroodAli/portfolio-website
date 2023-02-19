import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";

export const useThemeBgColor = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#0F172A" : "#E2542C";
  }, [isDarkMode]);
};

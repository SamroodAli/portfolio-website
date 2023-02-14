import { createState } from "@/store/utils/createState";

export const { appActions, appReducer } = createState({
  name: "app",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggle: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "@/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

const persistedStore = persistStore(store);

interface Props {
  children: ReactNode;
}

export const GlobalStageProvider: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
};

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

interface AppContextType {
  empty?: boolean;
  user?: {
    name?: string;
    avatar?: string;
  };
  setUser?: Dispatch<SetStateAction<{}>>;
}

export const AppContext = createContext<AppContextType>({ empty: true });

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: Props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = {
      name: "Udin",
      avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
    };

    setUser(user);
  }, []);

  const appContextValue = { user, setUser };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

import { createContext, useState, ReactNode, useEffect } from "react";

interface MensajeContextType {
  activeUser: string;
  setActiveUser: (newUserActive: string) => void;
}

export const MenssageContext = createContext<MensajeContextType | undefined>(
  undefined
);

export const MenssageProvider = ({ children }: { children: ReactNode }) => {
  const [activeUser, setActiveUser] = useState(() => {
    return localStorage.getItem("activeUser") || "INICIAR SESIÓN";
  });

  useEffect(() => {
    localStorage.setItem("activeUser", activeUser);
  }, [activeUser]);

  return (
    <MenssageContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </MenssageContext.Provider>
  );
};

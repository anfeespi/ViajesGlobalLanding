import { createContext, useContext, useState, ReactNode } from "react";

// Define los tipos para el contexto
interface ModalContextType {
  isModalOpenRegistration: boolean;
  openModalRegistration: () => void;
  closeModalRegistration: () => void;

  isModalOpenShopping: boolean;
  openModalShopping: () => void;
  closeModalShopping: () => void;
}

// Crea el contexto
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Proveedor del contexto
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpenRegistration, setIsModalOpenRegistration] =
    useState<boolean>(false);
  const [isModalOpenShopping, setIsModalOpenShopping] =
    useState<boolean>(false);

  const openModalRegistration = () => setIsModalOpenRegistration(true);
  const closeModalRegistration = () => setIsModalOpenRegistration(false);

  const openModalShopping = () => setIsModalOpenShopping(true);
  const closeModalShopping = () => setIsModalOpenShopping(false);
  return (
    <ModalContext.Provider
      value={{
        isModalOpenRegistration,
        openModalRegistration,
        closeModalRegistration,
        isModalOpenShopping,
        openModalShopping,
        closeModalShopping,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Hook para usar el contexto
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal debe ser usado dentro de un ModalProvider");
  }
  return context;
};

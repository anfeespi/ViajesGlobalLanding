import { useRef, useEffect, useState } from "react";
import { useModal } from "../hooks/ModalContextType";
import TravelHistory from "./TravelHistory";

export default function ShoppingCart() {
  const { isModalOpenShopping, closeModalShopping } = useModal();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isModalOpenShopping && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isModalOpenShopping]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed rounded-lg w-8/12 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-8"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-7">Historial de compras</h2>
        <button
          className="text-lg p-1 rounded-md w-14 border-2 bg-red-600 text-white hover:text-red-600 hover:bg-white hover:border-red-600 mb-4"
          onClick={closeModalShopping}
        >
          X
        </button>
      </div>
      <ul className="bg-white-700 w-full max-w-7xl grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-6">
        <TravelHistory />
        <TravelHistory />
        <TravelHistory />
        <TravelHistory />
        <TravelHistory />
        <TravelHistory />
        <TravelHistory />
      </ul>
    </dialog>
  );
}

import React from "react";

export default function FindExcursion() {
  return (
    <div className="flex flex-col border-2 shadow-lg shadow-black/40 rounded-xl p-6 w-full mb-3">
      <div className="flex flex-row bg-gradient-to-r from-[#5fbfe0] to-[#ffffff] justify-center items-center gap-4 mb-8 p-4 rounded-xl">
        <img
          src="../img/Excursionismo.png"
          alt="imagen icono de hotel"
          className="w-8 h-8"
        />
        <h1 className="text-center text-xl font-bold">
          Excursiones disponibles
        </h1>
      </div>
      <label className="font-semibold">Selecione excursion</label>
      <select
        className="text-base w-full  p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
        id="excursion_name"
        name="nombre_excursion"
      >
        <option value="" disabled hidden>
          Nombre del excursion
        </option>
      </select>
      <label className="font-bold mt-3">Detalles de excursion</label>
      <p>Detalle</p>
      <label className="font-bold mt-3">Cantidad de personas</label>
      <input
        type="number"
        className="text-base w-full  p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
      />
      <label className="font-bold mt-3">Precio por persona</label>
      <p>0</p>
    </div>
  );
}

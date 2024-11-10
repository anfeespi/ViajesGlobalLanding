import React, { useState } from "react";

export default function TravelSearch() {
  const [formData, setFormData] = useState({
    origen: "",
    destino: "",
    fechaInicio: "",
    fechaFin: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };
  return (
    <div className="flex justify-center w-full">
      <form
        className="flex justify-between inset-0 bg-black/50 rounded-lg py-4 px-9 mt-6 gap-x-16 items-center max-w-7xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col max-w-34">
          <label htmlFor="origen" className="text-white text-base">
            Origen
          </label>
          <select
            name="origen"
            id="origen"
            value={formData.origen}
            onChange={handleChange}
            className="border-none bg-transparent outline-none appearance-none text-white"
          >
            <option value="" disabled hidden>
              Seleccione ciudad origen
            </option>
          </select>
        </div>

        <div className="flex flex-col max-w-34">
          <label htmlFor="destino" className="text-white text-base">
            Destino
          </label>
          <select
            name="destino"
            id="destino"
            value={formData.destino}
            onChange={handleChange}
            className="border-none bg-transparent outline-none appearance-none text-white"
          >
            <option value="" disabled hidden>
              Seleccione ciudad destino
            </option>
          </select>
        </div>

        <div className="flex flex-col max-w-34">
          <label htmlFor="fechaInicio" className="text-white text-base">
            Fecha de inicio
          </label>
          <input
            name="fechaInicio"
            id="fechaInicio"
            value={formData.fechaInicio}
            onChange={handleChange}
            className="border-none bg-transparent outline-none appearance-none text-white"
            type="date"
          />
        </div>

        <div className="flex flex-col max-w-34">
          <label htmlFor="fechaFin" className="text-white text-base">
            Fecha de fin
          </label>
          <input
            name="fechaFin"
            id="fechaFin"
            value={formData.fechaFin}
            onChange={handleChange}
            className="border-none bg-transparent outline-none appearance-none text-white"
            type="date"
          />
        </div>

        <button
          className="flex flex-row items-center gap-x-2 text-lg p-2 rounded-md w-full border-2 text-white"
          type="submit"
        >
          <img src="../img/Lupa.png" alt="Buscar" className="h-7 w-7" />
          Buscar
        </button>
      </form>
    </div>
  );
}

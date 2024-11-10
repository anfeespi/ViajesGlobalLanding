export default function FindHotel() {
  return (
    <div className="flex flex-col border-2 shadow-lg shadow-black/40 rounded-xl p-6 w-full mb-3">
      <div className="flex flex-row bg-gradient-to-r from-[#5fbfe0] to-[#ffff] justify-center rounded-xl items-center gap-4 mb-8 p-4">
        <img
          src="../img/Hotel.png"
          alt="imagen icono de hotel"
          className="w-8 h-8"
        />
        <h1 className="text-center text-xl font-bold">Hoteles disponibles</h1>
      </div>
      <p className="font-semibold">Selecione hotel</p>
      <select className="text-base w-full  p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]">
        <option value="" disabled hidden>
          Nombre del hotel
        </option>
      </select>
      <label className="font-bold mt-3">Detalles de hotel</label>
      <p>Detalle</p>
      <label className="font-bold mt-3">Lugar turistico</label>
      <p>Lugar</p>
      <label className="font-bold mt-3">Descripción de lugar turistico</label>
      <p>Descripción</p>
      <label className="font-bold mt-3">Número de huespedes</label>
      <p>0</p>
      <label className="font-bold mt-3">Valor por noche</label>
      <p>0</p>
    </div>
  );
}

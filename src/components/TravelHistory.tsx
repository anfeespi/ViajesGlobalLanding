export default function TravelHistory() {
  return (
    <div className="flex flex-col gap-y-1 w-full h-full max-h-72 rounded-2xl shadow-lg shadow-black/50 p-4 transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-b from-[#2c687d] to-white">
      <h3 className="text-center text-black font-semibold">Aerolinea</h3>
      <p>Tipo vuelo</p>
      <p>Hotel</p>
      <p>Ciudad origen</p>
      <p>Ciudad destino</p>
      <p>Fecha inicio</p>
      <p>Fecha fin</p>
      <p className="text-center text-black font-semibold">Total tarifa</p>
    </div>
  );
}

type TripInformationProps = {
  airline: string;
  travelType: string;
  cityOrigin: string;
  cityDestiny: string;
  dateStart: string;
  dateEnd: string;
  price: string;
};

export default function TripInformation({
  airline,
  travelType,
  cityOrigin,
  cityDestiny,
  dateStart,
  dateEnd,
  price,
}: TripInformationProps) {
  return (
    <section id="tripInfo" className="flex flex-row gap-x-6 mb-4">
      <div className="flex flex-col border-2 shadow-lg shadow-black/40 rounded-xl p-6 w-full">
        <div className="flex flex-row bg-gradient-to-r from-[#5fbfe0] to-[#ffffff] justify-center items-center gap-4 mb-8 p-4 rounded-xl">
          <img
            src="../img/Avion.png"
            alt="plane icon image"
            className="w-8 h-8"
          />
          <h1 className="text-center text-xl font-bold">Flight Information</h1>
        </div>
        <label className="font-semibold mt-3">Aerolinea</label>
        <p>{airline}</p>
        <input type="hidden" name="aerolinea" value={airline} />

        <label className="font-semibold mt-3">Tipo de vuelo</label>
        <p>{travelType}</p>
        <input type="hidden" name="tipo_vuelo" value={travelType} />

        <label className="font-semibold mt-3">Ciudad de origen</label>
        <p>{cityOrigin}</p>
        <input type="hidden" name="lugar_turistico_origen" value={cityOrigin} />

        <label className="font-semibold mt-3">Ciudad de destino</label>
        <p>{cityDestiny}</p>
        <input
          type="hidden"
          name="lugar_turistico_destino"
          value={cityDestiny}
        />

        <label className="font-semibold mt-3">Fecha inicio</label>
        <p>{dateStart}</p>
        <input type="hidden" name="fechas_inicio" value={dateStart} />

        <label className="font-semibold mt-3">Fecha fin</label>
        <p>{dateEnd}</p>
        <input type="hidden" name="fecha_fin" value={dateEnd} />

        <label className="font-semibold mt-3">Precio</label>
        <p id="fare">$ {price}</p>
        <input type="hidden" name="total_tarifa" value={price} />
      </div>

      <div className="flex flex-col border-2 shadow-lg shadow-black/40 rounded-xl p-6 w-full">
        <div className="flex flex-row bg-gradient-to-r from-[#5fbfe0] to-[#ffffff] justify-center items-center gap-4 mb-8 p-4 rounded-xl">
          <img
            src="../img/Opciones.png"
            alt="options icon image"
            className="w-8 h-8"
          />
          <h1 className="text-center text-xl font-bold">Opciones</h1>
        </div>

        <div className="border-2 shadow-lg shadow-black/20 rounded-md p-6 w-full mb-4">
          <h2 className="text-xl font-semibold mb-6">Tipo de pasajero</h2>
          <label htmlFor="passengerType" className="font-bold mt-3">
            Seleccione el tipo de pasajero
          </label>
          <select
            name="tipo_pasajero"
            id="passengerType"
            className="text-base w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
          >
            <option value="turist">Turista</option>
            <option value="business">Ejecutivo</option>
            <option value="firstClass">Primera clase</option>
          </select>
        </div>

        <div className="border-2 shadow-lg shadow-black/20 rounded-md p-6 w-full mb-4">
          <h2 className="text-xl font-semibold mb-6">Tipo de equipaje</h2>
          <label htmlFor="baggageType" className="font-bold mt-3">
            Seleccione el tipo de equipaje
          </label>
          <select
            name="tipo_equipaje"
            id="baggageType"
            className="text-base w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
          >
            <option value="Equipaje de mano">Equipaje de mano</option>
            <option value="Equipaje de bodega">Equipaje de bodega</option>
          </select>
        </div>

        <div className="border-2 shadow-lg shadow-black/20 rounded-md p-6 w-full mb-4">
          <h2 className="text-xl font-semibold mb-6">Tipo de vuelo</h2>
          <label htmlFor="flightType" className="font-bold mt-3">
            Seleccione tipo de vuelo
          </label>
          <select
            name="tipo_vuelo"
            id="flightType"
            className="text-base w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
          >
            <option value="Vuelo directo">Vuelo directo</option>
            <option value="Maximo una escala">Maximo una escala</option>
            <option value="Maximo dos escala">Maximo dos escala</option>
          </select>
        </div>
      </div>
    </section>
  );
}

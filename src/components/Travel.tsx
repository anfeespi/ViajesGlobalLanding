import "../index.css";
import { useNavigate } from "react-router-dom";
import { toastWarning } from "../hooks/ToastNotification";

export default function Travel() {
  let navigate = useNavigate();

  let Data = {
    airline: "Avianca",
    travelType: "Privado",
    cityOrigin: "Colombia",
    cityDestiny: "Para el mundo",
    dateStart: "00/07/05",
    dateEnd: "00/07/05",
    price: "1000",
  };

  const handleBuy = () => {
    if (localStorage.getItem("activeUser") === "INICIAR SESIÓN") {
      toastWarning("Debe iniciar sesión para proceder con la compra...");
      return navigate("/login");
    } else {
      return navigate("/buy", { state: Data });
    }
  };

  return (
    <div className="flex flex-col gap-y-1 w-full rounded-2xl shadow-lg shadow-black/50 p-4 transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-b from-[#5fbfe0] to-white">
      <h3 className="text-center text-black font-semibold mb-4">
        {Data.airline}
      </h3>
      <p>Tipo vuelo: {Data.travelType}</p>
      <p>Ciudad origen: {Data.cityOrigin}</p>
      <p>Ciudad destino: {Data.cityDestiny}</p>
      <p>Fecha inicio: {Data.dateStart}</p>
      <p>Fecha fin: {Data.dateEnd}</p>
      <p className="text-center text-black font-semibold mt-4">Total tarifa</p>
      <p className="text-center text-black font-medium">$ {Data.price}</p>
      <button
        className="rounded-lg bg-gradient-to-b from-[#64eaff] to-[#24728b] p-2 text-white font-bold text-lg mt-3"
        onClick={handleBuy}
      >
        Comprar
      </button>
    </div>
  );
}

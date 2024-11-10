import Header from "../components/Header";
import Footer from "../components/Footer";
import FindHotel from "../components/FindHotel";
import FindExcursion from "../components/FindExcursion";
import { toastSuccess } from "../hooks/ToastNotification";
import { useLocation } from "react-router-dom";
import TripInformation from "../components/TripInformation";
import { useRef, useState, useEffect } from "react";
import PaymentSection from "../components/PaymentSection";

type BuyProps = {
  airline: string;
  travelType: string;
  cityOrigin: string;
  cityDestiny: string;
  dateStart: string;
  dateEnd: string;
  price: string;
};

export default function Buy() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<any>({});
  const location = useLocation();
  const {
    airline,
    travelType,
    cityOrigin,
    cityDestiny,
    dateStart,
    dateEnd,
    price,
  } = location.state as BuyProps;

  const handleSubmit = () => {
    if (formRef.current) {
      toastSuccess("¡Compra realizada con exito!");
      const formData = new FormData(formRef.current);
      setFormData(Object.fromEntries(formData.entries()));
    }
  };

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      console.log("Información del formulario:", formData);
    }
  }, [formData]);

  return (
    <>
      <Header />
      <main className="flex justify-center bg-[url('../img/Playa.png')] relative w-full min-h-screen bg-fixed bg-center bg-cover bg-no-repeat p-20">
        <form
          className="flex flex-col bg-white w-full max-w-7xl p-8 rounded-xl gap-y-6"
          ref={formRef}
        >
          <h1 className="text-3xl text-center font-bold">Ajuste su vuelo</h1>
          <TripInformation
            airline={airline}
            travelType={travelType}
            cityOrigin={cityOrigin}
            cityDestiny={cityDestiny}
            dateStart={dateStart}
            dateEnd={dateEnd}
            price={price}
          />
          <h2 className="text-3xl text-center font-bold">Adicionales</h2>
          <div className="flex flex-row gap-x-6">
            <FindHotel />
            <FindExcursion />
          </div>
          <PaymentSection />
          <button
            type="button" // Aquí se asegura que el botón no intente enviar el formulario por defecto
            className="rounded-xl bg-gradient-to-b from-[#64eaff] to-[#24728b] p-6 text-white font-bold text-2xl mt-3"
            onClick={handleSubmit}
          >
            Confirmar compra
          </button>

          {/* Visualización de los datos enviados */}
          {Object.keys(formData).length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">
                Resultado del formulario:
              </h2>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          )}
        </form>
      </main>
      <Footer />
    </>
  );
}

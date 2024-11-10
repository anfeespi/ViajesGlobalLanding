import React from "react";

export default function PaymentSection() {
  const redirectLink = () => {
    window.location.href = "https://www.paypal.com";
  };
  return (
    <div
      id="billing-section"
      className="flex flex-col border-2 shadow-lg shadow-black/40 rounded-xl p-6 w-full"
    >
      <div
        id="billing-header"
        className="flex flex-row bg-gradient-to-r from-[#5fbfe0] to-[#ffffff] justify-center items-center gap-4 mb-8 p-4 rounded-xl"
      >
        <img
          src="../img/Factura.png"
          alt="imagen icono de hotel"
          className="w-8 h-8"
        />
        <h1 className="text-center text-xl font-bold">Datos de facturación</h1>
      </div>
      <label htmlFor="account-holder-info" className="text-base mb-4">
        Por favor ingresar la información del titular.
      </label>
      <div className="flex flex-row w-full gap-14 mb-9">
        <select
          id="id_document_type"
          name="idDocumentType"
          className="text-lg w-full max-w-64 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
        >
          <option value="" disabled selected hidden>
            Documento de identidad
          </option>
          <option value="cc">Cédula ciudadania</option>
          <option value="ce">Cédula extranjera</option>
          <option value="ti">Tarjeta de identidad</option>
        </select>
        <input
          type="number"
          id="id_number"
          name="id_usuario"
          className="text-lg w-full max-w-64 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
          placeholder="# Identificación"
        />
      </div>
      <label htmlFor="payment-method" className="text-base mb-4">
        Seleccione su forma de pago.
      </label>
      <div id="payment-method" className="flex flex-col space-y-4">
        <button
          id="paypal-button"
          name="paypalButton"
          className="flex justify-center w-full border-2 border-gray-400 rounded-xl"
          onClick={redirectLink}
        >
          <img
            src="../img/Paypal.png"
            alt="imagen icono de hotel"
            className="w-32 h-24"
          />
        </button>
        <div
          id="card-payment"
          className="flex flex-row border-2 border-gray-400 rounded-xl p-7 items-center gap-x-10 justify-center"
        >
          <img
            src="../img/Pagos.png"
            alt="imagen icono de hotel"
            className="w-24 h-20"
          />
          <div className="flex flex-col">
            <label htmlFor="card-number" className="text-base mb-4">
              Ingrese el numero de su tarjeta.
            </label>
            <input
              type="number"
              id="card_number"
              name="numero_tarjeta"
              className="text-lg w-full max-w-64 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
              placeholder="# Tarjeta"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

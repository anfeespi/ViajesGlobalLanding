import { useRef, useEffect, useState } from "react";
import { toastSuccess } from "../hooks/ToastNotification";
import { useModal } from "../hooks/ModalContextType";

const RegistrationForm = () => {
  const { isModalOpenRegistration, closeModalRegistration } = useModal();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const initialFormState = {
    name: "",
    lastName: "",
    gender: "",
    identification: "",
    idNumber: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    notification: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const resetForm = () => setFormData(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Mostrar una notificación de éxito
    toastSuccess("Registro completado");
  };

  useEffect(() => {
    if (isModalOpenRegistration && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
      resetForm();
    }
  }, [isModalOpenRegistration]);

  return (
    <dialog
      ref={dialogRef}
      id="registrationDialog"
      className="fixed rounded-lg p-6 w-8/12 h-3/4 max-w-4xl max-h-[34rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-7">Registration Form</h2>
        <button
          id="closeButton"
          className="text-lg p-1 rounded-md w-14 border-2 bg-red-600 text-white hover:text-red-600 hover:bg-white hover:border-red-600 mb-4"
          onClick={closeModalRegistration}
        >
          X
        </button>
      </div>
      <form id="registrationForm" className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-row w-full gap-14">
          <input
            type="text"
            id="name"
            className="text-lg w-full max-w-64 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            id="lastName"
            className="text-lg w-full max-w-64 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={handleChange}
          />
          <select
            id="gender"
            className="text-lg w-full max-w-64 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Genero
            </option>
            <option value="Masculino">Male</option>
            <option value="Femenino">Female</option>
          </select>
        </div>
        <div className="flex flex-row w-full gap-14">
          <select
            id="identification"
            className="text-lg w-full max-w-64 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            value={formData.identification}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Tipo de identificación
            </option>
            <option value="cc">Cedula de ciudadania</option>
            <option value="ce">Cedula extranjera</option>
          </select>
          <input
            type="text"
            id="idNumber"
            className="text-lg w-full max-w-64 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            placeholder="# Identificación"
            value={formData.idNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            id="phoneNumber"
            className="text-lg w-full max-w-64 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            placeholder="# Celular"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          id="email"
          className="text-lg w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
          placeholder="Correo electronico"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="flex flex-row gap-14">
          <input
            type="password"
            id="password"
            className="text-lg w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            id="confirmPassword"
            className="text-lg w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-14">
          <input
            type="date"
            id="birthDate"
            className="text-lg w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            value={formData.birthDate}
            onChange={handleChange}
          />
          <select
            id="notification"
            className="text-lg w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
            value={formData.notification}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Tipo de notificación
            </option>
            <option value="sms">SMS</option>
            <option value="emailMessage">Email</option>
          </select>
        </div>
        <div className="flex gap-10">
          <button
            id="submitButton"
            className="text-lg p-1 rounded-md w-32 border-2 bg-[#5fbfe0] text-white hover:text-[#5fbfe0] hover:bg-white hover:border-[#5fbfe0] mt-5"
            type="submit"
            onClick={closeModalRegistration}
          >
            Registrarme
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default RegistrationForm;

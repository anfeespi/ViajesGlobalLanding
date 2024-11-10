import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MenssageContext } from "../hooks/LocalContext";
import { useModal } from "../hooks/ModalContextType";
import { toastInfo } from "../hooks/ToastNotification";

export default function Header() {
  let navigate = useNavigate();
  const context = useContext(MenssageContext);
  const { openModalShopping } = useModal();

  const handleLogout = () => {
    toastInfo("Sesión finalizada");
    navigate("/login");
    context?.setActiveUser("INICIAR SESIÓN");
  };

  return (
    <header className="text-xl font-bold w-full bg-white px-16 py-2">
      <nav className="flex flex-row justify-between items-center">
        <div>
          <img
            src="../public/img/Logo.png"
            alt="Logo viajes global"
            className="w-48 h-20"
          />
        </div>
        <div className="flex flex-row gap-12">
          <button
            className="hover:border-t-4 hover:border-[#0d75a2]"
            onClick={() => navigate("/home")}
          >
            INICIO
          </button>
          <button
            className="hover:border-t-4 hover:border-[#0d75a2]"
            onClick={() => navigate("/home")}
          >
            PROMOCIONES
          </button>
          <button
            className="hover:border-t-4 hover:border-[#0d75a2]"
            onClick={() => navigate("/home")}
          >
            INFORMACIÓN Y AYUDA
          </button>
        </div>
        {context?.activeUser === "INICIAR SESIÓN" ? (
          <button
            className="text-white bg-[#5fbfe0] py-2 px-4 border-2 rounded-lg hover:bg-gradient-to-r from-[#5fbfe0] to-[#0d75a2]"
            onClick={() => navigate("/login")}
          >
            {context?.activeUser}
          </button>
        ) : (
          <div className="flex flex-row gap-x-1">
            <button
              className="bg-[#5fbfe0] py-2 px-4 border-2 rounded-lg hover:bg-gradient-to-r from-[#5fbfe0] to-[#0d75a2]"
              onClick={openModalShopping}
            >
              <img
                src="../img/Compra.png"
                alt="carrito compra"
                className="w-7 h-7"
              />
            </button>
            <button
              className="text-white bg-[#d82727] py-2 px-4 border-2 rounded-lg hover:bg-gradient-to-r from-[#e04d4d] to-[#860101]"
              onClick={handleLogout}
            >
              {context?.activeUser}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

import Header from "../components/Header";
import TravelSearch from "../components/TravelSearch";
import TravelList from "../components/TravelList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between bg-[url('../img/Ciudad.png')] relative w-full min-h-screen bg-fixed bg-center bg-cover bg-no-repeat ">
        <TravelSearch />
        <label className="block text-6xl text-white font-semibold text-center mt-32 mb-44">
          ¡Conoce nuestra oferta de viajes!
        </label>
        <TravelList />
      </main>
      <Footer />
    </>
  );
}

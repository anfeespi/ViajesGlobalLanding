import Travel from "./Travel";
export default function TravelList() {
  return (
    <div className="flex justify-center w-full  bg-white py-7 ">
      <ul className="bg-white w-full max-w-7xl grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-8">
        <Travel />
        <Travel />
        <Travel />
        <Travel />
      </ul>
    </div>
  );
}

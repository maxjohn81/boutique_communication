import accueil_img from "../images/iphone.svg";
export default function Accueil() {
  return (
    <>
      <div className="overflow w-lg overflow-hidden h-screen mt-25 max-sm:w-[100%]">
        <img className="w-xl scale-120 object-center" src={accueil_img} alt="image_accueil" />
      </div>
    </>
  );
}

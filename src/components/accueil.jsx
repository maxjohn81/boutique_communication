import accueil_img from "../images/iphone.svg";
export default function Accueil() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="overflow w-auto overflow-hidden  mt-25 max-sm:w-[300px] max-sm:h-auto">
          <img
            className="w-xl scale-120 object-center"
            src={accueil_img}
            alt="image_accueil"
          />
        </div>
      </div>
    </>
  );
}

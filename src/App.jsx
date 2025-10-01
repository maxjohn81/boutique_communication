import "./App.css";
import Accueil from "./components/accueil";

function App() {
  return (
    <>
      <header className="navBar z-10 flex justify-center items-center shadow-lg backdrop-blur-[4px]">
        <div className="flex justify-around  w-full">
          <div>
            <h1 className="font-bold text-2xl">D'Ando Communication</h1>
          </div>
          <div>
            <button className="bg-stone-900 text-white p-2 w-[100px] rounded-full">
              Menu
            </button>
          </div>
        </div>
      </header>
      <div className="max-sm:h-[150px]"></div>
      <div className="flex justify-around bg-[#FCF7F3] max-sm:flex-col max-sm:justify-evenly max-sm:w-[100%]">
        <div className="h-screen flex justify-center items-center w-[50%] max-sm:h-auto w-auto">
          <div>
            <h1 className="text-center text-2xl">Bienvenu chez nous</h1>
            <h1 className="text-[100px] font-bold max-sm:text-[80px]">
              Découvrez <br /> nos offres
            </h1>
            <button className="text-stone-700 p-2 w-xs rounded-full border text-center text-lg mt-4 font-bold hover:border-sky-700 duration-100">
              Explorez
            </button>
          </div>
        </div>
        <div>
          <Accueil />
        </div>
      </div>
    </>
  );
}

export default App;

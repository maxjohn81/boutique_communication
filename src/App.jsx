import "./App.css";
import Accueil from "./components/accueil";
import Produit from "./components/produit";
import smartphone from "./images/smartphone-153650.svg";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <header className="navBar z-10 flex justify-center items-center shadow-lg backdrop-blur-[4px]">
        <div className="flex justify-around  w-full items-center">
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
      <div className="max-xl:h-[150px]"></div>
      <div className="shadow shadow-xl rounded-lg flex bg-[#FCF7F3] justify-around flex-wrap max-sm:flex-col max-sm:justify-evenly max-sm:w-[100%] w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className=" flex justify-center items-center max-sm:h-auto w-auto"
        >
          <div className="m-1 p-2 flex flex-col">
            <h1 className="text-center text-2xl">Bienvenu chez nous</h1>
            <h1 className="text-[100px] font-bold max-sm:text-[50px] text-center">
              Découvrez <br /> nos offres
            </h1>
            <button className="text-stone-700 p-2 w-xs rounded-full border text-center text-lg mt-4 font-bold hover:border-sky-700 hover:text-sky-700 duration-200">
              Explorez
            </button>
          </div>
        </motion.div>
        <div>
          <Accueil />
        </div>
      </div>
      <div className="mt-15">
        <h1 className="text-[100px] max-lg:text-[70px] font-bold max-sm:text-[50px] text-center">
          Produits Disponible
        </h1>
        <div className="pt-10 grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 flex-wrap justify-items-center">
          <Produit
            src={smartphone}
            alt="redmi"
            prix="à partir 130.000 Ar"
            smartphone="Redmi"
          />
          <Produit
            src={smartphone}
            alt="realme"
            prix="à partir 150.000 Ar"
            smartphone="Realmi"
          />
          <Produit
            src={smartphone}
            alt="OPPO"
            prix="à partir 110.000 Ar"
            smartphone="OPPO"
          />
          <Produit
            src={smartphone}
            alt="VIVO"
            prix="à partir 100.000 Ar"
            smartphone="VIVO"
          />
          <Produit
            src={smartphone}
            alt="tablete"
            prix="à partir 300.000 Ar"
            smartphone="Tablette"
          />
          <Produit
            src={smartphone}
            alt="huawai"
            prix="à partir 230.000 Ar"
            smartphone="Huawai"
          />
        </div>
      </div>
    </>
  );
}

export default App;

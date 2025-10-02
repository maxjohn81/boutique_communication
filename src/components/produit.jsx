import {motion} from 'framer-motion'
export default function Produit({ ...props }) {
  return (
    <>
      <motion.div initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} className="mt-5 shadow-xl/30 w-[300px] h-[320px] pt-2 rounded-lg hover:scale-101 duration-100">
        <div className="w-[25px] h-[25px] rounded-full bg-green-500 fixed left-70 z-10 items-center justify-center flex">
          <div className="w-[25px] h-[25px] bg-green-500 rounded-full animate-ping"></div>
        </div>
        <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 overflow-hidden hover:overflow-normak h-[150px] duration-100 rounded-t-lg">
          <img
            className="hover:scale-105 hover:-translate-y-10 duration-100 object-center"
            src={props.src}
            alt={props.alt}
          />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold m-2 ">{props.smartphone}</h1>
          <hr />
          <p className="text-green-500 font-bold m-2">Prix {props.prix}</p>
          <button className="mt-5">
            <a className="rounded-lg font-bold shadow p-3 hover:shadow-sky-200" href="#">
              Regarder plus détails
            </a>
          </button>
        </div>
      </motion.div>
    </>
  );
}

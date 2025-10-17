import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Link = [
  { link: "Accueil", href: "#accueil" },
  { link: "A propos", href: "#propo" },
  { link: "Services", href: "#service" },
  { link: "Contacts", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <>
      <header
        className={`shadow-sm py-2 fixed w-full transition-all duration-300 ${
          isScrolled ? "bg-sky-500/50 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-5 md:px-10 lg:px-13">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-semibold">
                D'Ando <br /> communication
              </p>
            </div>

            {/* dektop navigation */}
            <div className="hidden md:block">
              <ul className="flex gap-5 lg:gap-10">
                {Link.map((items) => (
                  <li>
                    <a
                      className="text-black border border-stone-600 hover:text-white hover:bg-black focus:bg-black focus:text-white duration-200 p-2 px-5 w-auto rounded-full font-semibold"
                      href={items.href}
                    >
                      {items.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile navbar */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black border border-stone-600 hover:text-white hover:bg-black focus:bg-black focus:text-white duration-200 p-2 w-20 rounded-full font-semibold"
              >
                Menu
              </button>
            </div>

            {/* menu mobile */}
            <motion.div
              initial={{ width: 0, opacity: 0, display: "none" }}
              animate={{
                width: isOpen ? "300px" : 0,
                opacity: isOpen ? 1 : 0,
                display: isOpen ? "block" : "none",
              }}
              transition={{ duration: 0.2 }}
              className="fixed h-screen md:bg-transparent md:-z-10 top-0 right-0 bg-white px-2 border-l-1 md:border-none border-l-stone-200"
            >
              <div className="w-full flex justify-end my-4 md:hidden">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-4xl mr-5"
                >
                  x
                </button>
              </div>
              <div className="md:hidden">
                <ul className="space-y-10">
                  {Link.map((items) => (
                    <li>
                      <a
                        onClick={() => setIsOpen(false)}
                        className="duration-200 px-5 p-2 flex text-xl font-semibold border border-stone-200 rounded-sm"
                        href={items.href}
                      >
                        {items.link}
                      </a>
                    </li>
                  ))}
                </ul>
                <div>
                  <button className="w-full my-5 text-black border border-stone-600 hover:text-white hover:bg-black focus:bg-black focus:text-white duration-200 p-2 rounded-full font-semibold">
                    Nous contacter
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
}

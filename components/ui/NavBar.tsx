import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { BsCodeSlash } from "react-icons/bs";
import { Loader } from "./index";

export const NavBar = () => {
  const router = useRouter();

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (router.asPath) {
      setActiveLink(router.asPath.split("/")[1]);
    }
  }, [activeLink, router]);

  return (
    <header
      className="min-w-full  font-roboto border-b border-twitch-light shadow-lg fixed top-0 left-0 z-50"
      style={{ backgroundColor: "rgb(31 41 55" }}
    >
      <Loader />
      <div className="px-5 py-4 mx-auto flex justify-between items-center lg:max-w-5xl xl:max-w-6xl">
        <div className="hidden sm:flex text-step-1">
          <Link href="#inicio" passHref legacyBehavior>
            <a className="cursor-pointer text-lg">
              {/* <BsCodeSlash /> */}
              jy.code
            </a>
          </Link>
        </div>
        <nav className="w-full sm:w-auto">
          <ul className="gap-0 flex justify-between items-center sm:gap-5 text-step--1 font-bold">
            <li>
              <Link href="#experiencia" passHref legacyBehavior>
                <a
                  className={`transition-colors duration-300 ease-in-out flex items-center gap-1 p-1 hover:text-blue-main ${
                    activeLink === "#experiencia" && "text-blue-main"
                  }`}
                >
                  Experiencia
                </a>
              </Link>
            </li>
            <li>
              <Link href="#conocimientos" passHref legacyBehavior>
                <a
                  className={`transition-colors duration-300 ease-in-out flex items-center gap-1 p-1 hover:text-blue-main ${
                    activeLink === "#conocimientos" && "text-blue-main"
                  }`}
                >
                  Conocimientos
                </a>
              </Link>
            </li>
            <li>
              <Link href="#proyectos" passHref legacyBehavior>
                <a
                  className={`transition-colors duration-300 ease-in-out flex items-center gap-1 p-1 hover:text-blue-main ${
                    activeLink === "#proyectos" && "text-blue-main"
                  }`}
                >
                  Proyectos
                </a>
              </Link>
            </li>
            <li>
              <Link href="#contacto" passHref legacyBehavior>
                <a
                  className={`transition-colors duration-300 ease-in-out flex items-center gap-1 p-1 hover:text-blue-main ${
                    activeLink === "#contacto" && "text-blue-main"
                  }`}
                >
                  Contacto
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TypedOptions } from "typed.js";
import { IAbility, IProject, SocialMedia } from "../interfaces";

export const options: TypedOptions = {
  strings: ["Software Engineer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
};

export const abilities: IAbility[] = [
  {
    name: "React",
    type: "Frontend",
    imageUrl: "/icons/react.svg",
  },
  {
    name: "Nextjs",
    type: "Frontend",
    imageUrl: "/icons/nextjs.svg",
  },
  {
    name: "TypeScript",
    type: "Frontend",
    imageUrl: "/icons/typescript.svg",
  },
  {
    name: "Nodejs",
    type: "Backend",
    imageUrl: "/icons/nodejs.svg",
  },
  {
    name: "Storybook",
    type: "Frontend",
    imageUrl: "/icons/storybook.svg",
  },
  {
    name: "Bootstrap",
    type: "Frontend",
    imageUrl: "/icons/bootstrap.svg",
  },
  {
    name: "Express",
    type: "Backend",
    imageUrl: "/icons/express.png",
  },
  {
    name: "MongoDB",
    type: "Database",
    imageUrl: "/icons/mongodb.svg",
  },
  {
    name: "html",
    type: "Frontend",
    imageUrl: "/icons/html.svg",
  },
  {
    name: "css",
    type: "Frontend",
    imageUrl: "/icons/css.svg",
  },
  {
    name: "JavaScript",
    type: "Frontend",
    imageUrl: "/icons/javascript.svg",
  },
  {
    name: "Styled Components",
    type: "Frontend",
    imageUrl: "/icons/styled-components.png",
  },
  {
    name: "Sass",
    type: "Frontend",
    imageUrl: "/icons/sass.png",
  },
  {
    name: "Tailwind Css",
    type: "Frontend",
    imageUrl: "/icons/tailwind-css.png",
  },
  {
    name: "Zustand",
    type: "Frontend",
    imageUrl: "/icons/zustand.png",
  },
  {
    name: "Firebase",
    type: "Frontend",
    imageUrl: "/icons/firebase.svg",
  },
  {
    name: "React Router",
    type: "Frontend",
    imageUrl: "/icons/react-router.svg",
  },
  {
    name: "Postman",
    type: "Backend",
    imageUrl: "/icons/postman.svg",
  },
  {
    name: "Azure",
    type: "Otros",
    imageUrl: "/icons/azure.svg",
  },
  {
    name: "SonarQube",
    type: "Backend",
    imageUrl: "/icons/sonarqube.svg",
  },
  {
    name: "MaterialUi",
    type: "Frontend",
    imageUrl: "/icons/material.png",
  }
];

export const projects: IProject[] = [
  {
    title: "Plot",
    description: "Sitio web hecho para los clientes de Plot.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/Unofficial_JavaScript_logo_2.svg_m4ciar.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692722/CSS.3.svg_vtbc3f.png",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689707163/Captura_de_pantalla_2023-07-18_160548_ts0qil.png",
    githubUrl: "https://github.com/nicolasc1991/plot-production",
    websiteUrl: "https://plot.net.ar/",
    updatedAt: "1668977345721",
  },
  {
    title: "Task App",
    description:
      "Aplicación la cual permite añadir nuevas tareas, editar su estado y ver un listado.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/Typescript_logo_2020_cvmzbv.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/Tailwind_CSS_Logo.svg_jtoiis.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/material-ui-1_yyhsuk.svg",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689709246/Captura_de_pantalla_2023-07-18_164013_t7svyp.png",
    githubUrl: "https://github.com/YantornoJoel/tasks-frontend",
    websiteUrl: "https://tupaca.netlify.app/",
    updatedAt: "1668977345721",
  },
  {
    title: "Task Backend",
    description:
      "Contiene las funcionalidades, modelos, rutas y servicios de la aplicación de tareas.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692343/nodejs-logo-FBE122E377-seeklogo.com_twpkub.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/Typescript_logo_2020_cvmzbv.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689709743/express_q2anfz.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/mongodb_xdiytd_f3dyth.svg",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689709921/backend-task_ks4ksi.png",
    githubUrl: "https://github.com/YantornoJoel/tasks-be",
    websiteUrl: "https://github.com/YantornoJoel/tasks-be",
    updatedAt: "1668977345721",
  },
  {
    title: "Picsum Fotos",
    description:
      "Aplicación que consume la API de picsum.photos, se requiere iniciar sesión para ver y guardar favoritos.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/Typescript_logo_2020_cvmzbv.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/material-ui-1_yyhsuk.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692722/CSS.3.svg_vtbc3f.png",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689704980/Captura_de_pantalla_2023-07-18_152920_fsw4kc.png",
    githubUrl:
      "https://github.com/YantornoJoel/urbertrack-react-challenge/tree/master",
    websiteUrl: "https://urbetrack-react-challenge.netlify.app/",
    updatedAt: "1668977345721",
  },
  {
    title: "Calendar App",
    description:
      "Aplicación de calendario con autenticación con Google. Permite crear eventos, editarlos y eliminarlos.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/Unofficial_JavaScript_logo_2.svg_m4ciar.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692722/CSS.3.svg_vtbc3f.png",
    ],
    imageUrl:
      "https://res.cloudinary.com/dbvyaguam/image/upload/v1670880714/webp/calendarApp_j6ipci.webp",
    githubUrl: "https://github.com/YantornoJoel/calendar-bo",
    websiteUrl: "https://github.com/YantornoJoel/calendar-bo",
    updatedAt: "1670791745721",
  },
  {
    title: "Pokemon Api",
    description:
      "Aplicación que muestra información sobre el listado de Pokemons.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689706977/nextjs_pgufcg.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/Typescript_logo_2020_cvmzbv.svg",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1694538495/Captura_de_pantalla_2023-09-12_140736_gzudvm.png",
    githubUrl: "https://github.com/YantornoJoel/pokemon-next",
    websiteUrl: "https://pokemon-jy.vercel.app/",
    updatedAt: "1670791745721",
  },
  {
    title: "Presupuesto App",
    description: "Sitio web que permite gestionar tus gastos.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/Unofficial_JavaScript_logo_2.svg_m4ciar.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692722/CSS.3.svg_vtbc3f.png",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692673/presupuesto_bf88vj.png",
    githubUrl: "https://github.com/YantornoJoel/react-presupuesto",
    websiteUrl: "https://jy-presupuesto.netlify.app/",
    updatedAt: "1668977345721",
  },
  {
    title: "Storybook",
    description:
      "Aplicación para el desarrollo, permite visualizar componentes de interfaz de usuario de manera aislada.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/Typescript_logo_2020_cvmzbv.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689706100/storybook-icon_qtepp2.svg",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689706407/Captura_de_pantalla_2023-07-18_155310_tqa7qm.png",
    githubUrl:
      "https://storybook-jy.netlify.app/?path=/docs/example-introduction--docs",
    websiteUrl:
      "https://storybook-jy.netlify.app/?path=/docs/example-introduction--docs",
    updatedAt: "1668977345721",
  },
  {
    title: "Gif App",
    description: "Aplicación para buscar gifs que consume la API de Giphy.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/Unofficial_JavaScript_logo_2.svg_m4ciar.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692722/CSS.3.svg_vtbc3f.png",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689693651/gifs_qpuxok.png",
    githubUrl: "https://github.com/YantornoJoel/react-gif-app/tree/master",
    websiteUrl: "https://yantornojoel.github.io/react-gif-app/",
    updatedAt: "1668977345721",
  },
  {
    title: "Cotizador de criptomonedas",
    description:
      "Aplicación que permite calcular el valor de las criptomonedas con la moneda seleccionada.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/Unofficial_JavaScript_logo_2.svg_m4ciar.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692722/CSS.3.svg_vtbc3f.png",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689694069/Captura_de_pantalla_2023-07-18_122717_gq8fxk.png",
    githubUrl: "https://joel-criptomonedas.netlify.app/",
    websiteUrl: "https://joel-criptomonedas.netlify.app/",
    updatedAt: "1668977345721",
  },
  {
    title: "Heroes App",
    description:
      "Sitio web el cual muestra un listado de los heroes de Marvel y Dc.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/Unofficial_JavaScript_logo_2.svg_m4ciar.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692722/CSS.3.svg_vtbc3f.png",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689708527/Captura_de_pantalla_2023-07-18_162833_kfidqt.png",
    githubUrl: "https://github.com/YantornoJoel/heroes-app",
    websiteUrl: "https://jy-heroes-app.netlify.app/",
    updatedAt: "1668977345721",
  },
  {
    title: "NextApi",
    description:
      "Sitio web que permite buscar y explorar deportes, tambien permite registrarse mediante google.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689706977/nextjs_pgufcg.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/Typescript_logo_2020_cvmzbv.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689706730/firebase_ttec4t.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/Tailwind_CSS_Logo.svg_jtoiis.png",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689706878/Captura_de_pantalla_2023-07-18_160104_nsattg.png",
    githubUrl: "https://next13-firebase-typescript.vercel.app/",
    websiteUrl: "https://next13-firebase-typescript.vercel.app/",
    updatedAt: "1668977345721",
  },
  {
    title: "Banco App",
    description:
      "Sitio web el cual muestra un listado de cuentas del Banco. Challenge hecho para NCR.",
    technologies: [
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689688933/react_ikpzix_xbcgru.svg",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689691840/Unofficial_JavaScript_logo_2.svg_m4ciar.png",
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1689692722/CSS.3.svg_vtbc3f.png",
    ],
    imageUrl:
      "https://res.cloudinary.com/ddbujqxjh/image/upload/v1694538513/Captura_de_pantalla_2023-09-12_140821_h1a7fk.png",
    githubUrl: "https://challenge-ncr-react.netlify.app/",
    websiteUrl: "https://challenge-ncr-react.netlify.app/",
    updatedAt: "1668977345721",
  },
];

export const socials: SocialMedia[] = [
  {
    name: "Linkedin",
    Icon: BsLinkedin,
    url: "https://www.linkedin.com/in/joel-yantorno/",
  },
  {
    name: "Github",
    Icon: BsGithub,
    url: "https://github.com/YantornoJoel",
  },
];

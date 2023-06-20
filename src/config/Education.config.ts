import { StaticImageData } from "next/image";
import masterClass from "../../public/images/masterClass.png"
import semana_ciencia from "../../public/images/semanaCiencia.png"
import herramientasWeb from "../../public/images/herramientasWeb.png";
import aprendeJavaScript from "../../public/images/AprendeJavaScript.jpg";

export interface Education {
  img: StaticImageData;
  type: string;
  title: string;
  entity: string;
  date: string;
  uri: string
}

export const EDUCATION: Education[] = [
  {
    img: masterClass,
    type: "Programación Web",
    title: "Tecnologías de la Web Semántica",
    entity: "UTMACH",
    date: "Diciembre-2021",
    uri: "/documents/CertificadoMasterClass.pdf"
  },
  {
    img: semana_ciencia,
    type: "Programación Web",
    title: "Semana de la Ciencia UTMACH periodo 2021",
    entity: "UTMACH",
    date: "Noviembre-2021",
    uri: "/documents/CertificadoSemanaCiencia.pdf"
  }, {
    img: herramientasWeb,
    type: "Programación Web",
    title: "Conocimiento en Herramientas Web y TI",
    entity: "UTMACH",
    date: "Enero-2019",
    uri: "/documents/CertificadoHerramientasWeb.pdf"
  },
  {
    img: aprendeJavaScript,
    type: "Programación Web",
    title: "Aprende JavaScript ES9, HTML, CSS3 y NodeJS ",
    entity: "UDEMY",
    date: "Abril-2022",
    uri: '/documents/CertificadoAprendeJavaScript.pdf'
  }
]

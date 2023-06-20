import { Education } from "@/config/Education.config";
import Image from "next/image";


export default function CardEducation({
  img,
  type,
  title,
  entity,
  date,
  uri
}: Education) {
  return (

    <div className="md:w-5/12">
      <div className="p-4 m-4 bg-white shadow-lg rounded-xl border-b-2 border-violet-500">
        <div className="flex-none xl:flex">
          <Image
            className="object-contain w-full lg:h-48 rounded-2xl"
            src={img}
            alt="certificados"
          />
          <div className="flex-auto py-2 ml-3">
            <div className="flex flex-wrap">
              <div className="flex-none w-full text-xs font-medium text-honey">
                {type}
              </div>
              <h2 className="flex-auto text-lg font-medium">{title}</h2>
            </div>
            <p className="mt-3"></p>
            <div className="flex py-4 text-sm text-gray-600">
              <div className="flex items-center flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p>{entity}</p>
              </div>
              <div className="flex items-center flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>{date}</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-200"></div>
            <div className="flex  text-sm font-medium">
              <a
                href={uri}
                download
                className="px-5 py-2 mb-2  text-white bg-gray-900 rounded-full shadow-sm cursor-pointer md:mb-0 hover:bg-gray-800"
                type="button"
                aria-label="like"
              >
                Descargar Certificado
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

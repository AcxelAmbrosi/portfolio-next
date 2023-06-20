import Link from "next/link";
import { MouseEventHandler } from "react";
interface Props {
  modal: boolean,
  handleModal: MouseEventHandler<HTMLButtonElement>;
}
export default function Modal({ modal, handleModal }: Props) {
  if (!modal) {
    return null;
  }
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50">
      <div className="bg-gray-800 bg-opacity-50 absolute inset-0"></div>
      <div className="bg-white rounded-lg p-8 z-50">
        <div className="w-80">
          <ul className="flex flex-col gap-4">
            <button className="top-4 right-4 text-gray-500 flex items-end justify-end" onClick={handleModal}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex items-center flex-col space-y-4">
              <li>
                <Link href="#home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#education">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#experience">
                  Experiencie
                </Link>
              </li>
              <li>
                <Link href="#portfolio">
                  Portfolio
                </Link>
              </li>
            </nav>
          </ul>
        </div>
      </div>
    </div>
  )
}

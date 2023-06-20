'use client'
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

export default function NavBar() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <nav className="w-full flex fixed top-0 left-0 z-50 backdrop-blur-sm p-5 items-center justify-between  font-bold text-gray-500">
      <div>
        <p className="text-4xl ">Acxel</p>
      </div>
      <div className="space-y-2 lg:hidden cursor-pointer" onClick={handleModal}>
        <div className="w-10 h-1 bg-gray-500"></div>
        <div className="w-10 h-1 bg-gray-500"></div>
        <div className="w-10 h-1 bg-gray-500"></div>
      </div>
      <ul className="hidden lg:flex justify-between ">
        <li className="mr-14 hover:text-violet-500">
          <Link href="#home">
            Home
          </Link>
        </li>
        <li className="mr-14 hover:text-violet-500">
          <Link href="#about">
            About </Link>
        </li>
        <li className="mr-14 hover:text-violet-500">
          <Link href="#skills">
            Skills </Link>
        </li>
        <li className="mr-14 hover:text-violet-500">
          <Link href="#education">
            Education</Link>
        </li>
        <li className="mr-14 hover:text-violet-500">
          <Link href="#experience">
            Experience</Link>
        </li>
        <li className="mr-32 hover:text-violet-500">
          <Link href="#portfolio">
            Portfolio</Link>
        </li>
      </ul>
      <Modal modal={modal} handleModal={handleModal} />
    </nav >
  );
}

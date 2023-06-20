import Link from "next/link";
export const Foot = () => {
  return (
    <section className="w-full flex flex-wrap items-center justify-around bg-violet-500 text-white">
      <div className="flex flex-col justify-center items-center">
        <p className="text-white font-bold text-3xl">Acxel</p>
        <p>Software Developer</p>
        <p className="mt-6">About Me</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="mt-6">More</p>
        <ul className="flex justify-center items-center flex-wrap">
          <li className="m-6">
            <Link href='#skills' >Skills</Link>
          </li>
          <li className="m-6">
            <Link href="#education">Education</Link>
          </li>
          <li className="m-6">
            <Link href='#experience' >Experience</Link>
          </li>
          <li className="m-6">
            <Link href='#portfolio' >portfolio</Link>
          </li>
        </ul>
        <p className="m-8">&copy; 2023 by Acxel Ambrosi. All rights reserved.</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="mt-6">Follow</p>
        <ul className="flex">
          <li className="m-6">
            <Link href='https://twitter.com/Acxel_Ambrosi' target="_blank">Twitter</Link>
          </li>
          <li className="m-6">
            <Link href='https://www.linkedin.com/in/acxelambrosi/' target="_blank">LinkedIn</Link>
          </li>
          <li className="m-6">
            <Link href='https://github.com/AcxelAmbrosi' target="_blank">Github</Link>
          </li>
        </ul>
        <div className="m-8">-------</div>
      </div>
    </section >
  );
};

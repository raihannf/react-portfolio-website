import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed z-50 w-fit h-fit max-w-screen-xl -translate-x-1/2 bg-glass bg-opacity-20 shadow-xl backdrop-blur-md bg-blend-multiply border-l-1 border-t-2 border-gray-200/50 rounded-full bottom-8 left-1/2 dark:bg-gray-700 dark:border-gray-600 opacity-0 lg:opacity-100">
      <div className="text-sm grid grid-flow-col auto-cols-min gap-3 h-11 max-w-screen-xl mx-3 my-[10px]">
        <Link
          to="#home"
          className="text-white font-clashDisplay font-medium tracking-wider antialiased inline-flex flex-col items-center justify-center px-5 rounded-full bg-glassdark bg-opacity-20 hover:bg-opacity-40 border-2 border-gray-200/50 w-28"
        >
          Home
        </Link>

        <Link
          to="#about"
          className="text-white font-clashDisplay font-medium tracking-wider antialiased inline-flex flex-col items-center justify-center px-5 rounded-full bg-glassdark bg-opacity-20 hover:bg-opacity-40 border-2 border-gray-200/50 w-28"
        >
          About
        </Link>

        <Link
          to="#gallery"
          className="text-white font-clashDisplay font-medium tracking-wider antialiased inline-flex flex-col items-center justify-center px-5 rounded-full bg-glassdark bg-opacity-20 hover:bg-opacity-40 border-2 border-gray-200/50 w-28"
        >
          Works
        </Link>

        <Link
          to="#contact"
          className="text-white font-clashDisplay font-medium tracking-wider antialiased inline-flex flex-col items-center justify-center px-5 rounded-full bg-glassdark bg-opacity-20 hover:bg-opacity-40 border-2 border-gray-200/50 w-28"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

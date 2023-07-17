import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[1rem] text-left text-[3.5rem] text-white font-inter md:flex-col md:items-center md:justify-start">
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1rem] md:flex-[unset] md:self-stretch">
        <div className="self-stretch relative font-extrabold md:text-[2rem] md:text-center">
          To Do
        </div>
        <div className="self-stretch relative text-[1rem] font-bold text-lightslategray md:text-center">
          User feedback tomorrow!
        </div>
      </div>
      <div className="rounded-md bg-gray-200 overflow-hidden flex flex-col p-[1rem] items-start justify-start text-center text-[1.5rem] text-black border-[1px] border-solid border-gray-100">
        <div className="relative font-extrabold">🌤️</div>
      </div>
    </div>
  );
};

export default Header;

import type { NextPage } from "next";
import Header from "./header";
import ToDoComplete from "./to-do-complete";

const ToDoListContainer: NextPage = () => {
  return (
    <div className="flex-1 bg-gray-300 flex flex-col py-[4rem] px-[3.56rem] items-start justify-start gap-[1.63rem] text-left text-[3.5rem] text-white font-inter sm:pl-[2rem] sm:pr-[2rem] sm:box-border">
      <Header />
      <div className="self-stretch relative bg-darkslategray h-[0.06rem]" />
      <ToDoComplete toDoImagine="/image-1@2x.png" />
      <ToDoComplete toDoImagine="/image-2@2x.png" />
      <div className="self-stretch relative bg-darkslategray h-[0.06rem]" />
      <input
        className="[border:none] font-medium font-inter text-[1.13rem] bg-[transparent] self-stretch relative leading-[1.5rem] text-slategray text-left"
        type="text"
        placeholder="Add to do..."
        maxLength
        minLength
      />
    </div>
  );
};

export default ToDoListContainer;

import type { NextPage } from "next";
import ToDoListContainer from "../components/to-do-list-container";

const ToDoListDesign: NextPage = () => {
  return (
    <div className="relative bg-gray-300 w-full flex flex-row items-start justify-start min-h-[false]">
      <ToDoListContainer />
    </div>
  );
};

export default ToDoListDesign;

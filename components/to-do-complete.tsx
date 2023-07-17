// ToDoComplete.tsx
import React from "react";

type ToDoCompleteProps = {
  toDoImagine: string;
  task: string;
  isDone: boolean;
  onClick: () => void;
  onDelete: () => void;
};

const ToDoComplete: React.FC<ToDoCompleteProps> = ({
  toDoImagine,
  task,
  isDone,
  onClick,
  onDelete,
}) => {
  return (
    <div className="flex flex-row items-start justify-between gap-[0.63rem] text-left text-[1.13rem] text-slategray font-inter relative">
      <div
        className={`self-stretch flex flex-row items-center justify-start gap-[0.63rem] cursor-pointer ${
          isDone ? "line-through text-gray-400" : ""
        }`}
        onClick={onClick}
      >
        <img
          className="w-[1.5rem] h-[1.5rem] object-cover"
          alt=""
          src={isDone ? "/image-1@2x.png" : toDoImagine}
        />
        <div className="relative leading-[1.5rem] font-medium">{task}</div>
      </div>
      <button
        onClick={onDelete}
        className="p-0 m-0 bg-transparent border-none text-blue-500 text-sm cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoComplete;

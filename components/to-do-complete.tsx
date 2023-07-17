// ToDoComplete.tsx
import React from "react";

type ToDoCompleteProps = {
  toDoImagine: string;
  task: string;
  isDone: boolean;
  onClick: () => void;
};

const ToDoComplete: React.FC<ToDoCompleteProps> = ({
  toDoImagine,
  task,
  isDone,
  onClick,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[0.63rem] text-left text-[1.13rem] text-slategray font-inter ${
        isDone ? "line-through text-gray-400" : ""
      }`}
      onClick={onClick}
    >
      <img
        className="relative w-[1.5rem] h-[1.5rem] object-cover cursor-pointer"
        alt=""
        src={isDone ? "/image-1@2x.png" : toDoImagine}
      />
      <div className="flex-1 relative leading-[1.5rem] font-medium">{task}</div>
    </div>
  );
};

export default ToDoComplete;

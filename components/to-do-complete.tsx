import type { NextPage } from "next";
import { memo } from "react";

type ToDoCompleteType = {
  toDoImagine?: string;
};

const ToDoComplete: NextPage<ToDoCompleteType> = memo(({ toDoImagine }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[0.63rem] text-left text-[1.13rem] text-slategray font-inter">
      <img
        className="relative w-[1.5rem] h-[1.5rem] object-cover"
        alt=""
        src={toDoImagine}
      />
      <div className="flex-1 relative leading-[1.5rem] font-medium">
        Finish designs
      </div>
    </div>
  );
});

export default ToDoComplete;

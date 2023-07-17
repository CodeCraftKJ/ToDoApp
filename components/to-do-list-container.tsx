// ToDoListContainer.tsx
import { NextPage } from "next";
import { useState } from "react";
import Header from "./header";
import ToDoComplete from "./to-do-complete";

type ToDoItem = {
  id: number;
  task: string;
  isDone: boolean;
};

const ToDoListContainer: NextPage = () => {
  const [toDoList, setToDoList] = useState<ToDoItem[]>([
    { id: 1, task: "Create To Do List", isDone: false },
    { id: 2, task: "Finish Your Job", isDone: false },
  ]);

  const addNewToDo = (task: string) => {
    setToDoList([...toDoList, { id: Date.now(), task, isDone: false }]);
  };

  const toggleToDoStatus = (id: number) => {
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const deleteToDo = (id: number) => {
    setToDoList((prevList) => prevList.filter((item) => item.id !== id));
  };

  // Split the list into completed and to be done items
  const completedItems = toDoList.filter((item) => item.isDone);
  const todoItems = toDoList.filter((item) => !item.isDone);

  // Ensure "Finish Your Job" is at the bottom of the not-made-yet list
  const sortedToDoList = [
    ...todoItems.filter((item) => item.task !== "Finish Your Job"),
    ...todoItems.filter((item) => item.task === "Finish Your Job"),
    ...completedItems,
  ];

  return (
    <div className="flex-1 bg-gray-300 flex flex-col py-[4rem] px-[3.56rem] items-start justify-start gap-[1.63rem] text-left text-[3.5rem] text-white font-inter sm:pl-[2rem] sm:pr-[2rem] sm:box-border">
      <Header />
      <div className="self-stretch relative bg-darkslategray h-[0.06rem]" />
      {sortedToDoList.map((item) => (
        <ToDoComplete
          key={item.id}
          toDoImagine={item.isDone ? "/image-1@2x.png" : "/image-2@2x.png"}
          task={item.task}
          isDone={item.isDone}
          onClick={() => toggleToDoStatus(item.id)}
          onDelete={() => deleteToDo(item.id)}
        />
      ))}
      <div className="self-stretch relative bg-darkslategray h-[0.06rem]" />
      <input
        className="[border:none] font-medium font-inter text-[1.13rem] bg-[transparent] self-stretch relative leading-[1.5rem] text-slategray text-left"
        type="text"
        placeholder="Add to do..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.currentTarget.value) {
            addNewToDo(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};

export default ToDoListContainer;

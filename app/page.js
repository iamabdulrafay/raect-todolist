"use client";
import React, { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Main, setMain] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMain([...Main, { Title, Desc }]);
    setTitle("");
    setDesc("");
    console.log(Main);
    // console.log("hello");
  };

  let randerTask = (
    <h1 className="text-2xl font-extrabold ">No Task Availabe</h1>
  );

  const deleteHandler = (i) => {
    let copyTask = [...Main];
    copyTask.splice(i, 1);
    setMain(copyTask);
  };
  if (Main.length > 0) {
    randerTask = Main.map((t, i) => {
      return (
        <div key={i} className="flex justify-between px-6 mb-3">
          <h5 className="text-4xl font-semibold ">{t.Title}</h5>
          <h6 className="text-xl text-center my-2 font-medium ">{t.Desc}</h6>
          <button
            className=" bg-red-600 text-white  border-spacing-3 py-2 px-2 "
            onClick={() => {
              deleteHandler(i);
            }}
          >
            Delete Task
          </button>
        </div>
      );
    });
  }
  return (
    <>
      <div className="heading">
        <h1>TO DO LIST</h1>
      </div>
      <div className="form">
        <form onSubmit={submitHandler}>
          <input
            value={Title}
            type="text"
            placeholder="Add Title Here"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            value={Desc}
            type="text"
            placeholder="Add Task  Here"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button>Add Task</button>
        </form>
      </div>
      <hr />
      <div className="tasks bg-slate-300 my-10 ">
        <ul>{randerTask}</ul>
      </div>
    </>
  );
};

export default page;

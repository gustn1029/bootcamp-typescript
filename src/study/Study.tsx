import React from "react";

const Study = () => {
  document.querySelector("input")!.addEventListener("onChange", (e:Event) => {
    const target = e.target;
    if(target && target instanceof HTMLInputElement) {
      console.log(target.value);
    }
  });

  return (
    <>
      <h1>20240909 강의</h1>
    </>
  );
};

export default Study;

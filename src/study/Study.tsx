import React from "react";

const Study = () => {
  function add<T>(a: T, b: T): T {
    if (typeof a === "number" && typeof b === "number") {
      return (a + b) as T;
    } else {
      return (a as string + b) as T;
    }
  }

  const addedString = add("hello ", "world"); //문자열로 타입추론되도록.
  const addedNum = add(3, 5);
  // 여기서는 숫자로

  console.log(addedString);
  console.log(addedNum);

  return (
    <>
      <h1>20240906 강의</h1>
    </>
  );
};

export default Study;

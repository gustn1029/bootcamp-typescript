import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import TodoView from "./TodoView";
import useTodoData from "../hooks/useTodoData";

const Todo = () => {
  const { todoList, postTodo, isLoading, removeTodo } = useTodoData();
  const [todoText, setTodoText] = useState<string>("");

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
  };

  const addTodoHandler: MouseEventHandler<HTMLButtonElement> = async () => {
    if (todoText.trim() === "") {
      alert("할 일을 입력해 주세요.");
      return;
    }
    await postTodo(todoText);
    setTodoText("");
  };

  const props = {
    todoList,
    handleInput,
    todoText,
    addTodoHandler,
    removeTodo,
  };
  return isLoading ? <div>Loading...</div> : <TodoView {...props} />;
};

export default Todo;

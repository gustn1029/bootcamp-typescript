import { ChangeEventHandler, MouseEventHandler } from "react";
import { TodoData } from "../hooks/useTodoData";

interface TodoProps {
  todoList: TodoData[];
  handleInput: ChangeEventHandler<HTMLInputElement>;
  todoText: string;
  addTodoHandler: MouseEventHandler<HTMLButtonElement>;
  removeTodo: (id: string) => Promise<void>;
}

const TodoView = ({
  todoList,
  handleInput,
  todoText,
  addTodoHandler,
  removeTodo,
}: TodoProps) => {
  return (
    <div>
      <h1>멋진 투두</h1>
      <ul>
        {todoList.map((todoItem) => (
          <li key={todoItem.id} id={`${todoItem.id}`}>
            <p>{todoItem.todo}</p>
            <button
              type="button"
              onClick={async () => await removeTodo(todoItem.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <input type="text" value={todoText} onChange={handleInput} />
      <button type="button" onClick={addTodoHandler}>
        투두추가
      </button>
    </div>
  );
};

export default TodoView;

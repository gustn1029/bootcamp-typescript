import { useEffect, useState } from "react";


export interface TodoData {
  id: string;
  todo: string;
}

const useTodoData = () => {
  const [todoList, setTodoList] = useState<TodoData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const url = "http://localhost:3000/todos";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);

        if (res.ok) {
          const todo = await res.json();
          setTodoList(todo);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const postTodo = async (todoText: string) => {
    setIsLoading(true);
    const newTodo = {
      todo: todoText,
    };

    try {
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (res.ok) {
        const todo = await res.json();
        setTodoList((prevTodo) => [...prevTodo, todo]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeTodo = async (id: string) => {
    setIsLoading(true);

    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const todo = await res.json();
        setTodoList((prevTodo) => {
          const updateTodoList = prevTodo.filter((el) => el.id !== todo.id);
          return [...updateTodoList];
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { todoList, postTodo, isLoading, removeTodo };
};

export default useTodoData;

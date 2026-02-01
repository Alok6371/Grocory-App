import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [editTodo, setEditTodo] = useState(null); 

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map(todo =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        search,
        setSearch,
        editTodo,       
        setEditTodo    
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
export const useTodo = () => useContext(TodoContext);

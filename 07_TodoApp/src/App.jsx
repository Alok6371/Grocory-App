import { useState } from "react";
import { TodoProvider } from "./context/Todocontext";
import TodoForm from "./componets/TodoFrom";
import TodoList from "./componets/TodoList";

const App = () => {
  const [editTodo, setEditTodo] = useState(null);

  
  return (
    <TodoProvider>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Todo App with Image</h1>

        <TodoForm editTodo={editTodo} setEditTodo={setEditTodo} />
        <TodoList setEditTodo={setEditTodo} />
      </div>
    </TodoProvider>
  );
};

export default App;

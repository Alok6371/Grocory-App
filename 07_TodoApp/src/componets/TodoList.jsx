import { useTodo } from "../context/Todocontext";
import TodoItem from "./TodoItem";

const TodoList = ({ setEditTodo }) => {
    const { todos, search, setSearch } = useTodo();

    const filteredTodos = todos.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <input
                type="text"
                placeholder="Search todo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 w-full mb-4"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        setEditTodo={setEditTodo}
                    />
                ))}
            </div>
        </>
    );
};

export default TodoList;

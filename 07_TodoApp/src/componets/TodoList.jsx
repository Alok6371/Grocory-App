import { useTodo } from "../context/Todocontext";
import TodoItem from "./TodoItem";

const TodoList = ({ setEditTodo }) => {
    const { todos, search, setSearch } = useTodo();

    const filteredTodos = todos.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div  className="bg-gray-500">

                <input
                    type="text"
                    placeholder="Search todo..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-2 border-black mt-5 p-2 w-full "
                />

                <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-4 ">
                    {filteredTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            setEditTodo={setEditTodo}
                        />
                    ))}
                </div>
            </div>

        </>
    );
};

export default TodoList;

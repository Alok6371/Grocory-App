import { useTodo } from "../context/Todocontext";

const Todoitem = ({ todo, setEditTodo }) => {
    const { deleteTodo } = useTodo();

    return (
        <div className="border p-3 rounded">
            <h3 className="font-bold">{todo.title}</h3>

            {todo.image && (
                <img
                    src={todo.image}
                    alt=""
                    className="w-full h-40 object-cover my-2"
                />
            )}

            <div className="flex gap-2">
                <button
                    onClick={() => setEditTodo(todo)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                    Edit
                </button>

                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todoitem;

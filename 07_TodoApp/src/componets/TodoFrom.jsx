import { useState } from "react";
import { useTodo } from "../context/Todocontext";

const TodoForm = ({ editTodo, setEditTodo }) => {
    const { addTodo, updateTodo } = useTodo();
    const [title, setTitle] = useState(editTodo?.title || "");
    const [image, setImage] = useState(editTodo?.image || "");

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editTodo) {
            updateTodo({ ...editTodo, title, image });
            setEditTodo(null);
        } else {
            addTodo({
                id: Date.now(),
                title,
                image,
            });
        }

        setTitle("");
        setImage("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
            <input
                type="text"
                placeholder="Todo title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full mb-2"
                required
            />

            <input type="file" accept="image/*" onChange={handleImage} />

            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
                {editTodo ? "Update" : "Add"} Todo
            </button>
        </form>
    );
};

export default TodoForm;

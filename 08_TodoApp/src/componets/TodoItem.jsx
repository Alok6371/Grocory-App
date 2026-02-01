import React from 'react'
import { useTodo } from '../context/TodoContext'

const TodoItem = ({ todo, setEditTodo }) => {
    const { deleteTodo = () => {} } = useTodo()

    return (
        <div className='border-4 items-center m-10'>
            <h3 className='text-2xl font-semibold text-center rounded-lg'>
                {todo.title}
            </h3>

            {todo.image && (
                <img
                    src={todo.image}
                    alt=""
                    className='w-[10vw] m-2'
                />
            )}

            <div className='text-center flex flex-col'>
                <button
                    onClick={() => setEditTodo(todo)}
                    className='bg-gray-300 px-3 py-2 m-4 rounded-lg hover:bg-blue-400'
                >
                    Edit
                </button>

                <button
                    onClick={() => deleteTodo(todo.id)}
                    className='bg-gray-300 px-3 py-2 rounded-lg hover:bg-blue-400'
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoItem

import React from 'react'
import { useTodo } from '../context/TodoContext'
import TodoItem from './TodoItem'

const TodoList = () => {
    const { todos = [], search, setSearch, setEditTodo } = useTodo()

    const filteredTodo = todos.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <input
                type="text"
                placeholder='Search Todo'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='border-2 m-6 p-2 rounded-lg border-black w-[60vw]'
            />
            <div className='flex flex-wrap'>
                {filteredTodo.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        setEditTodo={setEditTodo}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList

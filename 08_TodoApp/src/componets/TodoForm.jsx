import React, { useEffect, useState } from 'react'
import { useTodo } from '../context/TodoContext'

const TodoForm = () => {
    const { addTodo, updateTodo, editTodo, setEditTodo } = useTodo()

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        if (editTodo) {
            setTitle(editTodo.title)
            setImage(editTodo.image)
        }
    }, [editTodo])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title) return

        if (editTodo) {
            updateTodo({ ...editTodo, title, image })
            setEditTodo(null)
        } else {
            addTodo({ id: Date.now(), title, image })
        }

        setTitle('')
        setImage('')
    }

    const handleImage = (e) => {
        const file = e.target.files[0]
        if (!file) return
        
        const reader = new FileReader()
        reader.onloadend = () => setImage(reader.result)
        reader.readAsDataURL(file)
    }

    return (
        <div className='bg-gray-400'>
            <form onSubmit={handleSubmit} className='flex gap-3 p-10'>
                <input
                    type="text"
                    placeholder='Enter Title'
                    className='p-5 h-[6vh] rounded-lg w-[50vw] text-xl'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input type="file" accept='image/*' onChange={handleImage}
                    className='bg-green-200 p-3 rounded-lg'
                />
                <button className='bg-green-200 p-2 text-xl rounded-lg'>
                    {"Add"}
                </button>
                {
                    (!editTodo ? <button>

                    </button> :
                        <button className='bg-green-200 py-2 px-1 rounded-lg'>
                            Update
                        </button>)
                }
            </form >
        </div >
    )
}

export default TodoForm

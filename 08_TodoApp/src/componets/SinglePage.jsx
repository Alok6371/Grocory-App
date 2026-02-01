import React, { useState, useEffect } from 'react'

const SinglePage = () => {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')
  const [editTodo, setEditTodo] = useState(null)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  // sync form while editing
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
      setTodos(
        todos.map(t =>
          t.id === editTodo.id ? { ...editTodo, title, image } : t
        )
      )
      setEditTodo(null)
    } else {
      setTodos([...todos, { id: Date.now(), title, image }])
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

  const filteredTodos = todos.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-10">

      {/* Search */}
      <input
        type="text"
        placeholder="Search Todo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-[60vw] mb-6"
      />

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-10">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-[40vw]"
        />

        <input type="file" accept="image/*" onChange={handleImage} />

        <button className="bg-green-300 px-4 rounded">
          {editTodo ? 'Update' : 'Add'}
        </button>
      </form>

      {/* List */}
      <div className="flex flex-wrap gap-6">
        {filteredTodos.map(todo => (
          <div key={todo.id} className="border p-4 w-[15vw]">

            <h3 className="text-xl text-center">{todo.title}</h3>

            {todo.image && (
              <img src={todo.image} alt="" className="w-full mt-2" />
            )}

            <div className="flex flex-col gap-2 mt-3">
              <button
                onClick={() => setEditTodo(todo)}
                className="bg-blue-300 rounded p-1"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  setTodos(todos.filter(t => t.id !== todo.id))
                }
                className="bg-red-300 rounded p-1"
              >
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default SinglePage

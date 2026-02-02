import React from 'react'
// import Header from './componets/Header'
// import TodoForm from './componets/TodoForm'
// import TodoList from './componets/TodoList'
// import TodoProvider from './context/TodoContext'
import SinglePage from './componets/SinglePage'

const App = () => {
  return (
    // <TodoProvider>
    //   <div>
    //     <Header />
    //     <TodoForm />
    //     <TodoList />
    //   </div>
    // </TodoProvider>

    <div className='bg-blue-400 min-h-[100vh]'>
      <SinglePage />

    </div>

  )
}

export default App

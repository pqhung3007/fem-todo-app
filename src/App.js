import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <ToastContainer autoClose={2000} theme='light' />
      <div className="bg-desktop-light bg-cover bg-no-repeat  h-48 md:h-60">
        <div className="max-w-2xl mx-auto pt-12 md:pt-16 px-6">
          <Header />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;

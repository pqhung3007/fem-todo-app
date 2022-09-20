import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


function App() {
  const { lightMode } = useSelector((state) => state.theme);

  return (
    <div className="bg-slate-50 dark:bg-darkBlue min-h-screen">
      <ToastContainer autoClose={1500} theme={`${lightMode ? 'light' : 'dark'}`} />
      <div className={`${lightMode ? "bg-desktop-light" : "bg-desktop-dark"} bg-cover bg-no-repeat h-48 md:h-60`}>
      </div>
      <div className="max-w-2xl mx-auto -mt-48 md:-mt-64 pt-12 md:pt-16 px-6">
        <Header />
        <main>
          <TodoForm />
          <TodoList />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

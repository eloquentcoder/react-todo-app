import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/todo-store';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500bg-gradient-to-r from-purple-100 via-pink-500 to-red-500 grid place-items-center max-w-full h-screen">
        <Provider store={store}>
          <TodoList /> 
          <TodoInput /> 
        </Provider>   
    </div>
  );
}

export default App;

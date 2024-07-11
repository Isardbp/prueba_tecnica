"use client";
import { Task } from '@/utils/types';
import React, { useState, ChangeEvent } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center m-5 font-sans text-center">
      <h1 className="text-2xl text-gray-800">Lista de Tareas</h1>
      <div className="my-2">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Añadir tarea"
          className="p-2 mb-2 border border-gray-300 rounded w-52"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 ml-2 text-white bg-green-600 rounded hover:bg-green-500"
        >
          Añadir
        </button>
      </div>
      <ul className="list-none p-0 w-1/2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 my-2 bg-gray-100 border border-gray-300 rounded"
          >
            <span className="flex-1">{task.text}</span>
            <div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-500 ml-2"
              >
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
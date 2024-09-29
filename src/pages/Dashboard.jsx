import React, { useState } from 'react';

const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Manage new student intake' },
      'task-2': { id: 'task-2', content: 'Assign faculty to new courses' },
      'task-3': { id: 'task-3', content: 'Handle grant requirements' },
      'task-4': { id: 'task-4', content: 'Manage payrole' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To Do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: 'In Progress',
        taskIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'Done',
        taskIds: [],
      },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
  };

function Dashboard() {
    const [data, setData] = useState(initialData);

  return (
        <>
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="flex flex-row">
                    <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                        <div class="px-6 py-4 max-w-[80rem] w-screen grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                            <div>
                                <h2 class="text-xl font-semibold text-gray-800">
                                    Job Board
                                </h2>
                                <p class="text-sm text-gray-600">
                                    Manage current jobs, edit, download and more.
                                </p>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
        <div className="flex justify-center items-start h-screen bg-white border-gray-200 border-r border-b border-l rounded-xl p-4">
        {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
                <div key={column.id} className="w-1/3 p-2">
                    <h2 className="text-xl font-bold mb-2">{column.title}</h2>
                    <div className="bg-white rounded shadow p-2">
                    {tasks.map((task) => (
                        <div key={task.id} className="bg-blue-100 p-2 rounded mb-2">
                        {task.content}
                        </div>
                    ))}
                    </div>
                </div>
            );
        })}
        </div>
        </div>
        </>
  );
}

export default Dashboard;
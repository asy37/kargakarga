"use client"
import React, { useEffect, useState } from 'react';
import taskData from '@/pages/api/task/taskData';
import flagData from '@/pages/api/flag/flag';
import NewTab from '../components/tabs/tab';
import Dnd from '../components/dnd/dnd';

interface Task {
  id: number;
  name: string;
}

interface Column {
  id: number;
  name: string;
  tasks: Task[];
}

const DashboardPage: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [loading, setLoading] = useState(false)


  const getBoard = async () => {
    setLoading(true)
    const result = await taskData();
    if (result) {
      setColumns(result);
      setLoading(false)
    }
  };

  useEffect(() => {
    getBoard();
  }, []);

  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumnIndex = parseInt(source.droppableId);
    const destinationColumnIndex = parseInt(destination.droppableId);

    const newColumns = [...columns];

    const draggedTask = newColumns[sourceColumnIndex].tasks[source.index];
    newColumns[sourceColumnIndex].tasks.splice(source.index, 1);
    newColumns[destinationColumnIndex].tasks.splice(destination.index, 0, draggedTask);
    setColumns(newColumns);
  };

  return (
    <div className='flex flex-col w-full'>
      {
        loading ? (<div className='flex h-screen justify-center items-center'>Loading...</div>) : (
          <>
            <div className="h-8 font-semibold text-2xl text-blue-999">Frontend Case</div>
            <NewTab />
            <Dnd columns={columns} onDragEnd={onDragEnd} getBoard={getBoard} />
          </>)}
    </div>
  );
};

export default DashboardPage;

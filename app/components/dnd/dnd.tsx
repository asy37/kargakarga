    "use client"
    import { useState } from 'react';
    import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
    import Image from 'next/image';
    import { PlusIcon,ChevronUpIcon,ChevronDownIcon, HomeIcon, ChevronRightIcon, StarIcon, XMarkIcon } from '@heroicons/react/24/outline';
    import {Modal} from '../modal/modal';
    import Dropdown from '../dropdown/dropdown';
    import taskAdd from '@/pages/api/taskAction/taskAdd';


    interface Task {
        id: number;
        name: string;
    }
    
    interface Column {
        id: number;
        name: string;
        tasks: Task[];
    }
    
    interface DndProps {
        onDragEnd: (result: DropResult) => void;
        columns: Column[];
        getBoard:() => void
}
    
    const Dnd: React.FC<DndProps> = ({ onDragEnd, columns, getBoard }) => {
        const [open, setOpen] = useState<boolean>(false);
        const [openTask, setOpenTask] = useState<boolean>(false);
        const [name, setName] = useState<string>('');
        const [description, setDescription] = useState<string>('');
        const [boardId, setBoardId] = useState<number>(0);
    
    
        const handleSubmit = (e: any) => {
            e.preventDefault();
            const params = {
                name: name,
                description: description,
                flagId: 1,
                boardId: boardId
            }
            taskAdd(params).then(() => {
                setName('');
                setDescription('');
                setBoardId(0)
                setOpen(false)
                getBoard()
            
            })
          
        };
        
        return (
            <div className="flex gap-4 items-center justify-center">
            <DragDropContext onDragEnd={onDragEnd}>
                {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col w-[320px] h-[720px] bg-white border rounded-lg group p-1">
                    <div className="flex justify-between items-center p-4 rounded-t-lg border-b">
                    <h2 className="">{column.name}</h2>
                            <PlusIcon onClick={() => {
                                setOpen(true);
                                setBoardId(column.id);
                            }} className='w-6 h-6 text-gray-300 cursor-pointer' />
                            
                    </div>
    
                    <Droppable key={column.id} droppableId={columnIndex.toString()}>
                    {(provided) => (
                                <div
                                key={columnIndex}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex flex-col w-full h-full bg-white  p-1 gap-2"
                        >
                        {column.tasks.length === 0 ? (
                            <div onClick={() => {
                                setOpen(true);
                                setBoardId(column.id);
                            }} className="flex flex-col justify-center items-center text-gray-400 h-full cursor-pointer">
                            <Image src="/kargakarga.png" alt="kargakarga" width={185} height={185} />
                            <span className="hidden group-hover:block font-semibold text-gray-400 text-2xl">+ New Task</span>
                            </div>
                        ) : (
                            column.tasks.map((task, taskIndex) => (
                                <>
                                    <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={taskIndex} >
                                        {(provided) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            onClick={()=>setOpenTask(true)}
                                            className="bg-white border rounded-lg shadow-sm p-4"
                                        >
                                            {task.name}
                                    
                                        </div>
                                        )}
                                        </Draggable>
                                     
                                </>
                            ))
                        )}
    
                        {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                </div>
                ))}
                </DragDropContext>
                <Modal open={openTask}>
                                            <div className="h-[720px] w-[1080px] bg-white rounded-lg">
                                                <div className="h-16 w-full flex items-center justify-between border-b p-4">
                                                    <div className="flex items-center gap-4">
                                                        <ChevronUpIcon className="h-4 w-4"/>
                                                        <ChevronDownIcon className="h-4 w-4" />
                                                        <HomeIcon className="h-6 w-6"/>
                                                        <span>25 Proje</span>
                                                        <ChevronRightIcon className="h-4 w-4 text-gray-300" />
                                                        <span>Projects</span>
                                                        <ChevronRightIcon className="h-4 w-4 text-gray-300" />
                                                        <span className="font-semibold text-base text-blue-999">Frontend Case</span>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <Dropdown/>
                                                        <StarIcon className="w-6 h-6 text-gray-300"/>
                                                        <XMarkIcon className="w-6 h-6 text-gray-300 cursor-pointer" onClick={()=>setOpenTask(false)}/>
                                                        
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </Modal>
                            <Modal open={open}>
                                <div className="h-fit p-4 w-[1080px] bg-white rounded-lg">
                                    <div className="h-16 w-full flex items-center justify-between border-b p-4">
                                        <div className="flex items-center gap-4">
                                            <ChevronUpIcon className="h-4 w-4"/>
                                            <ChevronDownIcon className="h-4 w-4" />
                                            <HomeIcon className="h-6 w-6"/>
                                            <span>25 Proje</span>
                                            <ChevronRightIcon className="h-4 w-4 text-gray-300" />
                                            <span>Projects</span>
                                            <ChevronRightIcon className="h-4 w-4 text-gray-300" />
                                            <span className="font-semibold text-base text-blue-999">Frontend Case</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Dropdown/>
                                            <StarIcon className="w-6 h-6 text-gray-300"/>
                                            <XMarkIcon className="w-6 h-6 text-gray-300 cursor-pointer" onClick={()=>setOpen(false)}/>
                                            
                                        </div>
                                    </div>
                                        <div className='flex flex-col justify-center items-center gap-4 mt-4'>
                                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                                            <label htmlFor="name" className="text-gray-700">Name:</label>
                                            <input id="name" className="border shadow-md p-2 rounded-lg w-full" type="text" placeholder='Enter task name' value={name} onChange={(e) => setName(e.target.value)} />

                                            <label htmlFor="description" className="text-gray-700">Description:</label>
                                            <textarea rows={10} id="description" className="border shadow-md p-2 rounded-lg w-full" placeholder="Enter task description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                            <button type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Add Task
                                            </button>
                                        </form>
                                        </div>
                                </div>
                            </Modal>
            </div>
            )
    }

    export default Dnd;
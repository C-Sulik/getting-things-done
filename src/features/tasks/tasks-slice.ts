import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type TaskI = {
  id: number;
  title: string;
  reward: number /* 300 | 125 | 100 | 75 | 50 */;
  completed: boolean;
  createdAt: Date;
  // userId: number;
};

export type TasksStateI = {
  items: TaskI[];
};

const initialState: TasksStateI = {
  items: [
    {
      id: 1,
      title: 'Find dad’s wallet',
      reward: 300,
      completed: false,
      createdAt: new Date(2021, 8, 24),
    },
    {
      id: 2,
      title: 'Put away old toys to white boxes on the balcony',
      reward: 125,
      completed: false,
      createdAt: new Date(2021, 8, 24),
    },
    {
      id: 3,
      title: 'Wash the dishes',
      reward: 100,
      completed: false,
      createdAt: new Date(2021, 8, 23),
    },
    {
      id: 4,
      title: 'Make your bed in the morning',
      reward: 75,
      completed: false,
      createdAt: new Date(2021, 8, 23),
    },
    {
      id: 5,
      title: 'Fix the pillowcase',
      reward: 50,
      completed: false,
      createdAt: new Date(2021, 8, 22),
    },
    {
      id: 6,
      title: 'Find dad’s wallet',
      reward: 300,
      completed: false,
      createdAt: new Date(2021, 8, 24),
    },
    {
      id: 7,
      title: 'Put away old toys to white boxes on the balcony',
      reward: 125,
      completed: false,
      createdAt: new Date(2021, 8, 24),
    },
    {
      id: 8,
      title: 'Find dad’s wallet',
      reward: 300,
      completed: false,
      createdAt: new Date(2021, 8, 24),
    },
    {
      id: 9,
      title: 'Put away old toys to white boxes on the balcony',
      reward: 125,
      completed: false,
      createdAt: new Date(2021, 8, 24),
    },
  ],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    completeTask: (tasks, action) => {
      const task = tasks.items.find(({ id }) => action.payload === id);
      if (task) task.completed = true;
    },
  },
});

export const { completeTask } = tasksSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

export type TaskI = {
  id: number;
  title: string;
  reward: number;
};

export type TasksStateI = {
  items: TaskI[];
};

const initialState: TasksStateI = {
  items: [{ id: 1, title: 'test', reward: 100 }],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

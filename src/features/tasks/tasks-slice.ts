import { createSlice } from '@reduxjs/toolkit';

export type TaskI = {
  id: number;
  title: string;
  reward: 300 | 125 | 100 | 75 | 50;
};

export type TasksStateI = {
  items: TaskI[];
};

const initialState: TasksStateI = {
  items: [
    { id: 1, title: 'СПЭМ ЗА ТРИСТА', reward: 300 },
    { id: 2, title: 'СПЭМ ЗА СТО ДВАДЦАТь ПЯТЬ', reward: 125 },
    { id: 3, title: 'СПЭМ ЗА СТО', reward: 100 },
    { id: 4, title: 'СПЭМ ЗА СЕМЬДЕСЯТ ПЯТЬ', reward: 75 },
    { id: 5, title: 'СПЭМ ЗА ПЯТЬДЕСЯТ', reward: 50 },
  ],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

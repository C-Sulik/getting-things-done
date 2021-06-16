import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { tasksSlice } from '../features/tasks/tasks-slice';
export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

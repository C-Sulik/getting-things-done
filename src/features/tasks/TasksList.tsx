import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const TasksList = () => {
  useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.items);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

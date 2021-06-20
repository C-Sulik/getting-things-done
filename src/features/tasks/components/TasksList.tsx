import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { TasksWrapper } from './styles';
import { TasksItem } from './TaskItem';

export const TasksList = () => {
  useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.items);

  return (
    <TasksWrapper>
      {[...tasks]
        .sort((first, second) => second.reward - first.reward)
        .map((task) => (
          <TasksItem key={task.id} {...task} />
        ))}
    </TasksWrapper>
  );
};

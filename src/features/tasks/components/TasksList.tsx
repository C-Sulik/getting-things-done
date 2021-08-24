import { useAppSelector } from '../../../app/hooks';
import { CompletedTask } from './CompletedTask';
import { TasksWrapper } from './styles';
import { TasksItem } from './TaskItem';

export const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasks.items);

  return (
    <TasksWrapper>
      {[...tasks]
        .sort((first, second) => second.reward - first.reward)
        .map((task) =>
          task.completed === true ? (
            <CompletedTask key={task.id} reward={task.reward} />
          ) : (
            <TasksItem key={task.id} {...task} />
          ),
        )}
    </TasksWrapper>
  );
};

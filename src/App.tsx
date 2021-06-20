import { TasksList } from './features/tasks/components/TasksList';
import { GlobalStyle } from './styles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <TasksList />
    </>
  );
};

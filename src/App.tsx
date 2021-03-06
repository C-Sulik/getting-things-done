import { GlobalStyle } from './styles';
import { TasksList } from './features/tasks/components/TasksList';
import { History } from './features/tasks/components/History';
import { Tabs } from './components/Tabs';
import { CreateTask } from './features/tasks/components/CreateTask';
import { IconButton } from './features/tasks/components/TaskButton';

export const App = () => {
  const TabsConfig = [
    { label: 'Todayβs housework πππ', Component: TasksList },
    { label: 'History πππ', Component: History },
  ];

  return (
    <>
      <GlobalStyle />
      <Tabs config={TabsConfig} />
      <CreateTask />
      <IconButton onClick={() => 1} icon="addTusk" width="240px" height="240px"></IconButton>
    </>
  );
};

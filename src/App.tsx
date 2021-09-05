import { GlobalStyle } from './styles';
import { TasksList } from './features/tasks/components/TasksList';
import { History } from './features/tasks/components/History';
import { Tabs } from './components/Tabs';

export const App = () => {
  const config = [
    { label: 'Today’s housework', Component: TasksList },
    { label: 'History', Component: History },
  ];

  return (
    <>
      <GlobalStyle />
      <Tabs config={config} />
    </>
  );
};

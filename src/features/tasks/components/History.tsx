import styled from 'styled-components';
import { format } from 'date-fns';
import { useAppSelector } from '../../../app/hooks';
import { TaskFront, Reward, TaskTitle, getDifficulty, Difficulty } from './TaskItem';
import { TaskI } from '../tasks-slice';
import { cat } from '../../../svg';

const HistoryWrapper = styled.section``;

const EmptyHistory = styled.div`
  display: flex;
  height: 572px;
  margin-top: 2.4rem;
  background-color: ${({ theme }) => theme.colors.faintOrange};
`;

const SvgWrapper = styled.div`
  margin-top: 29.7rem;
  margin-left: auto;
  padding: 2.1rem;
`;

const Text = styled.p`
  align-self: center;
  margin-left: 28.3rem;
  font-size: 2.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.blackStroke};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin-bottom: 4.8rem;
`;

const StyletDate = styled.p`
  margin: 1.8rem 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.blackStroke};
`;

const HistoryCard = styled(TaskFront)<{ difficulty?: Difficulty }>`
  position: relative;
  background-color: ${({ theme, difficulty }) =>
    difficulty ? theme.colors[difficulty] : 'transparent'};
`;

export const History = () => {
  const tasks = useAppSelector((state) => state.tasks.items);

  const history: { [date: string]: TaskI[] } = {};
  tasks.forEach((task) => {
    const date = format(task.createdAt, 'EEEE, MMMM dd').toString();
    if (!history[date]) history[date] = [];
    history[date].push(task);
    // history[formatDate] ? history[formatDate].push(task) : (history[formatDate] = [task]);
  });

  // const historyReduce: { [date: string]: TaskI[] } = tasks.reduce((acc, task) => {
  //   const date = format(task.createdAt, 'EEEE, MMMM dd').toString();
  //   if (!acc[date]) acc[date] = [];
  //   acc[date].push(task);
  //   return acc;
  // }, {});

  return (
    <HistoryWrapper>
      {Object.keys(history).length === 0 ? (
        <EmptyHistory>
          <Text>There are no finished tasks yet. But there’s a cat.</Text>
          <SvgWrapper>{cat}</SvgWrapper>
        </EmptyHistory>
      ) : (
        Object.entries(history).map(([date, tasks]) => (
          <div key={date}>
            <StyletDate>{date}</StyletDate>
            <Wrapper key={date}>
              {tasks
                .sort((first, second) => second.reward - first.reward)
                .map((task) => (
                  <HistoryCard key={task.id} difficulty={getDifficulty(task.reward)}>
                    <Reward>{task.reward}</Reward>
                    <TaskTitle>{task.title}</TaskTitle>
                  </HistoryCard>
                ))}
            </Wrapper>
          </div>
        ))
      )}
    </HistoryWrapper>
  );
};

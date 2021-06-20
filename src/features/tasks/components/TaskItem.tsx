import styled from 'styled-components';
import { TaskI } from '../tasks-slice';

const TaskWrapper = styled.li<{ difficulty: Difficulty }>`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 240px;
  height: 240px;
  border-radius: ${({ theme }) => theme.radius.default};
  background-color: ${({ theme, difficulty }) => theme.colors.background[difficulty]};
`;

const Reward = styled.span`
  margin-left: auto;
  padding: 0.8rem;
  border-radius: ${({ theme }) => `0 ${theme.radius.default}`};
  background-color: #64060620;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const TaskTitle = styled.p`
  margin: auto 2rem 2.4rem 2rem;
  color: white;
  line-height: 2.2rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export type Difficulty = 'easiest' | 'easy' | 'normal' | 'hard';

const getDifficulty = (reward: number): Difficulty => {
  if (reward >= 125) return 'hard';
  if (reward >= 100) return 'normal';
  if (reward >= 75) return 'easy';
  return 'easiest';
};

export const TasksItem = ({ title, reward }: TaskI) => {
  const taskDifficulty = getDifficulty(reward);

  return (
    <TaskWrapper difficulty={taskDifficulty}>
      <Reward>{reward}</Reward>
      <TaskTitle>{title}</TaskTitle>
    </TaskWrapper>
  );
};

import { useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { IconButton } from './TaskButton';
import { TaskI, completeTask } from '../tasks-slice';

export const TaskWrapper = styled.li<{ isFlipped: boolean }>`
  position: relative;
  display: flex;
  list-style: none;
  width: 240px;
  height: 240px;
  transition: transform 500ms;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

export const TaskSide = css<{ difficulty?: Difficulty }>`
  width: 240px;
  height: 240px;
  background-color: ${({ theme, difficulty }) =>
    difficulty ? theme.colors[difficulty] : 'transparent'};
  border-radius: ${({ theme }) => theme.radius.default};
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const TaskFront = styled.div`
  ${TaskSide}
  backface-visibility: hidden;
  display: flex;
  position: absolute;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const TaskBack = styled.div`
  ${TaskSide}
  backface-visibility: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto 70px 40px;
  color: ${({ theme }) => theme.colors.blackStroke};
  background-color: ${({ theme }) => theme.colors.faintOrange};
  transform: rotateY(-180deg);
`;

export const Reward = styled.span`
  margin-left: auto;
  padding: 0.8rem;
  border-radius: ${({ theme }) => `0 ${theme.radius.default}`};
  background-color: ${({ theme }) => `${theme.colors.danger}20`};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const TaskTitle = styled.p`
  margin: auto 2rem 2.4rem 2rem;
  line-height: 2.2rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const ConfirmQuestion = styled.p`
  justify-self: center;
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 2rem;
  text-align: center;
  line-height: 2.2rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const Note = styled.span<{ color: keyof DefaultTheme['colors'] }>`
  justify-self: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 12px;
  color: ${({ color, theme }) => theme.colors[color]};
  margin-top: 8px;
`;

export type Difficulty = 'easiest' | 'easy' | 'normal' | 'hard';

export const getDifficulty = (reward: number): Difficulty => {
  if (reward >= 125) return 'hard';
  if (reward >= 100) return 'normal';
  if (reward >= 75) return 'easy';
  return 'easiest';
};

export const TasksItem = ({ title, reward, id }: TaskI) => {
  const dispatch = useAppDispatch();
  const [isFlipped, setFlipped] = useState(false);

  const handleCompleteTask = () => dispatch(completeTask(id));
  const taskDifficulty = getDifficulty(reward);
  const flipCard = () => setFlipped((flipped) => !flipped);

  return (
    <>
      <TaskWrapper isFlipped={isFlipped}>
        <TaskFront onClick={flipCard} difficulty={taskDifficulty}>
          <Reward>{reward}</Reward>
          <TaskTitle>{title}</TaskTitle>
        </TaskFront>
        <TaskBack>
          <ConfirmQuestion>Did you {title} </ConfirmQuestion>
          <IconButton onClick={flipCard} icon="cancel"></IconButton>
          <IconButton onClick={handleCompleteTask} icon="confirm"></IconButton>
          <Note color="blackStroke">No, maybe later</Note>
          <Note color="accent">Yes, I did!</Note>
        </TaskBack>
      </TaskWrapper>
    </>
  );
};

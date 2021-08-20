import { useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { Button } from '../../../components/Button';
import { TaskI } from '../tasks-slice';

const TaskWrapper = styled.li<{ isFlipped: boolean }>`
  position: relative;
  display: flex;
  list-style: none;
  cursor: pointer;
  width: 240px;
  height: 240px;
  transition: transform 500ms;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

const TaskSide = css<{ difficulty?: Difficulty }>`
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

const TaskFront = styled.div`
  ${TaskSide}
  backface-visibility: hidden;
  display: flex;
  position: absolute;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;

const TaskBack = styled.div`
  ${TaskSide}
  backface-visibility: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto 70px 40px;
  color: ${({ theme }) => theme.colors.blackStroke};
  background-color: ${({ theme }) => theme.colors.faintOrange};
  transform: rotateY(-180deg);
`;

const Reward = styled.span`
  margin-left: auto;
  padding: 0.8rem;
  border-radius: ${({ theme }) => `0 ${theme.radius.default}`};
  background-color: ${({ theme }) => `${theme.colors.danger}20`};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const TaskTitle = styled.p`
  margin: auto 2rem 2.4rem 2rem;
  line-height: 2.2rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const ConfirmQuestion = styled.p`
  justify-self: center;
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 2rem;
  text-align: center;
  line-height: 2.2rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const Note = styled.span<{ color: keyof DefaultTheme['colors'] }>`
  justify-self: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 12px;
  color: ${({ color, theme }) => theme.colors[color]};
  margin-top: 8px;
`;

export type Difficulty = 'easiest' | 'easy' | 'normal' | 'hard';

const getDifficulty = (reward: number): Difficulty => {
  if (reward >= 125) return 'hard';
  if (reward >= 100) return 'normal';
  if (reward >= 75) return 'easy';
  return 'easiest';
};

export const TasksItem = ({ title, reward }: TaskI) => {
  const [isFlipped, setFlipped] = useState(false);
  const taskDifficulty = getDifficulty(reward);

  const flipCard = () => setFlipped((flipped) => !flipped);

  return (
    <>
      <TaskWrapper onClick={flipCard} isFlipped={isFlipped}>
        <TaskFront difficulty={taskDifficulty}>
          <Reward>{reward}</Reward>
          <TaskTitle>{title}</TaskTitle>
        </TaskFront>
        <TaskBack>
          <ConfirmQuestion>Did you {title} </ConfirmQuestion>
          <Button icon="cancel"></Button>
          <Button icon="confirm"></Button>
          <Note color="blackStroke">No, maybe later</Note>
          <Note color="accent">Yes, I did!</Note>
        </TaskBack>
      </TaskWrapper>
    </>
  );
};

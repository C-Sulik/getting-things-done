import styled from 'styled-components';
import { ConfirmIcon } from '../../../icons';

const TaskSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.faintOrange};
  border-radius: ${({ theme }) => theme.radius.default};
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Reward = styled.p`
  margin: 0.5rem 2rem 2rem 2.4rem;
  line-height: 1.7rem;
  font-size: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.blackStroke};
  text-align: center;
`;

const Text = styled.span`
  justify-self: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 2rem;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 6rem;
  width: 120px;
  height: 120px;
  align-items: center;
  border: ${({ theme }) => `1px dashed ${theme.colors.accent}`};
  border-radius: 50%;
`;

export const CompletedTask = () => {
  return (
    <TaskSide>
      <IconWrapper>{ConfirmIcon('big')}</IconWrapper>
      <Text>Well done!</Text>
      <Reward>You earned 50 Help Coins!</Reward>
    </TaskSide>
  );
};

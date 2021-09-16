import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { Button } from '../../../components/Button';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 240px;
  height: 312px;
  border-radius: ${({ theme }) => theme.radius.default};
  background-color: transparent;
  box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.15);
`;

const NewTask = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.faintOrange};
  border-radius: ${({ theme }) => theme.radius.default};
`;

const Text = styled.p`
  padding: 0px;
  margin: 1.6rem 2rem 2rem;
  font-size: 1.8rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const Label = styled.span`
  margin-left: 2rem;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.blackStroke};
`;

const InputText = styled.input<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 0;
  margin-left: 2rem;
  margin-bottom: 1.8rem;
  padding: 0.8rem;
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 1rem 2rem;
`;

export const CreateTask = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [reward, setReward] = useState('');

  // const HandleCreatedTask = () =>
  //   dispatch(
  //     createTask({
  //       id: 3,
  //       title: title.trim(),
  //       reward: Number(reward),
  //       completed: false,
  //       createdAt: new Date().toJSON(),
  //     }),
  //   );

  return (
    <Form>
      <NewTask>
        <Text>New housework task</Text>
        <Label>Title</Label>
        <InputText
          width="184px"
          height="48px"
          onChange={(event) => setTitle(event.target.value)}
        ></InputText>
        <Label>Reward</Label>
        <InputText
          width="60px"
          height="19px"
          onChange={(event) => setReward(event.target.value)}
        ></InputText>
      </NewTask>
      <Wrapper>
        <Button width="68px" color="#f95d66" variation="bordered" onClick={() => 1}>
          Cancel
        </Button>
        <Button width="120px" color="#FF8933" variation="blocky" type="submit" onClick={() => 1}>
          Create
        </Button>
      </Wrapper>
    </Form>
  );
};

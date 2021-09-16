import styled, { css } from 'styled-components';

const StyletButton = styled.button<{ variation: string; color: string; width: string }>`
  display: flex;
  justify-content: center;
  width: ${({ width }) => width};
  height: 40px;
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 1rem;
  border: ${({ variation }) => (variation === 'bordered' ? '1px solid #f95d66;' : 'none')};
  background-color: ${({ variation, color }) => (variation === 'blocky' ? color : 'transparent')};
  color: ${({ variation, color }) => (variation === 'blocky' ? '#ffffff' : color)};
  cursor: pointer;
`;

interface ButtonI {
  variation: 'bordered' | 'blocky';
  width: string;
  color: string;
  type?: 'submit' | 'reset' | 'button';
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonI> = ({
  type = 'button',
  onClick,
  variation,
  color,
  width,
  children,
}) => {
  return (
    <StyletButton onClick={onClick} type={type} variation={variation} color={color} width={width}>
      {children}
    </StyletButton>
  );
};

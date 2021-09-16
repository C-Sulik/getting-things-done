import styled from 'styled-components';
import { CancelIcon, ConfirmIcon, AddTask } from '../../../icons';
import { IconPropsI } from '../../../icons/types';

const StyletButton = styled.button<{ width?: string; height?: string }>`
  display: flex;
  width: ${({ width }) => (width ? width : '70px')};
  height: ${({ height }) => (height ? height : '70px')};
  justify-content: center;
  justify-self: center;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

type IconNames = 'confirm' | 'cancel' | 'addTusk';

const iconsMap: { [iconName in IconNames]?: React.FC<IconPropsI> } = {
  confirm: ConfirmIcon,
  cancel: CancelIcon,
  addTusk: AddTask,
};

interface IconButtonI {
  type?: 'submit' | 'reset' | 'button';
  icon?: IconNames;
  width?: string;
  height?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const IconButton: React.FC<IconButtonI> = ({
  type = 'button',
  onClick,
  icon,
  width,
  height,
  children,
}) => {
  const IconComponent = icon && iconsMap[icon];

  return (
    <StyletButton onClick={onClick} width={width} height={height} type={type}>
      {IconComponent && <IconComponent />}
      {children}
    </StyletButton>
  );
};

import styled from 'styled-components';
import { CancelIcon, ConfirmIcon } from '../icons';
import { IconPropsI } from '../icons/types';

const StyletButton = styled.button<{ icon?: IconNames }>`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: ${({ icon, theme }) =>
    icon !== 'confirm' ? 'none' : `1px dashed ${theme.colors.accent}`};
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
`;

type IconNames = 'confirm' | 'cancel';

const iconsMap: { [iconName in IconNames]?: React.FC<IconPropsI> } = {
  confirm: ConfirmIcon,
  cancel: CancelIcon,
};

interface ButtonI {
  type?: 'submit' | 'reset' | 'button';
  icon?: IconNames;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonI> = ({ type = 'button', icon, onClick, children }) => {
  const IconComponent = icon && iconsMap[icon];

  return (
    <StyletButton onClick={onClick} type={type} icon={icon}>
      {IconComponent && <IconComponent />}
      {children}
    </StyletButton>
  );
};

import styled from 'styled-components';
import { CancelIcon, ConfirmIcon } from '../icons';

const StyletButton = styled.button<{ icon: IconNames }>`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  border: ${({ icon, theme }) =>
    icon === 'cancel' ? 'none' : `1px dashed ${theme.colors.accent}`};
  border-radius: 50%;
  background-color: transparent;
  width: 70px;
  height: 70px;
`;

type IconNames = 'confirm' | 'cancel';

const iconsMap: { [iconName in IconNames]: () => JSX.Element } = {
  confirm: ConfirmIcon,
  cancel: CancelIcon,
};

interface ButtonI {
  type?: 'submit' | 'reset' | 'button';
  icon: IconNames;
}

export const Button: React.FC<ButtonI> = ({ type = 'button', icon }) => {
  const IconComponent = icon && iconsMap[icon];

  return (
    <StyletButton type={type} icon={icon}>
      {IconComponent && <IconComponent />}
    </StyletButton>
  );
};

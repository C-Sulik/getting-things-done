import { IconPropsI } from './types';

export const ConfirmIcon: React.FC<IconPropsI> = ({ size = 'standard' }) => {
  if (size === 'big') {
    return (
      <svg
        width="67"
        height="51"
        viewBox="0 0 67 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.75 40.375L6 24.625L0.75 29.875L21.75 50.875L66.75 5.875L61.5 0.625L21.75 40.375Z"
          fill="#FF8933"
        />
      </svg>
    );
  }

  return (
    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="33" cy="33" r="32" stroke="#FF8933" stroke-dasharray="5 5" />
      <path d="M27 44.4L18.6 36L15.8 38.8L27 50L51 26L48.2 23.2L27 44.4Z" fill="#FF8933" />
    </svg>
  );
};

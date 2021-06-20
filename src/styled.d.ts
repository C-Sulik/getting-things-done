import 'styled-components';
import { Difficulty } from './features/tasks/components/TaskItem';

type FontSizes = 'extraSmall' | 'small' | 'regular' | 'default' | 'medium' | 'large' | 'largest';
type Opacity = 'minimal' | 'medium' | 'regular' | 'small';

declare module 'styled-components' {
  export interface DefaultTheme {
    radius: { default: string };
    colors: {
      background: { [diff in Difficulty]: string };
    };
    fontSize: { [size in FontSizes]: string };
    opacity: { [key in Opacity]: number };
  }
}

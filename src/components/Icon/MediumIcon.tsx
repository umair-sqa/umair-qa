import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const MediumIcon: FC<IconProps> = memo((props) => (
  <Icon {...props}>
    <path
      d="M34.5 21.5C34.5 20.5 34.2 19.6 33.5 18.9L23.6 7.4V6H43.6L57.8 31.2L69.8 6H89.4V7.4L80.2 17.1C79.6 17.6 79.3 18.4 79.6 19.2V56.4C79.3 57.2 79.6 58 80.2 58.6L88.9 68.8V70.2H58.5V68.8L67.5 58.3C68.1 57.7 68.4 56.9 68.1 56.1V25.1L53.3 70.2H50.6L34.4 25.1V59.3C34.4 60 34.6 60.7 35.1 61.2L46.2 68.6V70.2H10.2V68.6L21.3 61.2C21.8 60.7 22 60 22 59.3V16.4C22 15.7 21.8 15 21.3 14.5L10.2 7.1V5.5H34.5V21.5Z"
      fill="currentColor"
    />
  </Icon>
));

export default MediumIcon;

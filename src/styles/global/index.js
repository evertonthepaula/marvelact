import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import settings from './settings';
import normalize from './normalize';
import typography from './typography';

import 'antd/dist/antd.css';

export default createGlobalStyle`
  ${settings}
  ${normalize}
  ${typography}
`;

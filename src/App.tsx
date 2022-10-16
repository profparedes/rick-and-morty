import { memo } from 'react';

import Routes from 'Routes';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyles />
  </>
);

export default memo(App);

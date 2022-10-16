import { memo } from 'react';

import Header from 'components/Header';

import { MainContainer } from './style';

const Home: React.FC = () => (
  <>
    <Header />
    <MainContainer className="flex-grow-1" />
  </>
);

export default memo(Home);

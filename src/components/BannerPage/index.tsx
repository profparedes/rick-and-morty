import { memo } from 'react';

import { BackgroundImg } from './style';

interface IBannerPageProps {
  title: string;
}

const BannerPage: React.FC<IBannerPageProps> = ({ title }) => (
  <BackgroundImg className="container d-flex justify-content-end align-items-start mb-3">
    <h1 className="mt-5 me-5">{title}</h1>
  </BackgroundImg>
);
export default memo(BannerPage);

import { memo } from 'react';

import { Card } from 'react-bootstrap';

import { EpisodeType } from 'types/EpisodeType';

interface IEpisodeCardProps {
  episode: EpisodeType;
}

const EpisodeCard: React.FC<IEpisodeCardProps> = ({ episode }) => {
  return (
    <Card className="w-100">
      <Card.Body>
        <Card.Title>{episode.name}</Card.Title>
        <Card.Text>Episode: {episode.episode}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default memo(EpisodeCard);

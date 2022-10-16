import { memo } from 'react';

import { Card } from 'react-bootstrap';

import { LocationType } from 'types/LocationType';

interface ILocationCardProps {
  location: LocationType;
}

const LocationCard: React.FC<ILocationCardProps> = ({ location }) => {
  return (
    <Card className="w-100">
      <Card.Body>
        <Card.Title>{location.name}</Card.Title>
        <Card.Text>Dimension: {location.dimension}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default memo(LocationCard);

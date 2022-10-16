import { memo } from 'react';

import { Card, Ratio } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

import { CharacterType } from 'types/CharacterType';

interface ICharCardProps {
  char: CharacterType;
}

const CharCard: React.FC<ICharCardProps> = ({ char }) => {
  return (
    <Card className="w-100">
      <Ratio aspectRatio="1x1">
        <img src={char.image} alt={char.name} />
      </Ratio>
      <Card.Body>
        <Card.Title className="text-center">
          <Link
            className="text-decoration-none text-dark"
            to={`/character/${char.id}/${slugify(char.name, {
              lower: true,
              trim: true,
            })}`}
          >
            {char.name}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default memo(CharCard);

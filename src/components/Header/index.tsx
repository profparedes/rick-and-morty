import { memo } from 'react';

import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import rickandmortyapi from 'assets/rickandmortyapi.jpg';

import { IconImage } from './style';

const Header: React.FC = () => {
  return (
    <Container className="mt-3 d-flex justify-content-between">
      <Link to="/">
        <IconImage src={rickandmortyapi} alt="Rick And Morty Icon" />
      </Link>
      <ListGroup horizontal>
        <ListGroup.Item className="d-flex align-items-center">
          <Link to="/characters">Characters</Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <Link to="/locations">Locations</Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center">
          <Link to="/episodes">Episodes</Link>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default memo(Header);

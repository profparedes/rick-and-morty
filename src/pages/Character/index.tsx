import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Ratio, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Header from 'components/Header';

import { CharacterType } from 'types/CharacterType';

const Character: React.FC = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState<CharacterType | null>(null);

  const fetchCharacter = useCallback(async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setCharacter(response);
  }, [id]);

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow-1 mt-4">
        <Container>
          {isLoading && (
            <div className="d-flex justify-content-around w-100 mt-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {!isLoading && (
            <section className="d-flex justify-content-center">
              <Row>
                <Col>
                  <img
                    className="rounded"
                    src={character?.image}
                    alt={character?.name}
                  />
                </Col>
                <Col>
                  <h2 className="h1">{character?.name}</h2>
                  <p>Species: {character?.species}</p>
                  <p>Gender: {character?.gender}</p>
                  <p>Origin: {character?.origin.name}</p>
                  <p>Location: {character?.location.name}</p>
                </Col>
              </Row>
            </section>
          )}
        </Container>
      </main>
    </>
  );
};

export default memo(Character);

import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Pagination, Row, Spinner } from 'react-bootstrap';

import BannerPage from 'components/BannerPage';
import CharCard from 'components/CharCard';
import Header from 'components/Header';

import { CharacterType } from 'types/CharacterType';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = useCallback(async (page: number) => {
    setIsLoading(true);

    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setCharacters(results);
    setTotalPages(info.pages);
  }, []);

  useEffect(() => {
    fetchCharacters(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback((page: number) => {
    fetchCharacters(page);
    setCurrentPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <BannerPage title="Characters" />
      <main className="flex-grow-1 bg-dark">
        <Container className="mt-3">
          {isLoading && (
            <div className="d-flex justify-content-around w-100 mt-5">
              <Spinner animation="border" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <Spinner animation="border" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <Spinner animation="border" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <Spinner animation="border" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {!isLoading && (
            <>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center g-3 mb-3">
                {characters.map((char) => (
                  <Col className="d-flex">
                    <CharCard key={char.id} char={char} />
                  </Col>
                ))}
              </Row>
              {totalPages > 1 && (
                <Pagination className="justify-content-center flex-wrap">
                  {Array(totalPages)
                    .fill(null)
                    .map((_, i) => (
                      <Pagination.Item
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                        active={currentPage === i + 1}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </Pagination.Item>
                    ))}
                </Pagination>
              )}
            </>
          )}
        </Container>
      </main>
    </>
  );
};

export default memo(Characters);

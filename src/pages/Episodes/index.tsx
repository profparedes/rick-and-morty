import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Pagination, Row, Spinner } from 'react-bootstrap';

import BannerPage from 'components/BannerPage';
import EpisodeCard from 'components/EpisodeCard';
import Header from 'components/Header';

import { EpisodeType } from 'types/EpisodeType';

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchEpisodes = useCallback(async (page: number) => {
    setIsLoading(true);

    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setEpisodes(results);
    setTotalPages(info.pages);
  }, []);

  useEffect(() => {
    fetchEpisodes(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback((page: number) => {
    fetchEpisodes(page);
    setCurrentPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <BannerPage title="Episodes" />
      <main className="flex-grow-1 bg-dark">
        <section className="container mt-3">
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
                {episodes.map((episode) => (
                  <Col className="d-flex">
                    <EpisodeCard episode={episode} />
                  </Col>
                ))}
              </Row>
              {totalPages > 1 && (
                <Pagination className="justify-content-center">
                  {Array(totalPages)
                    .fill(null)
                    .map((_, i) => (
                      <Pagination.Item
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
        </section>
      </main>
    </>
  );
};

export default memo(Episodes);

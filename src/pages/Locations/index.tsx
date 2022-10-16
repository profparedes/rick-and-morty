import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Pagination, Row, Spinner } from 'react-bootstrap';

import BannerPage from 'components/BannerPage';
import Header from 'components/Header';
import LocationCard from 'components/LocationCard';

import { LocationType } from 'types/LocationType';

const Locations: React.FC = () => {
  const [locations, setLocation] = useState<LocationType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchLocations = useCallback(async (page: number) => {
    setIsLoading(true);

    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setLocation(results);
    setTotalPages(info.pages);
  }, []);

  useEffect(() => {
    fetchLocations(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback((page: number) => {
    fetchLocations(page);
    setCurrentPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <BannerPage title="Locations" />
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
                {locations.map((location) => (
                  <Col className="d-flex">
                    <LocationCard location={location} />
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
        </section>
      </main>
    </>
  );
};

export default memo(Locations);

import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { getImages } from "services/home/home.service";
import ImageResponse from "types/response/imageResponse";

const useGetHome = () => {
  // ------- States -------

  const [images, setImages] = useState([] as ImageResponse[]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  // ------- Functions -------

  /**
   * useEffect to trigger the `fetchImages` function whenever `page` updates
   */

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    /**
     * Fetch images from the Unsplash API and append the results to your `images` array
     */

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const results = await getImages(page, source.token);

        const data = results.data as {
          results: ImageResponse[];
          total: number;
          total_pages: number;
        };
        if (isMounted) {
          setImages((prev) => [...prev, ...data.results]);
          setError(undefined);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    fetchData();

    return cleanUp;
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return {
    images,
    page,
    isLoading,
    setPage,
  };
};

export default useGetHome;

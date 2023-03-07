import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import ImageCard from "components/card/ImageCard";
import useGetHome from "hooks/home/useGetHome";
import type { NextPage } from "next";

const Home: NextPage = () => {
  /**
   * useEffect - handle homepage logic
   */

  const { images, page, isLoading, setPage } = useGetHome();

  // ------- Render -------

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid key={index} item xs={6} md={4}>
            <ImageCard
              isLoading={isLoading}
              key={image.id}
              imgSrc={image.urls.regular}
              imgAlt={image.alt_description}
              shotBy={image.user.name}
              creditUrl={image.links.html}
              isLast={index === images.length - 2}
              newLimit={() => setPage(page + 1)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;

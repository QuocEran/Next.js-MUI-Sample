import { Avatar, Box, Typography } from "@mui/material";
import useImageCard from "hooks/components/card/useImageCard";
import Image from "next/image";
import stringAvatar from "services/utilities/stringToAvatar";
import colors from "styles/colors";

type props = {
  isLoading: boolean;
  creditUrl?: string;
  imgAlt: string;
  imgSrc: string;
  shotBy: string;
  newLimit: () => void;
  isLast?: boolean;
} & typeof defaultProps;

const defaultProps = {
  imgAlt: "placeholder",
  imgSrc: "/placeholder.jpg",
  shotBy: "",
};

const ImageCard = (props: props) => {
  const { isLoading, creditUrl, imgAlt, imgSrc, shotBy, newLimit, isLast } = props;
  const { cardRef } = useImageCard(isLast, newLimit);
  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        bgcolor: "white",
        boxShadow:
          "0px 50px 100px rgba(60, 66, 87, 0.08), 0px 15px 35px rgba(60, 66, 87, 0.08), 0px 5px 15px rgba(0, 0, 0, 0.12)",
        borderRadius: "8px",
      }}
      ref={cardRef}
    >
      <Box
        component="a"
        sx={{
          textDecoration: "none",
          textTransform: "none",
          color: colors.dark,
        }}
        href={creditUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            height: "24rem",
            borderRadius: "6px",
          }}
          className="skeleton"
        >
          <Image
            src={imgSrc}
            layout="fill"
            sizes=""
            style={{ objectFit: "cover" }}
            alt={imgAlt}
            // placeholder="blur"
            // blurDataURL={BlurImage}
          />
        </Box>
        <Box sx={{ pt: 2, borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px" }} className="p-4 rounded-b-xl">
          {isLoading ? (
            <Box display="flex" gap="10px" alignItems="center">
              <Box height="40px" width="40px" borderRadius="50%" className="skeleton" />
              <Typography
                variant="caption"
                fontWeight={600}
                className="skeleton skeleton-text"
                sx={{
                  width: "70%",
                }}
              ></Typography>
            </Box>
          ) : (
            <Box display="flex" gap="10px" alignItems="center">
              <Avatar {...stringAvatar(shotBy)} />
              <Typography variant="caption" fontWeight={600}>
                {shotBy}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageCard;

ImageCard.defaultProps = defaultProps;

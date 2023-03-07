import { CardMedia, SxProps, Theme } from "@mui/material";

type Props = {
  src: string;
  sx?: SxProps<Theme>;
  wh?: string;
  defaultFilter?: boolean;
};

const AppIcon = (props: Props) => {
  const { src, defaultFilter, sx } = props;

  return (
    <CardMedia
      component="img"
      src={src}
      sx={{
        objectFit: "contain",
        height: props.wh,
        width: props.wh,
        ...sx,
      }}
    />
  );
};

export default AppIcon;

AppIcon.defaultProps = {
  wh: "24px",
};

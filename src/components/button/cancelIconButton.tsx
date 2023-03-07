import { IconButton } from "@mui/material";
import colors from "styles/colors";

type Props = {
  onClick: () => void;
};

const CancelIconButton = (props: Props) => {
  return (
    <IconButton
      disableRipple
      sx={{
        bgcolor: colors.neutral[500],
        height: "28px",
        width: "28px",
      }}
      onClick={props.onClick}
    >
      X
    </IconButton>
  );
};

export default CancelIconButton;

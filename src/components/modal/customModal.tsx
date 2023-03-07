import { Box, Modal } from "@mui/material";
import CancelIconButton from "components/button/cancelIconButton";
import React from "react";

type CustomModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  maxWidth?: string;
  width?: string;
};

const CustomModal = (props: CustomModalProps) => {
  const { children, open, onClose, width, maxWidth } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: maxWidth ? maxWidth : null,
          width: width ? width : 350,
          bgcolor: "#fff",
          borderRadius: "16px",
          boxShadow: 24,
          p: "16px",
        }}
      >
        <Box sx={{ position: "absolute", bgcolor: "transparent", top: "-10px", right: "-8px" }}>
          <CancelIconButton onClick={onClose} />
        </Box>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;

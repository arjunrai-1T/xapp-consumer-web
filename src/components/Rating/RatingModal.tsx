import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  Button,
  Rating,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

interface RatingModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

const RatingModal: React.FC<RatingModalProps> = ({ open, onClose, title }) => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="rating-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          color: "black",
          boxShadow: 24,
          p: 4,
          borderRadius: 'none',
          textAlign: "center",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "black" }}
        >
          <CloseIcon />
        </IconButton>

        {/* Star Icon with Question Mark */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <StarIcon sx={{ fontSize: 60, color: "#1E90FF" }} />
          <Typography
            sx={{
              position: "absolute",
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              mt: "10px",
            }}
          >
            ?
          </Typography>
        </Box>

        {/* Rate This Text */}
        <Typography sx={{ color: "#FFD700", fontWeight: "bold", mb: 1 }}>
          RATE THIS
        </Typography>

        {/* Movie Title */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          {title}
        </Typography>

        {/* Star Rating */}
        <Rating
          value={rating}
          onChange={(_, newValue) => setRating(newValue)}
          size="large"
          sx={{ mb: 2 }}
        />

        {/* Rate Button */}
        <Button
          variant="contained"
          sx={{
            width: "100%",
            bgcolor: rating ? "#555" : "#333",
            color: rating ? "white" : "gray",
            textTransform: "none",
            mt: 2,
            "&:hover": { bgcolor: rating ? "#444" : "#333" },
          }}
          disabled={!rating}
        >
          Rate
        </Button>
      </Box>
    </Modal>
  );
};

export default RatingModal;

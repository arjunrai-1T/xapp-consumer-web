import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import RatingModal from "./RatingModal.tsx";

interface RatingProps {
  rating: number;
  totalVotes: string;
}

const Rating: React.FC<RatingProps> = ({ rating, totalVotes }) => {

  const [open, setOpen] = useState(false);
  const onCloseRatingModal=()=>{
    setOpen(false);
  }

  return (
    <Box display="flex" alignItems="center" gap={4} sx={{ background: "#white", padding: 2, borderRadius: 1 }}>
      {/* IMDb Rating */}
      <Box textAlign="center">
        <Box display="flex" alignItems="center">
          <StarIcon sx={{ color: "gold" }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>
            {rating}
          </Typography>
          <Typography variant="body2" sx={{ color: "#222" }}>/10</Typography>
        </Box>
        <Typography variant="caption" sx={{ color: "#222" }}>
          {totalVotes}
        </Typography>
      </Box>

      {/* User Rating */}
      <Box textAlign="center" onClick={() => setOpen(true)}>
        <Box display="flex" alignItems="center">
          <StarBorderIcon sx={{ color: "#222" }} />
          <Typography variant="body1" sx={{ color: "#4DA6FF", fontWeight: "bold", ml: 0.5, cursor: "pointer" }}>
            Rate
          </Typography>
          <RatingModal open={open} onClose={onCloseRatingModal} title="Rate" />
        </Box>
      </Box>
    </Box>
  );
};

export default Rating;

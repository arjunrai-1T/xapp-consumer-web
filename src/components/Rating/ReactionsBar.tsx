import React, { useState } from "react";
import { Box, IconButton, Typography, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CelebrationIcon from "@mui/icons-material/Celebration";

const ReactionsBar = () => {
  const [reactions, setReactions] = useState({
    love: 197,
    clap: 77,
    idea: 56,
    laugh: 30,
    party: 63,
  });

  const handleReaction = (type: keyof typeof reactions) => {
    setReactions((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <Stack direction="row" spacing={1} sx={{ bgcolor: "white", p: 1, borderRadius: 5 }}>
      {[
        { icon: <FavoriteIcon color="error" />, type: "love" },
        { icon: <WavingHandIcon sx={{ color: "#ffcc00" }} />, type: "clap" },
        { icon: <EmojiObjectsIcon sx={{ color: "#ffcc00" }} />, type: "idea" },
        { icon: <EmojiEmotionsIcon sx={{ color: "#ffcc00" }} />, type: "laugh" },
        { icon: <CelebrationIcon sx={{ color: "#ff66b2" }} />, type: "party" },
      ].map(({ icon, type }) => (
        <Box key={type} sx={{ display: "flex", alignItems: "center", bgcolor: "#262626", px: 1, borderRadius: 10 }}>
          <IconButton onClick={() => handleReaction(type as keyof typeof reactions)} size="small">
            {icon}
          </IconButton>
          <Typography color="white">{reactions[type as keyof typeof reactions]}</Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default ReactionsBar;

import React, { useState } from "react";
import { Avatar, Button, IconButton, Typography, Box, Stack } from "@mui/material";
import { ThumbUp, ThumbDown, Share, Download, Notifications } from "@mui/icons-material";
import Rating from "../Rating/Rating.tsx";
import ReactionsBar from "../Rating/ReactionsBar.tsx";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";

const VideoShortDesc = () => {
  const [likes, setLikes] = useState(1800);
  const [dislikes, setDislikes] = useState(50);
  const [userAction, setUserAction] = useState(null); // 'like', 'dislike', or null

  const handleLike = () => {
    if (userAction === "like") {
      setLikes(likes - 1);
      setUserAction(null);
    } else {
      setLikes(likes + 1);
      if (userAction === "dislike") {
        setDislikes(dislikes - 1);
      }
      setUserAction("like");
    }
  };

  const handleDislike = () => {
    if (userAction === "dislike") {
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else {
      setDislikes(dislikes + 1);
      if (userAction === "like") {
        setLikes(likes - 1);
      }
      setUserAction("dislike");
    }
  };

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Typography variant="h6" fontWeight="bold">
        Proofs that Gumnami Baba was none other than Netaji Subhas Chandra Bose
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2} mt={1}>
        {/* Channel Info */}
        <Avatar src="https://via.placeholder.com/40" alt="Chandrachur Gh..." />
        <Box>
          <Typography fontWeight="bold">Chandrachur Gh...</Typography>
          <Typography variant="body2" color="text.secondary">58.4K subscribers</Typography>
        </Box>

        {/* Action Buttons */}
        {/* <Button variant="contained" sx={{ bgcolor: "black", color: "white", textTransform: "none" }}>
          Join
        </Button> */}

        <Button
          variant="outlined"
          sx={{
            borderColor: "gray",
            textTransform: "none",
            color: "black",
            "&:hover": { borderColor: "black" },
          }}
          endIcon={<Notifications />}
        >
          Subscribed
        </Button>

        {/* Like & Dislike */}
        <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton onClick={handleLike} color={userAction === "like" ? "primary" : "default"}>
              <ThumbUp />
            </IconButton>
            <Typography>{likes.toLocaleString()}</Typography>
            <IconButton onClick={handleDislike} color={userAction === "dislike" ? "error" : "default"}>
              <ThumbDown />
            </IconButton>
            <Typography>{dislikes.toLocaleString()}</Typography>
            <Rating rating={8.5} totalVotes="75K" />
        </Stack>

        {/* <IconButton>
          <Share />
        </IconButton>

        <IconButton>
          <Download />
        </IconButton> */}
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2} mt={1} justifyContent="space-between">
        <ReactionsBar />
        <SocialLinks />
      </Stack>
    </Box>
  );
};

export default VideoShortDesc;

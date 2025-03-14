import React from "react";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialLinks = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, url: "https://www.facebook.com", color: "#1877F2" },
    { icon: <InstagramIcon />, url: "https://www.instagram.com", color: "#E1306C" },
    { icon: <TwitterIcon />, url: "https://www.twitter.com", color: "#1DA1F2" },
    { icon: <YouTubeIcon />, url: "https://www.youtube.com", color: "#FF0000" },
    { icon: <LinkedInIcon />, url: "https://www.linkedin.com", color: "#0077B5" },
  ];

  return (
    <Stack direction="row" spacing={1} sx={{ p: 1, borderRadius: 5 }}>
      {socialLinks.map(({ icon, url, color }, index) => (
        <Tooltip key={index} title="Open Profile">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: color,
              borderRadius: "50%",
              width: 36,
              height: 36,
            }}
          >
            <IconButton
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}
            >
              {icon}
            </IconButton>
          </Box>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default SocialLinks;


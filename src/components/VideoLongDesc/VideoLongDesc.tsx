import React, { useState } from "react";
import { AccordionDetails, Typography, Box, Avatar, Button, IconButton, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'

interface VideoInfoProps {
  views: string;
  uploadedDate: string;
  description: string;
  shortDescription: string;
  likes: number;
  dislikes: number;
  channelName: string;
  channelSubscribers: string;
  channelAvatar: string;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const VideoLongDesc: React.FC<VideoInfoProps> = ({
  views,
  uploadedDate,
  description,
  shortDescription,
  likes,
  dislikes,
  channelName,
  channelSubscribers,
  channelAvatar,
}) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);

  return (
    <Box sx={{ width: "100%", p: 2, bgcolor: "#f9f9f9", borderRadius: 2 }}>
      {/* Views and Upload Date */}
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        {views} views • {uploadedDate}
      </Typography>

      {/* Description Accordion */}
      <Accordion elevation={0} sx={{ bgcolor: "transparent" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {shortDescription}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default VideoLongDesc;

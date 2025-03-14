import React, { useState } from "react";
import { Avatar, IconButton, Typography, Box, Button, TextField, styled, AccordionSummaryProps } from "@mui/material";
import { ThumbUp, ThumbDown, ChatBubbleOutline } from "@mui/icons-material";
import {   AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const commentsData = [
  {
    id: 1,
    user: "princesingtomerbhaarti",
    avatar: "https://via.placeholder.com/40",
    text: "My Tauji was posted in Gumnami Baba’s district constructing bridges...",
    likes: 300,
    dislikes: 10,
    replies: [
      {
        id: 2,
        user: "ashwanikumar-nk7gd",
        avatar: "https://via.placeholder.com/40",
        text: "Lucky man your uncle!",
        likes: 6,
        dislikes: 0,
        replies: []
      },
      {
        id: 3,
        user: "rakhiawasthi2814",
        avatar: "https://via.placeholder.com/40",
        text: "Your tauji was so lucky. I have read the book 'Conundrum'...",
        likes: 10,
        dislikes: 1,
        replies: []
      }
    ]
  },
  {
    id: 4,
    user: "pradeepkumarsingh1388",
    avatar: "https://via.placeholder.com/40",
    text: "Anuj Sir, I am a UP boy, was born in Rajasthan and support Subhash Chandra Bose.",
    likes: 52,
    dislikes: 5,
    replies: []
  },
  {
    id: 4,
    user: "pradeepkumarsingh1388",
    avatar: "https://via.placeholder.com/40",
    text: "Anuj Sir, I am a UP boy, was born in Rajasthan and support Subhash Chandra Bose.",
    likes: 52,
    dislikes: 5,
    replies: []
  },
  {
    id: 4,
    user: "pradeepkumarsingh1388",
    avatar: "https://via.placeholder.com/40",
    text: "Anuj Sir, I am a UP boy, was born in Rajasthan and support Subhash Chandra Bose.",
    likes: 52,
    dislikes: 5,
    replies: []
  },
  {
    id: 4,
    user: "pradeepkumarsingh1388",
    avatar: "https://via.placeholder.com/40",
    text: "Anuj Sir, I am a UP boy, was born in Rajasthan and support Subhash Chandra Bose.",
    likes: 52,
    dislikes: 5,
    replies: []
  },
  {
    id: 4,
    user: "pradeepkumarsingh1388",
    avatar: "https://via.placeholder.com/40",
    text: "Anuj Sir, I am a UP boy, was born in Rajasthan and support Subhash Chandra Bose.",
    likes: 52,
    dislikes: 5,
    replies: []
  },
  {
    id: 4,
    user: "pradeepkumarsingh1388",
    avatar: "https://via.placeholder.com/40",
    text: "Anuj Sir, I am a UP boy, was born in Rajasthan and support Subhash Chandra Bose.",
    likes: 52,
    dislikes: 5,
    replies: []
  },
  {
    id: 4,
    user: "pradeepkumarsingh1388",
    avatar: "https://via.placeholder.com/40",
    text: "Anuj Sir, I am a UP boy, was born in Rajasthan and support Subhash Chandra Bose.",
    likes: 52,
    dislikes: 5,
    replies: []
  }
];

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

const CommentInput = ({ addComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      addComment({
        id: Date.now(),
        user: "NewUser",
        avatar: "https://via.placeholder.com/40",
        text: commentText,
        likes: 0,
        dislikes: 0,
        replies: []
      });
      setCommentText("");
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
      <Avatar src="https://via.placeholder.com/40" alt="NewUser" />
      <TextField
        size="small"
        variant="outlined"
        fullWidth
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
      />
      <Button variant="contained" onClick={handleCommentSubmit}>
        Comment
      </Button>
    </Box>
  );
};

const Comment = ({ comment, addReply }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);
  const [showReplies, setShowReplies] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      addReply(comment.id, {
        id: Date.now(),
        user: "NewUser",
        avatar: "https://via.placeholder.com/40",
        text: replyText,
        likes: 0,
        dislikes: 0,
        replies: []
      });
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
        <Avatar src={comment.avatar} alt={comment.user} />
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {comment.user}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {comment.text}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <IconButton size="small" onClick={() => setLikes(likes + 1)}>
              <ThumbUp fontSize="small" />
            </IconButton>
            <Typography variant="body2">{likes}</Typography>
            <IconButton size="small" onClick={() => setDislikes(dislikes + 1)}>
              <ThumbDown fontSize="small" />
            </IconButton>
            <Typography variant="body2">{dislikes}</Typography>
            <IconButton size="small" onClick={() => setShowReplyInput(!showReplyInput)}>
              <ChatBubbleOutline fontSize="small" />
            </IconButton>
          </Box>
          {showReplyInput && (
            <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
              />
              <Button variant="contained" size="small" onClick={handleReplySubmit}>
                Reply
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      {/* {comment.replies?.length > 0 && (
        <Button size="small" onClick={() => setShowReplies(!showReplies)} sx={{ ml: 7 }}>
          {showReplies ? "Hide replies" : `${comment.replies.length} replies`}
        </Button>
      )} */}
      {comment.replies?.length > 0 && (
        <Accordion sx={{ ml: 7, boxShadow: "none", background: "transparent" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: 18, marginRight: "4px" }} />}
          sx={{
            minHeight: "unset",
            padding: "0",
            "& .MuiAccordionSummary-content": {
              margin: "0 !important",
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <Typography variant="body2" color="primary">
            {showReplies ? "Hide replies" : `${comment.replies.length} replies`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0 16px" }}>
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} addReply={addReply} />
          ))}
        </AccordionDetails>
      </Accordion>
      )}
      {showReplies && (
        <Box sx={{ pl: 4, mt: 1 }}>
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} addReply={addReply} />
          ))}
        </Box>
      )}
    </Box>
  );
};

const CommentSection = () => {
  const [comments, setComments] = useState(commentsData);

  const addReply = (commentId, newReply) => {
    const updateComments = (comments) =>
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : { ...comment, replies: updateComments(comment.replies) }
      );
    setComments(updateComments(comments));
  };

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", mt: 0 }}>
      <Typography variant="h6">Comments</Typography>
      <CommentInput addComment={addComment} />
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </Box>
  );
};

export default CommentSection;

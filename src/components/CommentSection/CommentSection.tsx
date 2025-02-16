import React, { useState } from "react";
import { Avatar, Button, Card, CardContent, IconButton, TextField, Typography, Box, Grid2 } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ThumbUp, Reply } from "@mui/icons-material";

const commentsData = [
  {
    id: 1,
    name: "Noah Pierre",
    time: "58 minutes ago",
    comment: "I'm a bit unclear about how condensation forms in the water cycle. Can someone break it down?",
    likes: 25,
    replies: [
      {
        id: 2,
        name: "Skill Sprout",
        time: "8 minutes ago",
        comment:
          "Condensation happens when water vapor cools down and changes back into liquid droplets. It's the step before precipitation. The example with the glass of ice water in the video was a great visual!",
      },
    ],
  },
  {
    id: 3,
    name: "Mollie Hall",
    time: "5 hours ago",
    comment: "I really enjoyed today's lesson on the water cycle! The animations made the processes so much easier to grasp.",
    likes: 0,
    replies: [],
  },
  {
    id: 3,
    name: "Mollie Hall",
    time: "5 hours ago",
    comment: "I really enjoyed today's lesson on the water cycle! The animations made the processes so much easier to grasp.",
    likes: 0,
    replies: [],
  },
  {
    id: 3,
    name: "Mollie Hall",
    time: "5 hours ago",
    comment: "I really enjoyed today's lesson on the water cycle! The animations made the processes so much easier to grasp.",
    likes: 0,
    replies: [],
  },
  {
    id: 3,
    name: "Mollie Hall",
    time: "5 hours ago",
    comment: "I really enjoyed today's lesson on the water cycle! The animations made the processes so much easier to grasp.",
    likes: 0,
    replies: [],
  },
  {
    id: 3,
    name: "Mollie Hall",
    time: "5 hours ago",
    comment: "I really enjoyed today's lesson on the water cycle! The animations made the processes so much easier to grasp.",
    likes: 0,
    replies: [],
  },
  {
    id: 3,
    name: "Mollie Hall",
    time: "5 hours ago",
    comment: "I really enjoyed today's lesson on the water cycle! The animations made the processes so much easier to grasp.",
    likes: 0,
    replies: [],
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState(commentsData);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          name: "You",
          time: "Just now",
          comment: newComment,
          likes: 0,
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <Box sx={{ witdth: "100%", margin: "auto", padding: 0.5 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add a comment..."
        multiline
        rows={2}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddComment}>
        Submit
      </Button>
      <Box sx={{ marginTop: 2 }}>
        {comments.map((comment) => (
          <Card key={comment.id} sx={{ marginBottom: 0.1, padding: 0 }}>
            <CardContent sx={{ padding: 1 }}>
              <Grid2 container alignItems="center" spacing={2}>
                <Grid2>
                  <Avatar>{comment.name.charAt(0)}</Avatar>
                </Grid2>
                <Grid2>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {comment.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {comment.time}
                  </Typography>
                </Grid2>
              </Grid2>
              <Typography variant="body1" sx={{ marginTop: 1 }}>{comment.comment}</Typography>
              <Grid2 container alignItems="center" spacing={1} sx={{ marginTop: 1 }}>
                <Grid2>
                  <IconButton size="small" color="primary">
                    <ThumbUp fontSize="small" />
                  </IconButton>
                </Grid2>
                <Grid2>
                  <Typography variant="body2">{comment.likes}</Typography>
                </Grid2>
                <Grid2>
                  <IconButton size="small">
                    <Reply fontSize="small" />
                  </IconButton>
                </Grid2>
              </Grid2>
              {comment.replies.length > 0 && (
                <Box sx={{ marginLeft: 4, marginTop: 0.5 }}>
                  {comment.replies.map((reply) => (
                    <Card key={reply.id} sx={{ marginBottom: 1, padding: 1, backgroundColor: "#f5f5f5" }}>
                      <CardContent>
                        <Grid2 container alignItems="center" spacing={2}>
                          <Grid2>
                            <Avatar>{reply.name.charAt(0)}</Avatar>
                          </Grid2>
                          <Grid2>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {reply.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {reply.time}
                            </Typography>
                          </Grid2>
                        </Grid2>
                        <Typography variant="body2" sx={{ marginTop: 1 }}>{reply.comment}</Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CommentSection;

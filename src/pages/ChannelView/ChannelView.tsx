import React from "react";
import { AppBar, Toolbar, Typography, Button, Tabs, Tab, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { CheckCircle, Search } from "@mui/icons-material";

const videos = [
  { title: "There are many variations of passages of Lorem", thumbnail: "https://via.placeholder.com/300", duration: "3:50" },
  { title: "There are many variations of passages of Lorem", thumbnail: "https://via.placeholder.com/300", duration: "3:50" },
  { title: "There are many variations of passages of Lorem", thumbnail: "https://via.placeholder.com/300", duration: "3:50" },
  { title: "There are many variations of passages of Lorem", thumbnail: "https://via.placeholder.com/300", duration: "3:50" }
];

interface ChannelViewProps{
    channelid:string;
}

const ChannelView= ({channelid}:ChannelViewProps)=> {
  return (
    <div>
      {/* Channel Banner */}
      <div style={{ background: "#f4f4f4", padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="https://via.placeholder.com/100" alt="Channel" style={{ borderRadius: "50%", marginRight: "10px" }} />
          <Typography variant="h6">Osahan Channel <CheckCircle fontSize="small" color="primary" /></Typography>
        </div>
        <Tabs value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Videos" />
          <Tab label="Playlists" />
          <Tab label="Channels" />
          <Tab label="Discussion" />
          <Tab label="About" />
        </Tabs>
      </div>

      {/* Videos Section */}
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia component="img" height="140" image={video.thumbnail} alt={video.title} />
              <CardContent>
                <Typography variant="body1" gutterBottom>{video.title}</Typography>
                <Typography variant="caption" color="textSecondary">{video.duration}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChannelView;
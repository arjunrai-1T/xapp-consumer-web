import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  Grid,
  Container,
  Grid2,
} from "@mui/material";
import VideoPlayer from "./VideoPlayer.tsx";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  src: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Sprite Fight",
    thumbnail: "https://files.vidstack.io/sprite-fight/poster.webp",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  },
  {
    id: "2",
    title: "Sample Video 2",
    thumbnail: "https://files.vidstack.io/sprite-fight/poster.webp",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  },
  {
    id: "3",
    title: "Sample Video 3",
    thumbnail: "https://files.vidstack.io/sprite-fight/poster.webp",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  }, {
    id: "1",
    title: "Sprite Fight",
    thumbnail: "https://files.vidstack.io/sprite-fight/poster.webp",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  },
  {
    id: "2",
    title: "Sample Video 2",
    thumbnail: "https://files.vidstack.io/sprite-fight/poster.webp",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  },
  {
    id: "3",
    title: "Sample Video 3",
    thumbnail: "https://files.vidstack.io/sprite-fight/poster.webp",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  }, {
    id: "1",
    title: "Sprite Fight",
    thumbnail: "https://files.vidstack.io/sprite-fight/poster.webp",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  },
  {
    id: "2",
    title: "Sample Video 2",
    thumbnail: "https://files.vidstack.io/sprite-fight/poster.webp",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  },
  {
    id: "3",
    title: "Sample Video 3",
    thumbnail: "https://files.vidstack.io/sprite-fight/poster.webp",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  }
];

const VideoList: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(videos[0]);

  return (
    <Container sx={{ py: 4 }}>
      {/* Video Player Section */}
      {/* {selectedVideo && (
        <VideoPlayer key={selectedVideo.id} videoSrc={selectedVideo.src} poster={selectedVideo.thumbnail} />
      )} */}

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Video List
      </Typography>

      <List>
        <Grid2 container spacing={2}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <ListItem disablePadding>
                <Card sx={{ width: "100%" }}>
                  <CardActionArea onClick={() => setSelectedVideo(video)}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={video.thumbnail}
                      alt={video.title}
                    />
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {video.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ListItem>
            </Grid>
          ))}
        </Grid2>
      </List>
    </Container>
  );
};

export default VideoList;

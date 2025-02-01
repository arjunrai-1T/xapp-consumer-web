import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { Video } from '../../types/video';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './VideoCard.css';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handlePlayClick = () => {
    setIsPlayerOpen(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: '10px' }}>
        <CardMedia component="img" height="140" image={video.thumbnail} alt={video.title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {video.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {video.views} views • {video.timestamp}
          </Typography>
        </CardContent>
        <IconButton
          onClick={handlePlayClick}
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <PlayArrowIcon sx={{ fontSize: 50, color: 'white' }} />
        </IconButton>
      </Card>

      {isPlayerOpen && (
        <div className="video-player-modal">
          <div className="video-player-content">
            <MediaPlayer title={video.title} src={video.videoUrl}>
              <MediaProvider>
                <Poster src={video.thumbnail} alt={video.title} />
              </MediaProvider>
            </MediaPlayer>
            <button onClick={() => setIsPlayerOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
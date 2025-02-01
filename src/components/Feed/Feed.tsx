import React from 'react';
import { Box } from '@mui/material';
import VideoCard from '../VideoCard/VideoCard.tsx';
import { Video } from '../../types/video';

const Feed: React.FC = () => {
  const videos: Video[] = [
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://via.placeholder.com/345x140',
      views: '1.2M',
      timestamp: '2 days ago',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Add video URL
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://via.placeholder.com/345x140',
      views: '800K',
      timestamp: '5 days ago',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Add video URL
    },
    // Add more videos here
  ];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </Box>
  );
};

export default Feed;
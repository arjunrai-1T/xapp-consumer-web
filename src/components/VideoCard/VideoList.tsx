import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  Grid2,
  Box,
  Avatar,
} from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import { green } from "@mui/material/colors";

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

interface VideoListProps{
  drawerOpenStatus: boolean;
  isVerticalList: boolean;
}

const VideoList = ({ drawerOpenStatus,isVerticalList }:VideoListProps) => {
  return (
  
      <Grid2
        container
        spacing={isVerticalList ? (drawerOpenStatus ? 0.2 :  0.1) : (drawerOpenStatus ? 4.5:2.5) }
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        {/* Loop through videos */}
        {videos.map((video) => (
          <Grid2
            key={video.id}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              mb: 0.5, // Add margin bottom for spacing between cards
            }}
          >
            <ListItem disablePadding sx={{ width: '100%' }}>
              <Card sx={{ width: "100%", backgroundColor: 'transparent', boxShadow: 'none'}}>

                <CardActionArea sx={{ width: "100%",display: "flex",flexDirection: isVerticalList ? "row" : "column",justifyContent: "space-between",gap: isVerticalList ? 0.4 : 0, }}>

                  <CardMedia
                    component="img"
                    sx={{
                      width: drawerOpenStatus ? (isVerticalList ? 168 : 400) : (isVerticalList ? 168 : 339), // Change width depending on the drawer state
                      height: drawerOpenStatus ? (isVerticalList ? 94 : 230) : (isVerticalList ? 94 : 200) , // Change height depending on the drawer state
                      transition: 'all 0.3s ease', // Smooth transition when resizing
                    }}
                    image={video.thumbnail}
                    alt={video.title}
                  />
                  
                  <CardContent sx={{ padding: 0.8 ,width: "100%"}}>
                    <Grid2 container alignItems="flex-start" spacing={1.5} justifyContent="flex-start" direction="row" flexWrap={"nowrap"}>     
                      {!isVerticalList && (
                        <Grid2 sx={{ flexShrink: 0, marginTop: 0.5 }}>
                          <Avatar sx={{ bgcolor: green[500], width: 30, height: 30 }} variant="rounded">
                            <AppleIcon />
                          </Avatar>
                        </Grid2>
                      )}
                      <Grid2 sx={{ flexGrow: 0 }} container direction="column" alignItems="flex-start" spacing={0} justifyContent="flex-start" gap={0}>
                          <Typography 
                              variant="body1" 
                              fontWeight={"bold"}
                              fontSize={14}
                              flexWrap={"wrap"}
                            >
                              {"Mujib Bahini’s Weapon Training Begins |"}
                            </Typography>
                            <Typography 
                              variant="body1" 
                              fontWeight={"bold"}
                              fontSize={14}
                              flexWrap={"wrap"}
                            >
                              {"Bangladesh on the Brink of Civil War"}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                              {"Connecting Dots by Unacademy"}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {"9.2K"} views • {"6 hours ago"}
                            </Typography>
                      </Grid2>
                    </Grid2>
                  </CardContent>

                </CardActionArea>

              </Card>
            </ListItem>
          </Grid2>
        ))}
      </Grid2>
  );
};

export default VideoList;
//height: drawerOpenStatus ? 230 : 200,
//<Card sx={{ width: drawerOpenStatus ? (isVerticalList ? 168 : 400) : (isVerticalList ? 402 : 339) , backgroundColor: 'transparent', boxShadow: 'none'}}>
//drawerOpenStatus? 4.5:2.5




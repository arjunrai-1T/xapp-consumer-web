import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import AppleIcon from "@mui/icons-material/Apple";
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
  },
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
  },
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
  },
];
const text =
  "Mujib Bahini’s Weapon Training Begins | Bangladesh on the Brink of Civil War";

interface VideoListProps {
  drawerOpenStatus: boolean;
  isVerticalList: boolean;
}

const VideoList = ({ drawerOpenStatus, isVerticalList }: VideoListProps) => {
 return (
   <Grid2
     container
     spacing={
       isVerticalList
         ? drawerOpenStatus
           ? 0.2
           : 0.1
         : drawerOpenStatus
           ? 4.5
           : 2.5
     }
     sx={{
       display: "grid",
       gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", // Dynamically adjust columns
       gap: "16px", // Maintain spacing between items
       width: "100%",
     }}
   >
     {videos.map((video) => (
       <Grid2 key={video.id} sx={{ width: "100%" }}>
         <ListItem disablePadding sx={{ width: "100%" }}>
           <Card
             sx={{
               width: "100%",
               backgroundColor: "transparent",
               boxShadow: "none",
               display: "flex",
               flexDirection: "column",
             }}
           >
             <CardActionArea
               sx={{ display: "flex", flexDirection: "column", width: "100%" }}
             >
               <Box sx={{ width: "100%" }}>
                 <CardMedia
                   component="img"
                   sx={{
                     width: "100%",
                     height: drawerOpenStatus ? 200 : 210,
                    //  height:  200,
                     transition: "all 0.3s ease",
                     objectFit: "fill",
                   }}
                   image={video.thumbnail}
                   alt={video.title}
                 />
               </Box>

               <CardContent sx={{ padding: 0.8, width: "100%", minHeight: 70 }}>
                 <Grid2
                   container
                   alignItems="flex-start"
                   spacing={1.5}
                   justifyContent="flex-start"
                   direction="row"
                   flexWrap="nowrap"
                 >
                   {!isVerticalList && (
                     <Grid2 sx={{ flexShrink: 0, marginTop: 0.5 }}>
                       <Avatar
                         sx={{ bgcolor: green[500], width: 30, height: 30 }}
                         variant="rounded"
                       >
                         <AppleIcon />
                       </Avatar>
                     </Grid2>
                   )}
                   <Grid2
                     sx={{ flexGrow: 1 }}
                     container
                     direction="column"
                     gap={0}
                   >
                     {/* Title - Max 100 Characters */}
                     <Typography
                       variant="body1"
                       fontWeight="bold"
                       fontSize={14}
                       sx={{
                         display: "-webkit-box",
                         WebkitBoxOrient: "vertical",
                         WebkitLineClamp: 2, // Ensures text wraps up to 2 lines before truncating
                         overflow: "hidden",
                         textOverflow: "ellipsis",
                         maxWidth: "100%",
                       }}
                     >
                       {text.length > 70 ? `${text.substring(0, 70)}...` : text}
                     </Typography>

                     {/* Subtitle */}
                     <Typography variant="body2" color="text.secondary" noWrap>
                       {"Connecting Dots by Unacademy"}
                     </Typography>

                     {/* Views & Time */}
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


}
export default VideoList;
//height: drawerOpenStatus ? 230 : 200,
//<Card sx={{ width: drawerOpenStatus ? (isVerticalList ? 168 : 400) : (isVerticalList ? 402 : 339) , backgroundColor: 'transparent', boxShadow: 'none'}}>
//drawerOpenStatus? 4.5:2.5

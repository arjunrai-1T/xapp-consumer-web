import React, { useState } from "react";
import { 
  Box, Typography, Tabs, Tab, 
  Card, CardMedia, CardContent, IconButton, TextField, Button, Menu, MenuItem,
  Avatar
} from "@mui/material";
import { CheckCircle, Search, ExpandMore } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';
import VideoList from "../../components/VideoCard/VideoList.tsx";
import SocialLinks from "../../components/SocialLinks/SocialLinks.tsx";
import AppleIcon from "@mui/icons-material/Apple";
import { green } from "@mui/material/colors";
import coverImage from "../../assets/images/cover-1.jpg";
import ProfileImage from "../../assets/images/profile-image-1.jpg";

const videos = [
  { title: "There are many variations of passages of Lorem", thumbnail: "https://placehold.co/200x100", duration: "3:50" },
  { title: "There are many variations of passages of Lorem", thumbnail: "https://placehold.co/200x100", duration: "3:50" },
  { title: "There are many variations of passages of Lorem", thumbnail: "https://placehold.co/200x100", duration: "3:50" },
  { title: "There are many variations of passages of Lorem", thumbnail: "https://placehold.co/200x100", duration: "3:50" }
];

interface ChannelViewProps {
  channelId: string;
  subscribers: string;
  videos: string;
}

const ChannelView: React.FC<ChannelViewProps> = ({ channelId ,subscribers,videos}) => {
  const [tabValue, setTabValue] = useState(0);
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <Box sx={{ display: "flex",flexDirection: 'column',gap: 2,justifyContent: 'flex-start',alignContent: 'center'}}>
          {/* Channel Banner */}
          <Box 
            sx={{ 
              height: 300, 
              backgroundImage: `url(${coverImage})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center",
              position: "relative",
              borderRadius: 2,
              marginBottom: 0
            }}
          >
          </Box>
          
          {/* Profile & Channel Info */}
          <Box sx={{ paddingLeft: 2,paddingRight: 2}}>
             <Box sx={{ display: "flex", alignItems: "flex-end", left: 10,justifyContent: 'space-between',width: '100%' }}>
              <Box sx={{ display: "flex", flexDirection: "row",alignItems: "flex-start",justifyContent: 'space-between'}}>
                <Avatar src={ProfileImage}  sx={{ bgcolor: green[500], width: 100, height: 100 }} variant="rounded"></Avatar>
                <Box sx={{ display: "flex", flexDirection: "column",alignItems: "flex-start",justifyContent: 'space-between'}}>
                  <Box sx={{ display: "flex", direction: "row",alignItems: "center",justifyContent: 'space-between'}}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", ml: 2, display: "flex", alignItems: "center",color: 'black' }}>
                      {channelId}
                    </Typography>
                    <CheckCircle fontSize="small" color="primary" sx={{ ml: 1 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "normal", ml: 2, display: "flex", alignItems: "center",color: 'black' }}>
                      {subscribers} subscribers
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "normal", ml: 2, display: "flex", alignItems: "center",color: 'black' }}>
                      {videos} videos
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row",alignItems: "center",justifyContent: 'space-between'}}>
                  <SocialLinks />
                  <Box>
                    <Button variant="contained" color="error" sx={{ ml: 2, px: 3 }}> Subscribe</Button>
                  </Box>
              </Box>
            </Box>
          </Box>

          {/* Tabs Section */}
          <Box sx={{backgroundColor: '#f9f9f9' }}>
              <Tabs 
                value={tabValue} 
                onChange={(e, newValue) => setTabValue(newValue)} 
                indicatorColor="primary" 
                textColor="primary"
                sx={{ mt: 4, pl: 2 }}
              >
                <Tab label="Videos" sx={{ fontWeight: "bold" }} />
                <Tab label="Shorts"/>
                <Tab label="Live" />
                <Tab label="Discussion" />
                <Tab label="Playlist" />
                <Tab label="About" />
              </Tabs>

              {/* Search & Subscribe Section */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1 }}>

                {/* Sort Button */}
                <Button 
                  endIcon={<ExpandMore />} 
                  onClick={(e) => setSortAnchorEl(e.currentTarget)}
                >
                  Sort by
                </Button>
                <Menu 
                  anchorEl={sortAnchorEl} 
                  open={Boolean(sortAnchorEl)} 
                  onClose={() => setSortAnchorEl(null)}
                >
                  <MenuItem onClick={() => setSortAnchorEl(null)}>Newest</MenuItem>
                  <MenuItem onClick={() => setSortAnchorEl(null)}>Oldest</MenuItem>
                  <MenuItem onClick={() => setSortAnchorEl(null)}>Most Viewed</MenuItem>
                </Menu>
              </Box>

              <Box sx={{ p: 3}}>
                {tabValue === 0 && (
                    <>
                      <VideoList isVerticalList={false} />
                    </>
                )}
                
                {tabValue === 1 && (
                  <Typography variant="h6" sx={{ pl: 2 }}>Shorts</Typography>
                )}
                
                {tabValue === 2 && (
                  <Typography variant="h6" sx={{ pl: 2 }}>Live</Typography>
                )}
                
                {tabValue === 3 && (
                  <Typography variant="h6" sx={{ pl: 2 }}>Discussion</Typography>
                )}
                
                {tabValue === 4 && (
                  <Typography variant="h6" sx={{ pl: 2 }}>About</Typography>
                )}
              </Box>
          </Box>

    </Box>
  );
};

export default ChannelView;
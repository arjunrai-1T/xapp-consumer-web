import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

import { FlikTapeLogo, SitemarkIcon } from './CustomIcons.tsx';

import flikTapeImage from "../../assets/images/FlikTape.webp";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Adaptable performance',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  // {
  //   icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
  //   title: 'Built to last',
  //   description:
  //     'Experience unmatched durability that goes above and beyond with lasting investment.',
  // },
  // {
  //   icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
  //   title: 'Great user experience',
  //   description:
  //     'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  // },
  // {
  //   icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
  //   title: 'Innovative functionality',
  //   description:
  //     'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  // },
];

const FlikTapeIcon = ({ width = '100%', height = '80vh' }) => {
  return (
    <Box
      component="img"
      src={flikTapeImage} // Ensure the image is inside the public folder
      alt="FlikTape"
      sx={{
        width: width,
        height: height,
        objectFit: "contain",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    />
  );
};

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'flex-start', gap: 4, maxWidth: 1000,p: 2 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {/* <SitemarkIcon /> */}
        <FlikTapeIcon />
      </Box>
      {/* {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <Box>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </Box>
        </Stack>
      ))} */}
    </Stack>
  );
}

import React from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';

import { Card, CardContent, Typography, Box } from '@mui/material';

export interface TextTrack {
  src: string;
  label?: string;
  language?: string;
  kind: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  type: "vtt" | "srt";
  default?: boolean;
}

export interface PlayerConfig {
  src: string;
  viewType: "video" | "audio";
  streamType: "on-demand" | "live";
  logLevel: "warn" | "error" | "info" | "debug";
  crossOrigin: boolean;
  playsInline: boolean;
  title: string;
  poster: string;
  textTracks?: TextTrack[];
}

export interface LayoutConfig {
  type: "default";
  thumbnails?: string;
}

export interface VideoPlayerConfig {
  $schema: string;
  player: PlayerConfig;
  layout: LayoutConfig;
  hls?: object;
  dash?: object;
  events?: string[];
}

interface VideoPlayerProps {
  videoSrc: string;
  poster: string;
}



const VideoPlayer = (props:VideoPlayerProps) => {
  
  const videoConfig: VideoPlayerConfig = {
    "$schema": "https://vidstack.io/player/schema",
    player: {
      src: "https://files.vidstack.io/sprite-fight/dash/stream.mpd",
      viewType: "video",
      streamType: "on-demand",
      logLevel: "warn",
      crossOrigin: true,
      playsInline: true,
      title: "Sprite Fight",
      poster: "https://files.vidstack.io/sprite-fight/poster.webp",
      textTracks: [
        {
          src: "https://files.vidstack.io/sprite-fight/subs/english.vtt",
          label: "English",
          language: "en-US",
          kind: "subtitles",
          type: "vtt",
          default: true,
        },
        {
          src: "https://files.vidstack.io/sprite-fight/subs/spanish.vtt",
          label: "Spanish",
          language: "es-ES",
          kind: "subtitles",
          type: "vtt",
        },
        {
          src: "https://files.vidstack.io/sprite-fight/chapters.vtt",
          language: "en-US",
          kind: "chapters",
          type: "vtt",
          default: true,
        },
      ],
    },
    layout: {
      type: "default",
      thumbnails: "https://files.vidstack.io/sprite-fight/thumbnails.vtt",
    },
    hls: {},
    dash: {},
    events: ["can-play"],
  };
  
  return (
    <Card sx={{ maxWidth: 800, mx: 'auto', boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
      <MediaPlayer
        src="https://files.vidstack.io/sprite-fight/dash/stream.mpd"
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin="anonymous"
        playsInline
        poster="https://files.vidstack.io/sprite-fight/poster.webp"
        style={{ width: '100%' }} // Ensures full width inside Card
      >
        <MediaProvider>
          <Poster className="vds-poster" />
          {videoConfig.player?.textTracks.map(track => (
            <Track {...track} key={track.src} />
          ))}
        </MediaProvider>
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>

      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Sprite Fight
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A high-energy animated battle scene.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;

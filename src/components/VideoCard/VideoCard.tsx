import React from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';

const VideoPlayer: React.FC = () => {
  // Define text tracks (optional subtitles/captions)
  const textTracks = [
    {
      src: 'https://files.vidstack.io/sprite-fight/subtitles-en.vtt',
      kind: 'subtitles',
      srcLang: 'en',
      label: 'English',
      default: true,
    },
  ];

  return (
    <MediaPlayer
      src="https://files.vidstack.io/sprite-fight/720p.mp4"
      viewType="video"
      streamType="on-demand"
      logLevel="warn"
      crossOrigin="anonymous"
      playsInline
      title="Sprite Fight"
      poster="https://files.vidstack.io/sprite-fight/poster.webp"
    >
      <MediaProvider>
        <Poster className="vds-poster" />
        {textTracks.map(track => (
          <Track {...track} key={track.src} />
        ))}
      </MediaProvider>

      <DefaultVideoLayout
        thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
};

export default VideoPlayer;


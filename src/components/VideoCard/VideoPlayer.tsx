import React, { useRef, useState } from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { Controls, MediaPlayer, MediaProvider, Poster, Track, MediaPauseEvent, MediaPlayerInstance, useMediaState, useMediaPlayer, PlayerSrc } from "@vidstack/react";
import { DefaultAudioLayout, DefaultLayoutIcons, DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useMediaRemote } from '@vidstack/react';

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
  isFullWidth: boolean;
}

const VideoPlayer = (props:VideoPlayerProps) => {
  
  // const vidsrc: PlayerSrc=[
  //   { src: 'https://files.vidstack.io/sprite-fight/dash/stream.mpd', type: 'video/mpd' },
  //   { src: 'https://files.vidstack.io/agent-327/720p.mp4', type: 'video/mp4' }
  // ];
  const [src, setSrc] = useState(0);

  function prevVideo() {
    setSrc((n) => Math.max(0, n - 1));
  }

  function nextVideo() {
    setSrc((n) => Math.min(videosrc.length - 1, n + 1));
  }

  const vidsrc=[
    'https://files.vidstack.io/sprite-fight/dash/stream.mpd',
    'https://files.vidstack.io/agent-327/720p.mp4'
  ];
  const [videosrc, setVideosrc] = React.useState(vidsrc); 
  
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

  const None = () => null;

  const customIcons: Partial<DefaultLayoutIcons> = {
    AirPlayButton: {
      Default: None,
      Connecting: None,
      Connected: None,
    },
    GoogleCastButton: {
      Default: None,
      Connecting: None,
      Connected: None,
    },
    PlayButton: {
      Play: None,
      Pause: None,
      Replay: None,
    },
    MuteButton: {
      Mute: None,
      VolumeLow: None,
      VolumeHigh: None,
    },
    CaptionButton: {
      On: None,
      Off: None,
    },
    PIPButton: {
      Enter: None,
      Exit: None,
    },
    FullscreenButton: {
      Enter: None,
      Exit: None,
    },
    SeekButton: {
      Backward: None,
      Forward: None,
    },
    DownloadButton: {
      Default: None,
    },
    Menu: {
      Accessibility: None,
      ArrowLeft: None,
      ArrowRight: None,
      Audio: None,
      AudioBoostUp: None,
      AudioBoostDown: None,
      Chapters: None,
      Captions: None,
      Playback: None,
      Settings: None,
      SpeedUp: None,
      SpeedDown: None,
      QualityUp: None,
      QualityDown: None,
      FontSizeUp: None,
      FontSizeDown: None,
      OpacityUp: None,
      OpacityDown: None,
      RadioCheck: None,
    },
    KeyboardDisplay: {
      Play: None,
      Pause: None,
      Mute: None,
      VolumeUp: None,
      VolumeDown: None,
      EnterFullscreen: None,
      ExitFullscreen: None,
      EnterPiP: None,
      ExitPiP: None,
      CaptionsOn: None,
      CaptionsOff: None,
      SeekForward: None,
      SeekBackward: None,
    },
  };

  function onPlay(nativeEvent: MediaPauseEvent) {
      console.log("onPlay")
  }

  function onPause(nativeEvent: MediaPauseEvent) {
    console.log("onPause")
  }

  const playerRef = useRef<MediaPlayerInstance>(null); 
  const isPaused = useMediaState('paused', playerRef);
  const [elapsedTime, setElapsedTime] = useState(0); 

  const handleSourceChange = () => {
    console.log("handleSourceChange")
  };

  React.useEffect(() => {

    if (playerRef?.current) {
      playerRef.current.addEventListener('loadstart', handleSourceChange);
    }

    // Function to log current time
    const logPlaytime = () => {
      if (playerRef?.current) {
        console.log(playerRef?.current?.currentTime); // Print current playtime
        if (playerRef?.current?.currentTime >= 5) {
          console.log('Video has reached 60 seconds or more');
          //setVideosrc(("https://files.vidstack.io/agent-327/720p.mp4");
        }
      }
    };
    // Set an interval to log playtime every second
    const intervalId = setInterval(logPlaytime, 1000);

    const handleCanPlay = () => {
      console.log("handleCanPlay")
      // playerRef.current?.play();
    };

    playerRef?.current?.addEventListener('can-play', handleCanPlay);
    
    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [playerRef?.current]);

  React.useEffect(() =>{
    console.log(isPaused)
    //playerRef.current?.play();
  },[isPaused]);

  // Working
  // React.useEffect(() => {
  //   // Access snapshot of player state.
  //   const { paused } = playerRef.current!.state;

  //   // Subscribe for updates without triggering renders.
  //   return playerRef.current!.subscribe(({ currentTime }) => {
  //       console.log(currentTime);
  //       if (playerRef?.current?.currentTime >= 5) {
  //         console.log('Video has reached 60 seconds or more');
  //         setVideosrc("https://cdn.pixabay.com/video/2019/10/18/28052-367411298_large.mp4");
  //       }
  //   });
  // }, []);


  return (
    <Card sx={{ width: props.isFullWidth? '62%': '100%',mx: 'auto', boxShadow: 0, borderRadius: 0, overflow: 'hidden',backgroundColor: 'transparent'}}>
      <MediaPlayer
        ref={playerRef}
        src={videosrc}
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin="anonymous"
        playsInline
        poster="https://files.vidstack.io/sprite-fight/poster.webp"
        style={{ width:'100%',height: '100%' }} 
        onPlay={onPlay}
        onPause={onPause}
        aspectRatio="16/9"
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
    </Card>
  );
};

export default VideoPlayer;
//defaultLayoutIcons
//https://cdn.pixabay.com/video/2019/10/18/28052-367411298_large.mp4
//https://files.vidstack.io/sprite-fight/dash/stream.mpd
//https://videos.pexels.com/video-files/5192719/5192719-hd_1280_720_24fps.mp4
//https://files.vidstack.io/agent-327/720p.mp4
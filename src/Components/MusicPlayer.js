import React, { useState, useRef, useEffect } from "react";
import songData from "./Data";
import "./MusicPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";
import Library from "./Library";
import { playAudio } from "./util";

function MusicPlayer() {
  //State
  const [songs, setSongs] = useState(songData);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //UseRef
  const audioRef = useRef(null);

  // useEffect
  useEffect(() => {
    const newSong = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSong);
  }, [currentSong]);

  //Event Handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    console.log(duration);
    setSongTime({ ...songTime, duration: duration, currentTime: current });
  };
  const getTime = (Time) => {
    return (
      Math.floor(Time / 60) + ":" + ("0" + Math.floor(Time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }

    playAudio(isPlaying, audioRef);
  };

  return (
    <div className="music">
      <div className="songinfo">
        <img className="album" src={currentSong.cover} alt={currentSong.name} />
        <div className="info">
          <h1>{currentSong.name}</h1>
          <h4>{currentSong.artist}</h4>
        </div>
        <div className="library-holder">
          <FontAwesomeIcon
            onClick={() => setLibraryStatus(!libraryStatus)}
            className="library-icon"
            size="2x"
            icon={faCompactDisc}
          />
        </div>
      </div>
      <div className="time-control">
        <p>{getTime(songTime.currentTime)}</p>
        <input
          min={0}
          max={songTime.duration || 0}
          value={songTime.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songTime.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
    </div>
  );
}

export default MusicPlayer;

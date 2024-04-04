import { useEffect, useRef, useState } from "react";
import { usePlayerStore } from "@/store/playerStore";

export const Play = () => (
  <svg data-encore-id="icon" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export const Pause = () => (
  <svg data-encore-id="icon" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

const CurrentSong = ({ image, title, artists }) => (
  <div className="flex items-center gap-5 relative overflow-hidden">
    <picture className="w-16 h-16 bg-zinc-800 roun shadow-lg overflow-hidden">
      <img src={image} alt={title} />
    </picture>
    <div className="flex flex-col">
      <h3 className="font-semibold text-sm black">
        {title}
      </h3>
      <span className="text-xs opacity-80">
        {artists?.join(', ')}
      </span>
    </div>
  </div>
)

export function Player () {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state);
  const audioRef = useRef();

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.play();
    }
  }, [currentMusic])

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="flex flex-row justify-between items-center w-full px-4 z-50">
      <CurrentSong {...currentMusic.song} />
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button className="bg-white rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      </div>
      <div>Volumen</div>

      <audio ref={audioRef} />
    </div>
  )
}
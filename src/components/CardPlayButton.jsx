import { usePlayerStore } from "@/store/playerStore";
import { Pause, Play } from "./Player";

export function CardPlayButton ({id}) {
  const { 
    currentMusic, 
    isPlaying, 
    setIsPlaying, 
    setCurrentMusic 
  } = usePlayerStore(state => state);
  
  const isPlayingPlaylist = isPlaying && currentMusic.playlist.id === id;

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({
          songs,
          playlist,
          song: songs[0]
        });
      })
  }


  return (
    <button className="bg-green-500 rounded-full p-4" onClick={handleClick}>
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}
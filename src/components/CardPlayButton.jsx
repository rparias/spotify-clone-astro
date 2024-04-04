import { usePlayerStore } from "@/store/playerStore";
import { Pause, Play } from "./Player";

export function CardPlayButton ({id}) {
  const { 
    currentMusic, 
    isPlaying, 
    setIsPlaying, 
    setCurrentMusic 
  } = usePlayerStore(state => state);

  const handleClick = () => {
    setCurrentMusic({
      playlist: {
        id
      }
    });
    setIsPlaying(!isPlaying);
  }

  const isPlayingPlaylist = isPlaying && currentMusic.playlist.id === id;

  return (
    <button className="bg-green-500 rounded-full p-4" onClick={handleClick}>
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}
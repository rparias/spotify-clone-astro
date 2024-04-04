import { usePlayerStore } from "@/store/playerStore";
import { Pause, Play } from "./Player";

export function CardPlayButton ({id}) {
  const { isPlaying, setIsPlaying } = usePlayerStore(state => state);

  return (
    <button className="bg-green-500 rounded-full p-4" onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? <Pause /> : <Play />}
    </button>
  )
}
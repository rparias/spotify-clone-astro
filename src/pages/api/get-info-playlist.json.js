import { allPlaylists, songs as allSongs } from "@/lib/data";

export async function GET({ params, request }) {
  // get the id from the url searh params
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('id');

  // get the playlist from the id
  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  const songs = allSongs.filter((song) => song.albumId === playlist.albumId);

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" }
  });
}
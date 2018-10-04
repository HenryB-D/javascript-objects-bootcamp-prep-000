var playlist = {"My Bloody Valentine": "song1",
  "Slowdive": "song2",
  "Phil Ochs": "song3"};
  
function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}
updatePlaylist(playlist, "artist4", "song4");  

function removeveFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

removeFromPlaylist(playlist, "artist2");
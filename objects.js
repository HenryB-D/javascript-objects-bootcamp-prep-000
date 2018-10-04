var playlist = {"My Bloody Valentine": "song1",
  "Slowdive": "song2",
  "Phil Ochs": "song3"};
  
function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}
updatePlaylist(playlist, "artist4", "song4");  

function removeFromPlaylist(playlist, artistName) {
  return object 
}
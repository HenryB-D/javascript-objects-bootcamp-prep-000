var playlist = {"My Bloody Valentine" "song1",
  "Slowdive": "song2",
  "Phil ochs": "song3"};
  
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, 'Slowdive', { ['My Bloody Valentine']: 'Phil Ochs'});
}

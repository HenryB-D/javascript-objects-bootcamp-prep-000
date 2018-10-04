var playlist = {artist1: "song1",
  artist2: "song2",
  artist3: "song3"};
  
function updatePlaylist(Slowdive, My Bloody Valentine, Phil Ochs) {
  return Object.assign({}, 'Slowdive', { ['My Bloody Valentine']: 'Phil Ochs'});
}
updatePlaylist(playlist, "artist4", "song4");

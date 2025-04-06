//Creating an array  with an object inside inside it.  
const playlist = [
	{ title: "Winning", artist: "Mr P", duration: "5:23", genre: "Afrosounds" },
	{ title: "Chizoba", artist: "Rudeboy", duration: "4:01", genre: "Pop" },
	{ title: "Padi", artist: "Kiss Daniel", duration: "2:44", genre: "Rock" },
	{ title: "No Do", artist: "Kiss Daniel", duration: "2:31", genre: "Afrosounds" },
	{ title: "Reality", artist: "Rudeboy", duration: "5:13", genre: "Pop" },
]
console.table(playlist)

playlist.forEach(play => {
    const displayList = `Now playing: ${play.title} by ${play.artist} (${play.duration}) - Genre: ${play.genre}`;
    console.log(displayList);
  });

  
// Task 1: Filter for "Rock" songs into rockSongs array
// let rockSongs = playlist.filter(song => song.genre === "Rock");
// console.table(rockSongs);

let rockSongs = playlist.filter(showSongs);
function showSongs(playlist) {
    if (playlist.genre === "Rock")
    return playlist;
};
console.table(rockSongs);


let longSongs = playlist.filter(displayList);
function displayList(playlist) {
    if (playlist.duration >="5:0") {
        return playlist;
    } 
};
console.table(longSongs);


let upperCasePlaylist = playlist.map(function (play) {
    return {
        title: play.title.toUpperCase(),
        artist: play.artist.toUpperCase(),
        duration: play.duration,
        genre: play.genre,
        playCount: 0
    }
})
console.table(upperCasePlaylist);



function formatDuration(duration) {
    const [minutes, seconds] = duration.split(":");
    return `${minutes} minutes and ${seconds} seconds`;
}

playlist.forEach(song => {
    const formattedDuration = formatDuration(song.duration);
    console.log(`"${song.title}" duration: ${formattedDuration}`);
});


function findSong(searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = playlist.filter(song => 
        song.title.toLowerCase().includes(lowerCaseSearchTerm) || 
        song.artist.toLowerCase().includes(lowerCaseSearchTerm)
    );
    console.table(results);
}

findSong("kiss");



const sortedByTitle = [...playlist].sort((a, b) => a.title.localeCompare(b.title));
console.table(sortedByTitle);


function durationToSeconds(duration) {
    const [minutes, seconds] = duration.split(":").map(Number);
    return minutes * 60 + seconds;
}
const sortedByDuration = [...playlist].sort((a, b) => durationToSeconds(a.duration) - durationToSeconds(b.duration));
console.table(sortedByDuration);


function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * playlist.length);
    const randomSong = playlist[randomIndex];
    console.log(`Now playing a random song: "${randomSong.title}" by ${randomSong.artist}`);
}
playRandomSong();

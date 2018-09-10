//Create an array of movie objects. Each movie should have a title,
//rating, and hasWatched properties. Iterate through the array and
//print out something that looks like:
//You have watched "In Bruges" - 5 stars
//You have not seen "Frozen" - 4.5 stars

var movies = [
  {
    title: "\"Batman Begins\"",
    rating: "5 stars",
    hasWatched: true
  },
  {
    title: "\"Borat\"",
    rating: "4 stars",
    hasWatched: true
  },
  {
    title: "\"My Little Pony The Movie\"",
    rating: "1 star",
    hasWatched: false
  },
  {
    title: "\"Bruno\"",
    rating: "4.5 stars",
    hasWatched: true
  },
  {
    title: "\"Jay and Silent Bob\"",
    rating: "3 stars",
    hasWatched: false
  }
];

movies.forEach(function(movie) {
  if (movie.hasWatched) {
    console.log("You did see " + movie.title + " and it was ranked " + movie.rating);
  } else {
    console.log("It seems that you did not see " + movie.title + " - maybe because it was only ranked " + movie.rating + "?");
  }
});


//
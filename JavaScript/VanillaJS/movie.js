var movieObjects = [ {
    'title': "Hot Rod",
    'rating': 4,
    'hasWatched': true
}, {
    'title': "Inception",
    'rating': 5,
    'hasWatched': true
}, {
    'title': "Avengers",
    'rating': 4.5,
    'hasWatched': false
}, {
    'title': "Blade Runner 2049",
    'rating': 3.5,
    'hasWatched': true
}]

for (i = 0; i < movieObjects.length; i++) {
    var watched = "";
    if (movieObjects[i]["hasWatched"] === false) {
        watched = "not ";
    }
    console.log("You have " + watched + "seen '" + movieObjects[i]["title"] + "' - " + movieObjects[i]['rating'] + " stars")
}
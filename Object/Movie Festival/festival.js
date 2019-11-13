"use strict"

function Genre(name) {
    this.name = name;
    this.getDataOfGenre = function () {
        return this.name[0] + this.name[name.length - 1]
    }
}


function Movie(titleOfMovie, genreOfMovie, lengthOfMovie) {
    this.title = titleOfMovie;
    this.genre = genreOfMovie;
    this.length = lengthOfMovie;
    this.getData = function () {
        return this.title + ', ' + this.length + ', ' + this.genre.getDataOfGenre()
    }

};

var drama = new Genre('drama')
var titanik = new Movie('Titanik', drama, 210)
var supermen = new Movie('Supermen', drama, 220)

console.log(titanik.getData());
console.log(supermen.getData());


function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numOfMovies = 0
    this.lengthOfAllMovies = 0

    this.getProgramLength = function () {
        var totalLength = 0

        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i]
            totalLength += movie.length
        }

        return totalLength
    }

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie)
        this.numOfMovies += 1
    }

}

var novogodisnjiProgram = new Program("01-01-2020");

novogodisnjiProgram.addMovie(supermen)
novogodisnjiProgram.addMovie(titanik)


console.log(novogodisnjiProgram.date, novogodisnjiProgram.getProgramLength(), novogodisnjiProgram.numOfMovies + ' ' + 'movies');












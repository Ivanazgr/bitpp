"use strict"

function Genre(name) {
    this.name = name.toUpperCase();
    this.getDataOfGenre = function() {
        return 'Genre' + ': ' + this.name[0] + this.name[name.length - 1]
    }
}


function Movie(titleOfMovie, genreOfMovie, lengthOfMovie) {
    this.title = titleOfMovie;
    this.genre = genreOfMovie;
    this.length = lengthOfMovie;
    this.getData = function() {
        return this.title + ', ' + this.length + ', ' + this.genre.getDataOfGenre()
    }

};

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numOfMovies = 0
    this.lengthOfAllMovies = 0

    this.getProgramLength = function() {
        var totalLength = 0
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i]
            totalLength += movie.length
        }
        return totalLength
    }

    this.addMovie = function(movie) {
        this.listOfMovies.push(movie)
        this.numOfMovies += 1
    }

    this.getData = function() {
        var output = this.date + ', ' + ' Program duration:' + this.getProgramLength() + 'min\n'
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i]
            output += movie.getData() + '\n'
        }
        return output;
    }

}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfAllMovies = 0;
    this.addProgram = function(program) {
        this.listOfPrograms.push(program);
        this.numberOfAllMovies += 1;
    }
    this.getData = function() {
        var output1 = this.name + ' ' + 'has ' + this.numberOfAllMovies + ' ' + 'movie titles' + '\n';
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            var program = this.listOfPrograms[i];
            output1 += '\t' + program.getData() + '\n';

        }
        return output1;
    }
}



/*ADD MOVIE AND GENRE FOR IT*/

var drama = new Genre('drama');

var comedy = new Genre('comedy');
var titanik = new Movie('Titanik', drama, 210)
var supermen = new Movie('Supermen', drama, 220)
var RickAndMorthy = new Movie('RickAndMorthy', comedy, 50)

/*ADD PROGRAM*/
var novogodisnjiProgram = new Program("01-01-2020");
var novogodisnjiProgram2 = new Program("01-05-2020");




/*PUSH MOVIE INTO PROGRAM*/

novogodisnjiProgram.addMovie(supermen);
novogodisnjiProgram.addMovie(RickAndMorthy);
novogodisnjiProgram2.addMovie(titanik);
novogodisnjiProgram2.addMovie(supermen);



/*ADD PROGRAM INTO FESTIVAL*/

var NewYearFest = new Festival('NewYearFest');
NewYearFest.addProgram(novogodisnjiProgram);
NewYearFest.addProgram(novogodisnjiProgram2);


console.log(NewYearFest.getData());
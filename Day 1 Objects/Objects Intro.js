/*Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
 */

var coffee = {
    name: "Ness",
    strength: "strong",
    flavour: "with milk",
    vendor: "Grand"
};

/*Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 
 */

var movie = {
    title: "mr Church",
    rating: 7.8,
    actors: ["Brian", "Tom", "Ryan"],
    year: 2005,
    genre: "drama",
    foreign: true
}

/* Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.
 */

function createProgram(description, language, gitrep, completed) {
    return {
        description: description,
        language: language,
        gitRep: gitrep,
        completed: completed,
        getRepository: function() {
            return this.gitRep
        },
        isJavaScript: function() {
            if (this.language === "JScript") { return true } else { return "Not Java Script" }
        },
        isCompleted: function() {
            return this.completed;
        }
    }
}

var program1 = createProgram("food ordering app", "JScript", "https://github.com/gogi981/bit_pp.git", false);
console.log(program1.getRepository());


function createRecipe(dish, type, cuisine, completed, ingredients, instructions) {
    return {
        name: dish,
        type: type,
        cuisine: cuisine,
        completed: completed,
        listIngredients: ingredients,
        prepInstruction: instructions,
        getIngredients: function() {
            result = "";
            for (var i = 0; i < this.listIngredients.length; i++) {
                result += "Ingredient " + (i + 1) + ": " + this.listIngredients[i] + "\n";
            }
            return result;
        },
        quickPrep: function() {
            return (this.prepTimeMinutes < 15);
        },
        removeIngredient: function(index) {
            for (var i = index - 1; i < this.listIngredients.length - 1; i++) {
                this.listIngredients[i] = this.listIngredients[i + 1];
            }
            this.listIngredients.length -= 1;
        },
        changeCuisine: function(newCuisine) {
            this.cuisine = newCuisine;
            return "Cuisine changed"
        }
    }
}


var recipe1 = createRecipe("Baklava", "Cake", "Turkish", 3, ["sugar", "water", "walnuts"], "https://natashaskitchen.com/baklava-recipe/");

console.log(recipe1.getIngredients());
recipe1.removeIngredient(2);
console.log(recipe1.getIngredients());
console.log(recipe1.quickPrep());
console.log(recipe1.cuisine);
console.log(recipe1.changeCuisine("Serbian"));
console.log(recipe1.cuisine);


/* CREATE USING CONSTRUCTOR FUNCTION */

/* Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.
 */

function Program(description, language, gitrep, completed) {
    this.description = description;
    this.language = language;
    this.gitRep = gitrep;
    this.completed = completed;
    this.getRepository = function() {
        return this.gitRep
    };
    this.isJavaScript = function() {
        if (this.language === "JScript") { return true } else { return "Not Java Script" }
    };
    this.isCompleted = function() {
        return this.completed;
    }
}

var program5 = new Program("app for messages", "PHP", "https://github.com/ivanazgr/bit_pp.git", true);
console.log(program5);
console.log(program5.isJavaScript());

/*
Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.  
*/


function Recipe(dish, type, cuisine, completed, ingredients, instructions) {

    this.name = dish;
    this.type = type;
    this.cuisine = cuisine;
    this.prepTimeMinutes = completed;
    this.listIngredients = ingredients;
    this.prepInstruction = instructions;
    this.getIngredients = function() {
        result = "";
        for (var i = 0; i < this.listIngredients.length; i++) {
            result += "Ingredient " + (i + 1) + ": " + this.listIngredients[i] + "\n";
        }
        return result;
    };
    this.quickPrep = function() {
        return (this.prepTimeMinutes < 15);
    };
    this.removeIngredient = function(index) {
        if ((index < this.listIngredients.length) && (index > 0)) {
            for (var i = index - 1; i < this.listIngredients.length - 1; i++) {
                this.listIngredients[i] = this.listIngredients[i + 1];
            }
            this.listIngredients.length -= 1;
        } else { return console.log("Wrong index number") };
    };

    this.changeCuisine = function(newCuisine) {
        this.cuisine = newCuisine;
        return "Cuisine changed"
    };
}

var recipe3 = new Recipe("proja", "meal", "Serbian", 14, ["flour", "eggs", "cheese", "oil", "water"], "https://fagor.rs/kako-se-pravi-proja-recept/");
console.log(recipe3.getIngredients());
console.log(recipe3.quickPrep());
recipe3.removeIngredient(6);
console.log(recipe3.getIngredients());
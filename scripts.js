/////////////////////////////////////
/////////////////////////////////////
//                                 //
//       KEYWORD RANDOMIZER        //
//                                 //
/////////////////////////////////////
/////////////////////////////////////


// DEFINE CATEGORIES WITH KEYWORDS //

var animals = [
    "bear",
    "bee",
    "beetle",
    "bull",
    "butterfly",
    "chameleon",
    "dog",
    "dolphin",
    "elephant",
    "giraffe",
    "goose",
    "monkey",
    "pelican",
    "penguin",
    "shark",
    "spider",
    "swan",
    "tiger",
    "wasp",
    "whale",
    "wolf",
    "zebra"
];
var buildings = [
    "church",
    "hospital",
    "old shack",
    "skyscraper"
];
var continents = [
    "africa",
    "antarctica",
    "asia",
    "australia",
    "europe",
    "north america",
    "south america"
];
var countries = [
    "canada",
    "japan",
    "mexico",
    "russia",
    "usa"
];
var jobs = [
    "doctor",
    "firefighter",
    "nurse",
    "taxi driver",
    "witch",
    "wizard"
];
var letters = [
    "letter a",
    "letter b",
    "letter c",
    "letter d",
    "letter e",
    "letter f",
    "letter g",
    "letter h",
    "letter i",
    "letter j",
    "letter k",
    "letter l",
    "letter m",
    "letter n",
    "letter o",
    "letter p",
    "letter q",
    "letter r",
    "letter s",
    "letter t",
    "letter u",
    "letter v",
    "letter w",
    "letter x",
    "letter y",
    "letter z"
];
var music = [
    "banjo",
    "bass guitar",
    "cello",
    "double bass",
    "drums",
    "guitar",
    "harp",
    "keyboard",
    "piano",
    "saxophone",
    "synthesizer",
    "trumpet",
    "violin"
];
var numbers = [
    "number 0",
    "number 1",
    "number 2",
    "number 3",
    "number 4",
    "number 5",
    "number 6",
    "number 7",
    "number 8",
    "number 9"
];
var plants = [
    "acorn",
    "conifer tree",
    "foliage tree",
    "maple leaf",
    "monstera leaf",
    "oak leaf",
    "rose",
    "tree trunk",
    "tulip",
    "water lily"
];
var shapes = [
    "circle",
    "cross",
    "hexagon",
    "pentagon",
    "square",
    "triangle"
];
var sports = [
    "archery",
    "baseball",
    "basketball",
    "cycling",
    "diving",
    "fencing",
    "fishing",
    "football",
    "golf",
    "ice hockey",
    "skateboarding",
    "skiing",
    "soccer",
    "swimming",
    "table tennis",
    "tennis",
    "volleyball",
    "weightlifting",
    "wrestling"
];
var things = [
    "angel",
    "book",
    "cd",
    "christmas",
    "daggers",
    "devil",
    "drugs",
    "fire",
    "ice",
    "ice cream",
    "pencil",
    "phone",
    "sword",
    "tornado",
    "vinyl",
    "wood"
];


// COMBINE ALL CATEGORIES INTO A SINGLE ARRAY //

var items = animals.concat(buildings, continents, countries, jobs, letters, music, numbers, plants, shapes, sports, things);


// SHUFFLE ARRAY //

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
items = shuffle(items);


// OUTPUT FIRST TWO ITEMS TO HTML //

document.getElementById("LeftItem").innerHTML = items[0];
document.getElementById("RightItem").innerHTML = items[1];




/////////////////////////////////////
/////////////////////////////////////
//                                 //
//        COLOR RANDOMIZER         //
//                                 //
/////////////////////////////////////
/////////////////////////////////////

var random_bool = Math.random() >= 0.5;
if (random_bool === true) {
    document.getElementById("LeftColumn").classList.remove('left');
    document.getElementById("LeftColumn").classList.add('right');
    document.getElementById("RightColumn").classList.remove('right');
    document.getElementById("RightColumn").classList.add('left');
}




/////////////////////////////////////
/////////////////////////////////////
//                                 //
//         FONT RANDOMIZER         //
//                                 //
/////////////////////////////////////
/////////////////////////////////////


var fonts = ["font-sans", "font-serif"]
fonts = shuffle(fonts);

document.getElementById("LeftItem").classList.add(fonts[0]);
document.getElementById("RightItem").classList.add(fonts[1]);
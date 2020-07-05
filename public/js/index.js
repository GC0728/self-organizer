/* Global Variables */

const leftbar = $(".b");

// Arrays to hold button subtopics
const carearTopics = ["Programming"];
const fitnessTopics = ["Climbing", "Hiking", "Lifting", "Shufflng"];
const lifestyleTopics = ["Car Maintenance", "Cooking", "Firearms"];


/* Navbar Button DOM Manipulation */

// Navlink button actions
function displayCarear() {
    leftbar.empty();
    SubBtnGenerator(carearTopics);
};

function displayFitness() {
    leftbar.empty();
    SubBtnGenerator(fitnessTopics);
};

function displayLifestyle() {
    leftbar.empty();
    SubBtnGenerator(lifestyleTopics);
};


// Navbar subtopic button constructor
function SubBtnGenerator(subtopic) {
    leftbar.empty();
    for (i = 0; i < subtopic.length; i++) {
        this.btn = $("<button>");
        this.btn.addClass("button subBtn");
        this.btn.attr("button-click");
        this.btn.text(subtopic[i]);
        leftbar.append(this.btn);
    };
    
};


// Switch statement for leftbar display
function evaluateBtn() {
    let clickedBtn = $(event.target).attr("name");
    console.log(clickedBtn);
    
    switch(clickedBtn) {
        case "carear":
            displayCarear();
            break;
        case "lifestyle":
            displayLifestyle();
            break;
        case "fitness":
            displayFitness();
            break;
    };
};

// subtopic button generator 
// function subBtn() {
//     console.log("This works");
// };

/* DOM Events */

// Navbar buttons
$(".navlink").on("click", evaluateBtn);

// Leftbar buttons
$(leftbar).on("click", subBtn);
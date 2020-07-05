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
    for (i = 0; i < carearTopics.length; i++) {
        let btn = $("<button>");
        btn.addClass("button");
        btn.attr("button-click");
        btn.text(carearTopics[i]);
        leftbar.append(btn);
    };
};

function displayFitness() {
    leftbar.empty();
    for (i = 0; i < fitnessTopics.length; i++) {
        let btn = $("<button>");
        btn.addClass("button");
        btn.attr("button-click");
        btn.text(fitnessTopics[i]);
        leftbar.append(btn);
    };
};

function displayLifestyle() {
    leftbar.empty();
// Display clickable buttons for Lifestyle subtopics
    for (i = 0; i < lifestyleTopics.length; i++) {
        let btn = $("<button>");
        btn.addClass("button subBtn");
        btn.attr("button-click");
        btn.text(lifestyleTopics[i]);
        leftbar.append(btn);
    }
};


// Navbar subtopic button constructor



// Switch statement for leftbar display
function evaluateBtn() {
    let clickedBtn = $(event.target).attr("name");
    
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

// subBtn 
function subBtn() {
    console.log("This works");
};

/* DOM Events */

// Navbar buttons
$(".navlink").on("click", evaluateBtn);

// Leftbar buttons
$(leftbar).on("click", subBtn);
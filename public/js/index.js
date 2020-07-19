/* Global Variables */

// DOM
const leftbar = $(".b");
const mainbar = $(".c");

// Arrays to hold button subtopics
const carearTopics = ["Programming"];
const fitnessTopics = ["Climbing", "Hiking", "Lifting", "Shufflng"];
const lifestyleTopics = ["Car Maintenance", "Cooking", "Firearms"];

// Arrays to hold subtopic "areas of study"
const firearmsTopics = ["Maintenance", "Techniques"];

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
        this.btn.id = (subtopic[i]);
        this.btn.text(subtopic[i]);
        leftbar.append(this.btn);
        console.log(this.btn);
        console.log(this.btn.id);
    };

};

// Function to set the attributes of the dynamically-created buttons
// function changeAttr(btn) {
//     let thisAttr = btn.getAttribute("innerHTML");
//     console.log(thisAttr);
// };

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
function subBtn() {
    console.log("This works");
    let subBtnTopic = event.target.innerHTML;
    console.log(subBtnTopic);
    mainbar.empty();

    
};

/* DOM Events */

// Navbar buttons click event
$(".navlink").on("click", evaluateBtn);

// Leftbar/subtopic buttons click event
$(leftbar).on("click", subBtn);
/* Global Variables */

const leftbar = $(".b");


/* Navbar Button DOM Manipulation */

//
function displayCarear() {
    leftbar.empty();
    leftbar.append("<a> Programming </a>");
};

function displayLifestyle() {
    leftbar.empty();
    leftbar.append("<a> Firearms </a>");
};

function displayFitness() {
    leftbar.empty();
    leftbar.append("<a> Climbing </a>");
};

// Switch statement for button actions
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



/* DOM Events */

$("button").on("click", evaluateBtn);
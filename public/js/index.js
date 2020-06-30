// Global Variables

const leftbar = $(".b");


// Navbar Button DOM Manipulation

function displayLeftbarNav() {
    leftbar.append("<a> Climbing </a>")
};

// DOM Events

$("button").on("click", displayLeftbarNav);
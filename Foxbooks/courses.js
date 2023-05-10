
console.log();

var urlParams = new URLSearchParams(window.location.search);
var inputValue = urlParams.get("inputValue")



function pageLoaded() {
    document.getElementsByClassName("welcomeText")[0].innerHTML = inputValue;


    document.getElementsByClassName("box-grid")[0].innerHTML = 
    `<div class="box"><p class="bold">Author:</p>${data["Discrete Mathematics"]["books"][0]["author"]}</div>` + `
    <div class="box"><p class="bold">ISBN:</p>${data["Discrete Mathematics"]["books"][0]["isbn"]}</div>
    
    `
}



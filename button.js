console.log("I work")

function changeColor(){
    let element = document.getElementById("Div");
    element.style.backgroundColor = "green";
}

    let element = document.getElementById("Button");
    element.addEventListener("click", changeColor)

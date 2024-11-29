function changeColor() {
    let red = parseInt(document.getElementById("red").value) || 0;
    let green= parseInt(document.getElementById("green").value) || 0;
    let blue= parseInt(document.getElementById("blue").value) || 0;
    document.getElementById("colorBox").style.backgroundColor= `rgb(${red},${green},${blue})`;
}
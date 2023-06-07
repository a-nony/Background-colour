var index = 0;

function changeColours(){
    var colors = ["red", "blue", "orange", "yellow","green", "purple"];
    document.getElementsByTagName("body")[0].style.background = colors[index++]

    if(index > colors.length - 1)
    return index = 0;
}
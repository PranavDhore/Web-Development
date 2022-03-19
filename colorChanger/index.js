const demoDiv = document.getElementById("box");
const hexDiv = document.getElementById("hexDiv");

function changeBackground(color){
    demoDiv.style.backgroundColor = color;
}

function colorChangeHandler(event){
    console.log(event.target);
}

function inputHandler(){
    demoDiv.style.backgroundColor = event.target.value;
    hexDiv.value = event.target.value;
    console.log(event.target.value);
}

function copyHex(){
    hexDiv.select();
    hexDiv.setSelectionRange(0,99999);

    navigator.clipboard.writeText(hexDiv.value);
}


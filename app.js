window.onload = () => {
    main();
}

function main() {

    const body = document.querySelector("body");
    const chng =document.querySelector("#change");
    const input = document.querySelector("input");
    const copy = document.querySelector("#copy");

    chng.addEventListener("click" ,function() {
        const rgb = generateColor();

        body.style.backgroundColor = rgb;
        input.value = rgb;
        chng.style.backgroundColor = rgb;
    })
    copy.addEventListener("click", function(){
        navigator.clipboard.writeText(input.value)
    })

};

function generateColor() {
     const red = Math.floor(Math.random() * 255);
     const green = Math.floor(Math.random() * 255);
     const blue = Math.floor(Math.random() * 255);

     return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
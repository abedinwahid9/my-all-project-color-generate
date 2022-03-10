window.onload = () => {
    main();
}

function main() {

    const body = document.querySelector("body");
    const btn =document.querySelector("button");
    const input = document.querySelector("input");

    btn.addEventListener("click" ,function() {
        const rgb = generateColor();

        body.style.backgroundColor = rgb;
        input.value = bgcolor;
        btn.style.backgroundColor = bgcolor;
    })

};

function generateColor() {
     const red = Math.floor(Math.random() * 255);
     const green = Math.floor(Math.random() * 255);
     const blue = Math.floor(Math.random() * 255);

     return `rgb(${red},${green},${blue})`;
}
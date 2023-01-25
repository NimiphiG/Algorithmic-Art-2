//global variables
let textures = [];
let cellSize = 40;


function preload() {
    let numTextures = 9;
    for (let i = 1; i <= numTextures; i++) {
        let texture = loadImage(`images/sticker${i}.png`);// back ticks `` are template literals, ${} string interpolation
        textures.push(texture);
    }
}

function setup() {

    createCanvas(800, 800);
    let x = cellSize; 
    let y = cellSize;

    while (y < height - 80) {

        while (x < width - 80) {


            let t = random(textures);
            let s = cellSize * (random(0.75, 2));
            let r = random(-1, 1);
            let xr = random(-20, 20);
            let yr = random(-20, 20);



            push();

            translate(x + cellSize, y + cellSize);
            rotate(r);
            image(t, -(s / 2) + xr, -(s / 2) + yr, s, s);

            pop();

            x += cellSize;

        }
        x = cellSize;
        y += cellSize;


    }

    let t = random(textures);
    let s = 300;
    image(t, 400 - (s / 2), 400 - (s / 2), s, s);
}

function mouseClicked() {
    setup();
}

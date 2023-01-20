
let textures = [];

let varX = 5;
let varY = 5;
let cellSize = 40;
let theta = 0

function preload() {
    let numTextures = 9
    for (let i = 1; i <= numTextures; i++) {
        let texture = loadImage(`images/sticker${i}.png`);// back ticks `` are template literals, ${} string interpolation
        textures.push(texture);
    }

    

}

function setup() {
    createCanvas(800, 800);
    background(0)
    frameRate(5)

    let x = 40;
    let y = 40;
    let z = 0
    
    
    let colors = [color('#264653'), color('#c44536'), color('#283d3b'), color('#7ee9680'), color('#ae6378'), color('#256ca2'), color('#f2bc20'), color('#2f9eb8'), color('#b4748d'),color('#fcb900')]


    while (y < height-80) {
        
        while (x < width-80) {

            
            let t = random(textures);
            let s = cellSize*(random(0.5,2))
            let r = random(-1,1)
            let z = random(1,4)
           
            
            push()
            // tint(random(255),random(255),random(255),255);
            translate(x+40,y+40)
            rotate(r)
            image(t, -(s/2),-(s/2), s,s);
        
            pop()

            x += cellSize ;
            theta += 0.5;
        }
        x = 40;
        y += cellSize ;
        
        
    }
    let t = random(textures)
    let s = 300
    image(t, 400-(s/2),400-(s/2), s,s);
}
function mouseClicked(){
    setup()}

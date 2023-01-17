
let textures = [];

let varX = 5;
let varY = 5;
let cellSize = 80;
let theta = 0

function preload() {
    let numTextures = 10
    for (let i = 5; i <= numTextures; i++) {
        let texture = loadImage(`images/texture${i}.png`);// back ticks `` are template literals, ${} string interpolation
        textures.push(texture);
    }

    

}

function setup() {
    createCanvas(800, 800);
    background(0)
    frameRate(5)

    let x = 40;
    let y = 40;
    
    let sizes = [cellSize];
    let colors = [color('#264653'), color('#c44536'), color('#283d3b'), color('#7ee9680'), color('#ae6378'), color('#256ca2'), color('#f2bc20'), color('#2f9eb8'), color('#b4748d')]


    while (y < height-80) {
        
        while (x < width-80) {

            
            let t = random(textures);
            let s = random(sizes)
            let r = random(-TAU,TAU)
            let a = sin(theta)
            
            push()
            tint(random(colors))
            translate(x+40,y+40)
            rotate(r)
            image(t, -(cellSize/2),-(cellSize/2), s,s);
            pop()

            x += cellSize ;
            theta += 0.5;
        }
        x = 40;
        y += cellSize ;
        
        
    }
    
   
}


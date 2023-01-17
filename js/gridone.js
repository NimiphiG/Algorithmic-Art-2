function setup() {
    const cellSize = 40;
    createCanvas(800,800);
    background(0);
    noStroke();
    let x =0;
    let y = 0;
    let xVar = 10;
    let yVar = 10;
    let widthVar = 20;
    let heightVar = 20;
    let colors = [color('#c0503f'), color('#d8d4af'),color('#296b47'),color('#aea2bf'),color('#256ca2'),color('#f2bc20'),color('#2f9eb8'),color('#b4748d')]

    while(y<height){
        while(x<width){

            fill(random(colors));

            rect(x+(random(-xVar,xVar)),y + (random(-yVar,yVar)),
            cellSize + random(-widthVar,widthVar), cellSize+random(-heightVar,heightVar));
            
            x += cellSize;
        
        }
        x=0
        y += cellSize
    }
}
function draw() {
    
}

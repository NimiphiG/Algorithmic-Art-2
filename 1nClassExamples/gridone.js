function setup() {

    createCanvas(800, 800);
    background(0);

    let cellSize = 40;

    let x = 0;
    let y = 0;

    let xVar = 10;
    let yVar = 10;

    let widthVar = 10;
    let heightVar = 10;

    let sizes = [cellSize, cellSize * 2, cellSize * 3,]

    let curWidth = random(sizes)
    let curHeight = random(sizes)

    let colors = [color('#c0503f'), color('#604645'), color('#d8d4af'), color('#296b47'), color('#aea2bf'), color('#256ca2'), color('#f2bc20'), color('#2f9eb8'), color('#b4748d')]
    
    strokeWeight(10)

    while (y < height) {
        while (x < width) {

            fill(random(colors));

            //random sizes
            // rect(x+(random(-xVar,xVar)),y + (random(-yVar,yVar)),
            // cellSize + random(-widthVar,widthVar), cellSize+random(-heightVar,heightVar));
            // x += cellSize

            rect(x, y, curWidth, curHeight);
            x += curWidth;
            curWidth = random(sizes)
            let remWidth = width - x

            while (curWidth > remWidth) {
                curWidth -= cellSize
            }

        }
        x = 0
        y += curHeight
        curHeight = random(sizes)
        let remHeight = height-y
        while (curHeight > remHeight){
            curHeight -= cellSize
        }
    }
}

function mouseClicked(){
    setup()
}
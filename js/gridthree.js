
let clicked = 0;
let growth = 1
let rounds = clicked;

let stichHeight = 25;
let stichWidth = 20;

let tiles = 0

//i should automate this
let Xs = [100, 100, 100, 100, 300, 300, 300, 300, 500, 500, 500, 500, 700, 700, 700, 700];
let Ys = [100, 300, 500, 700, 100, 300, 500, 700, 100, 300, 500, 700, 100, 300, 500, 700];


function setup() {

    createCanvas(800, 800);
    background(100);
    strokeWeight(5);
    strokeJoin(ROUND)
    noFill()
    angleMode(DEGREES)
    let colours = [color('#99b898'), color('#fecea8'), color('#ffb47c'), color('#e84a5f'), color('#2a363b')]




    while (tiles <= 16) {
        tile()
        tiles += 1

    }


    function tile() {
        if (tiles < 16) {
            centerX = Xs[tiles]
            centerY = Ys[tiles]


            rounds = 0

            while (rounds <= 4) {

                let length = stichHeight * 2 * rounds
                let cellWidth = length / (rounds * 2)
                roundColour = random(colours)

                fill(roundColour)
                stroke(roundColour)
                if (rounds == 4) {
                    stroke(0)
                    fill(0)
                }
                //  else {
                //     noFill()
                //     rect(centerX - stichHeight / 2 - length / 2, centerY - stichHeight / 2 - length / 2, length + stichHeight)
                //     fill(roundColour)
                   
                // }

                

                for (i = 1; i <= 4; i++) {

                    if (i == 1) { r = length / 2; u = cellWidth + stichWidth / 2; l = 0; d = 0 }
                    if (i == 2) { r = 0; u = length / 2; l = cellWidth + stichWidth / 2; d = 0 }
                    if (i == 3) { r = 0; u = 0; l = length / 2; d = cellWidth + stichWidth / 2 }
                    if (i == 4) { r = cellWidth + stichWidth / 2; u = 0; l = 0; d = length / 2 }

                    push()

                    translate(centerX - r + l, centerY - u + d)
                    rotate(90 * i)

                    for (let n = rounds; n > 0; n--) { rect(n * cellWidth * 2 - length / 2, -stichHeight / 2, stichWidth, stichHeight) }

                    pop()
                }
                rounds += 1
            }

        }
    }
}



function mouseClicked() {
    rounds = 0
    clicked += growth

    if (clicked == 3) {
        growth = -1
    }
    if (clicked == 0) {
        growth = 1
    }


    tiles = 0
    setup()
}


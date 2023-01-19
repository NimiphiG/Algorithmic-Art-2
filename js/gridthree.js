
let clicked = 1;
let growth = 1
let rounds = clicked;

let tiles = 0

let tileCount = 5 //number of squares across
let maxRounds = 10 // number of rounds in eaach square

let stichHeight = 800/((tileCount*maxRounds*2)+1);
let stichWidth = stichHeight*0.8;

let inc = maxRounds*stichHeight*2
let rem = 800 - inc * tileCount


// creates an array for the center coordinates of each square
let Xs = [];
let Ys = [];
for(i=0;i<tileCount*tileCount;i++){
    x = Math.floor(i/tileCount)*inc + inc/2 +rem/2;
    Xs.push(x);
}
for(i=0;i<tileCount*tileCount;i++){
    y = (i%tileCount)*inc + inc/2 +rem/2;
    Ys.push(y);
}


function setup() {



    createCanvas(800, 800);
    background(100);
    strokeWeight(stichHeight/5);
    strokeJoin(ROUND)
    angleMode(DEGREES)
    let colours = [color('#99b898'), color('#fecea8'), color('#ffb47c'), color('#e84a5f'), color('#2a363b')]


    while (tiles <= tileCount*tileCount) {
        tile()
        tiles += 1

    }


    function tile() {
        if (tiles < tileCount*tileCount) {
            centerX = Xs[tiles]
            centerY = Ys[tiles]
            


            rounds = 0

            while (rounds <= maxRounds) {

                let length = stichHeight * 2 * rounds
                roundColour = random(colours)

                fill(roundColour)
                stroke(roundColour)
                if (rounds == maxRounds) {
                    stroke(0)
                    fill(0)
                }
                
                //rect(centerX - stichHeight / 2 - length / 2, centerY - stichHeight / 2 - length / 2, length + stichHeight)
                

                

                for (i = 1; i <= 4; i++) {

                    if (i == 1) { r = length/2; u = stichHeight + stichWidth / 2; l = 0; d = 0 }
                    if (i == 2) { r = 0; u = length / 2; l = stichHeight + stichWidth / 2; d = 0 }
                    if (i == 3) { r = 0; u = 0; l = length / 2; d = stichHeight + stichWidth / 2 }
                    if (i == 4) { r = stichHeight + stichWidth / 2; u = 0; l = 0; d = length / 2 }

                    push()
                    
                    translate(centerX - r + l, centerY - u + d)
                    rotate(90*i)

                    // for (let n = rounds; n > 0; n--) 
                    // { rect(n * stichHeight * 2 - length / 2, -stichHeight / 2, stichWidth, stichHeight) }

                    for (let n = rounds; n > 0; n--) 
                    { rect(n * stichHeight * 2 - length / 2, -stichHeight / 2, stichWidth, stichHeight) }

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
    console.log(clicked)

    if (clicked == 10) {
        growth = -1
    }
    if (clicked == 0) {
        growth = 1
    }


    tiles = 0
    setup()
}


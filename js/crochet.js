
function setup() {

    //variable inputs
    let tileCount = document.getElementById('tileCount').value 
    let maxRounds = document.getElementById('rounds').value 

    //global variable based on inputs
    let stitchHeight = 800 / ((tileCount * maxRounds * 2) + 1);// changes the stitch height to acount for the previous variables 
    let stitchWidth = stitchHeight * 0.8;//sets the stitch width in acourdance with the stitch height

    // creates two arrays to hold the center coordinates of each square
    let Xs = []; let Ys = [];
    let inc = maxRounds * stitchHeight * 2;// sets the distance between each squares center coordinates

    for (i = 0; i < tileCount * tileCount; i++) {

        x = Math.floor(i / tileCount) * inc + inc / 2 + stitchHeight / 2;
        y = (i % tileCount) * inc + inc / 2 + stitchHeight / 2;

        Xs.push(x);  Ys.push(y);
    };


    createCanvas(800, 800);
    background(70);
    angleMode(DEGREES);
    strokeJoin(ROUND);
    strokeWeight(stitchHeight / 5);

    let colours = [color('#509056'), color('#a46e80'), color('#99b898'), color('#fcb940'), color('#fecea8'), color('#ffb47c'), color('#e84a5f'), color('#2a363b')]
    let tiles = 0 // resets the number of tiles to 0 for each set up

    //calls the tiles function an apropriate amount of times for the input variables
    while (tiles < tileCount * tileCount) {
        tile()
        tiles += 1
    }

    function tile() {

        //sets the center coordinates to 
        centerX = Xs[tiles]; centerY = Ys[tiles]

        // resets the round to 0 every tile
        rounds = 0

        // draws the apropriate amount of rounds as stated by the input
        while (rounds < maxRounds) {
            rounds += 1

            let length = stitchHeight * rounds * 2 // sets the length of each side of each round

            // picks a random colour from the array to use for each round
            roundColour = random(colours)
            fill(roundColour)
            stroke(roundColour)

            //sets the last round of each square to black
            if (rounds == maxRounds) {
                stroke(0)
                fill(0)
            }


            //draws each side 4 times
            for (i = 1; i <= 4; i++) {

                //sets the variables for the translation of each side so they allign correctly
                if (i == 1) { x = -length / 2; y = -stitchHeight - stitchWidth / 2; }
                if (i == 2) { x = stitchHeight + stitchWidth / 2; y = length / 2 }
                if (i == 3) { x = length / 2; y = stitchHeight + stitchWidth / 2 }
                if (i == 4) { x = -stitchHeight - stitchWidth / 2; y = -length / 2 }

                push();

                translate(centerX + x, centerY + y); // translates thr origin to a point thats offset from the center in accordance with which side is being drawn
                rotate(90 * i);// rotates each side 90 degrees from the last one 

                // draws rectangles in acordance with all previuosly set variables
                for (let n = 1; n <= rounds; n++) {
                    rect(n * stitchHeight * 2 - length / 2, -stitchHeight / 2, stitchWidth, stitchHeight);
                }

                pop();
            }

        }
    }
}


// recalls the set up function to randomise the colours on every click
function mouseClicked() { setup() }



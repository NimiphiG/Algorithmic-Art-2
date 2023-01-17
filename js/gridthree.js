function setup() {
    let cellSize = 100;
    createCanvas(800, 800);
    background(100);
    strokeWeight(10);
    noFill()
    angleMode(DEGREES)
    let centerX = 400;
    let centerY = 400;
    let rounds = 1
    let colours = [color('#ff0000'), color('#00ff00'), color('#0000ff')]

    while (rounds <= 8) {

        let length = 100 * rounds
        let randColor = random(colours)
        let n = rounds * 4
        rect(400 - length / 2, 400 - length / 2, length)

        for (i = 1; i <= n; i++) {
            if ((i==1)) {
                r=length/2; u= 0; l=0; d=0
            }
            if(i==2){
                r=0; u= length/2; l=0; d=0
            }
            if(i==3){
                r=0; u=0; l= length/2; d=0
            }
            if(i==4){
                r=0; u=0; l=0; d=length/2
            }
            push()
            translate(centerX - r + l, centerY - u + d)
            rotate(90 * i )
            stroke(randColor)
            rect(-10, -15, 20, 30)
            pop()

            console.log('rect ' + i + rounds)

        }
        rounds += 1
    }



}

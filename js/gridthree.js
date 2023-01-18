function setup() {
    
    createCanvas(800, 800);
    background(100);
    strokeWeight(5);
    noFill()
    angleMode(DEGREES)

    let centerX = 400;
    let centerY = 400;

    let rounds = 0
    let colours = [color('#ff0000'), color('#00ff00'), color('#0000ff')]
    
    let stichHeight = 50
    let stichWidth = 40

    while (rounds <= 7) {

        let length = 100 * rounds
        let randColor = random(colours)
        let n = 4
        stroke(randColor)
        rect(centerX - stichHeight/2 - length / 2, centerX-stichHeight/2 - length / 2, length+stichHeight)
        cellWidth = length / (rounds*2)
        console.log(cellWidth)

        for (i = 1; i <= n; i++) {
            if ((i==1)) {
                r=length/2; u=cellWidth+stichWidth/2; l=0; d=0
            }
            if(i==2){
                r=0; u= length/2; l=cellWidth+stichWidth/2; d=0
            }
            if(i==3){
                r=0; u=0; l= length/2; d=cellWidth+stichWidth/2
            }
            if(i==4){
                r=cellWidth+stichWidth/2; u=0; l=0; d=length/2
            }
            
            push()
            translate(centerX - r + l, centerY - u + d)
            rotate(90 * i)
            stroke(randColor)
            for(let n = rounds ; n>0; n--){
            rect(n*cellWidth*2 - length/2, -stichHeight/2, stichWidth, stichHeight)}
            pop()

            console.log('rect ' + i + rounds)

        }
        rounds += 1
    }



}

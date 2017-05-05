/**
 * Created by sun10 on 2017/5/1.
 */

function autoMove() {
    movePos()
}

function movePos() {
    if (posY + dirY < height && posY + dirY > -1 && posX + dirX < width && posX + dirX > -1) {
        posY = posY + dirY;
        posX = posX + dirX;
        if (step === tailX.length) {
            step = 0;
        }
        posXLast = posXLast + tailX[step];
        tailX[step] = dirX;
        posYLast = posYLast + tailY[step];
        tailY[step] = dirY;
        step = step + 1;
    } else {
        console.log('gameover')
    }
    reDraw()
}

function reDraw() {
    rectColor(posXLast,posYLast,0)
    rectColor(posX,posY,1)
}

function setFood() {
    var position = [1,1];
    foods.push(position);
}
/**
 * Created by sun10 on 2017/5/1.
 */

function autoMove() {
    if(dirWay) move(dirWay)
}

function movePos(s,n) {
    if(s === 1)
    {
        posXLast = posX;
        posYLast = posY;
        if(posY + n < height && posY + n > -1) {
            posY = posY + n;
        }
    }
    else
    {
        posXLast = posX;
        posYLast = posY;
        if(posX + n < width && posX + n > -1) {
            posX = posX + n
        }
    }
    reDraw()
}

function reDraw() {
    console.log('redraw',posX,posY);
    rectColor(posXLast,posYLast,0)
    rectColor(posX,posY,1)
}

function setFood() {

}
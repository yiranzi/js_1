/**
 * Created by sun10 on 2017/5/1.
 */



function move(dir) {
    console.log(dir);
    switch(dir) {
        case 'W':
            movePos(1,-1);
            break;
        case 'S':
            movePos(1,1);
            break;
        case 'A':
            movePos(2,-1);
            break;
        case 'D':
            movePos(2,1);
            break;
    }
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
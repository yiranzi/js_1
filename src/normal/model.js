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
        posXLast = snake[snake.length - 1].posX
        posYLast = snake[snake.length - 1].posY
        var myNode = snake.pop();
        snake.unshift(myNode);
        snake[0].posX = posX;
        snake[0].posY = posY;
        //  = {posX: 0, posY: 0};
        // myNode.posX = snake[snake.length-1].posX;
        // myNode.posY = snake[snake.length-1].posY;
        // snake.unshift(myNode)
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
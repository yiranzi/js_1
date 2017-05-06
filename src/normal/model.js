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
        for(var node in snake)
        {
            console.log('test')
            if(snake[node].posX === posX && snake[node].posY === posY)
            {
                alert('gameover')
                clearInterval(nIntervId)
                console.log('gameover')
            }
        }
        if(map[posX][posY] === 1)
        {
            var myNode = {};
            myNode.posX = posX;
            myNode.posY = posY;
            snake.unshift(myNode);
            map[posX][posY] = 0;
            rectColor(posX,posY,3)
            setFood();
        } else {

            posXLast = snake[snake.length - 1].posX
            posYLast = snake[snake.length - 1].posY
            var myNode = snake.pop();
            snake.unshift(myNode);
            snake[0].posX = posX;
            snake[0].posY = posY;
        }
    } else {
        alert('gameover')
        clearInterval(nIntervId)
        console.log('gameover')
    }
    reDraw()
}

function reDraw() {
    rectColor(posXLast,posYLast,0)
    rectColor(posX,posY,1)
}

function setFood() {
    console.log('random')
    var reRandom = true;
    while(reRandom){
        outLoop:{
            var i = Math.floor(Math.random() * width);
            var j = Math.floor(Math.random() * height);
            if (map[i][j] === 0)
            {
                for(var node in snake) {
                    if(snake[node].posX === i || snake[node].posY === j) {
                        break outLoop;
                    }
                }
            } else {
                break outLoop;
            }
            reRandom = false;
            map[i][j] = 1;
            rectColor(i,j,2)
        }
    }
}
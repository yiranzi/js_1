/**
 * Created by sun10 on 2017/5/1.
 */
//设置起始位置.
var posX = 0
var posY = 0
var posXLast = 0
var posYLast = 0
var width = 0
var height = 0
var dirWay = ''
var dirX = 0
var dirY = 0
var tailX = []
var tailY = []
var nIntervId;
var moveType = 1
var foods = []
var snakeMove = []
var step =0

function setStart(x,y,width,height,interval) {
    console.log('game start')
    posX = posXLast = x;
    posY = posYLast = y;
    this.width =width;
    this.height = height;
    creatRect(this.width,this.height);
    nIntervId = setInterval(autoMove,interval);
}

function setLength(length,dirX,dirY) {
    this.dirX = dirX;
    this.dirY = dirY;
    tailX = new Array(length);
    tailY = new Array(length);
    tailX.fill(dirX);
    tailY.fill(dirY);
    setStartPos(length);
}

function setStartPos(length) {
    for(var i = 0;i< length;i++){
        console.log('init ',posXLast,posYLast)
        rectColor(posXLast,posYLast,1);
        posXLast = posXLast - dirX;
        posYLast = posYLast - dirY;
    }
    //todo 这里面需要有效值判定
}
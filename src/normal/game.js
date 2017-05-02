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

function setStart(x,y,width,height) {
    console.log('game start')
    posX = posXLast = x;
    posY = posYLast = y;
    this.width =width;
    this.height = height;
    creatRect(this.width,this.height);
}
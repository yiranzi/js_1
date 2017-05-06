/**
 * Created by sun10 on 2017/5/1.
 */
function creatRect(width,height) {
    var div = document.getElementById('first');
    for (var i = 0; i < width; i++) {
        var line = document.createElement('div');
        div.appendChild(line);
        for (var j = 0; j < height; j++) {
            var ele = document.createElement('span');
            line.appendChild(ele)
            ele.innerHTML = '';
            // console.log(i)
        }
    }
}

function rectColor(posX,posY,type) {
    var father = document.getElementById('first')
    var lines = father.getElementsByTagName('div')
    var line = lines[posY];
    var cols = line.getElementsByTagName('span');
    var col = cols[posX];
    switch (type) {
        case 0:
            console.log( 'redo ' + posX,posY)
            removeClass(col,'have-ele');
            break;
        case 1:
            console.log('draw ' + posX,posY)
            addClass(col,'have-ele');
            break;
        case 2:
            console.log( 'draw food' + posX,posY)
            addClass(col,'food');
            break;
        case 3:
            console.log( 'eat food' + posX,posY)
            removeClass(col,'food');
            break;
    }
    if (type === 1)
    {

    } else if (type === 0) {

    } else if (type === 2) {

}

}
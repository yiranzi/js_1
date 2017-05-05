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
    if (type === 1)
    {
        console.log('draw ' + posX,posY)
        addClass(col,'have-ele');
    } else {
        console.log( 'redo ' + posX,posY)
        removeClass(col,'have-ele');
    }

}
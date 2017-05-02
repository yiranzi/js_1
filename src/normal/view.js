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
    console.log('drawing')
    var father = document.getElementById('first')
    var lines = father.getElementsByTagName('div')
    var line = lines[posY];
    var cols = line.getElementsByTagName('span');
    var col = cols[posX];
    if (type !== 0)
    {
        addClass(col,'have-ele');
    } else {
        removeClass(col,'have-ele');
    }

}
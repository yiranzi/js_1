/**
 * Created by wuchuck on 4/26/17.
 */


function findRectColor() {
    var father = document.getElementById('first')
    var lines = father.getElementsByTagName('div')
    console.log(lines.length);
    for (var i = 0; i<lines.length;i++)
    {
        var lineEle = lines[i]
        var cols = lineEle.getElementsByTagName('span')
        console.log(cols.length);
        for (var j = 0; j<cols.length; j++)
        {
            var colEle = cols[j];
        }
    }
}


function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}


function addClass(obj,clas) {
    obj.className += " " + clas;
}

function removeClass(obj,clas){
    console.log(obj)
    if (hasClass(obj,clas)) {
        var reg = new RegExp('(\\s|^)' + clas + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}
/**
 * Created by sun10 on 2017/5/1.
 */
document.onkeydown = function (ev) {
    var ev = ev || event
    let num = ev.keyCode

    switch (num) {
        case 87:
            dirX = 0
            dirY = -1
            break;
        case 83:
            dirX = 0
            dirY = 1
            break;
        case 65:
            dirX = -1
            dirY = 0
            break;
        case 68:
            dirX = 1
            dirY = 0
            break;
    }
}


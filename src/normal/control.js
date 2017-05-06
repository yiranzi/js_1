/**
 * Created by sun10 on 2017/5/1.
 */
document.onkeydown = function (ev) {
    var ev = ev || event
    let num = ev.keyCode

    switch (num) {
        case 87:
            if(dirY != 1){
                dirX = 0
                dirY = -1
            }
            break;
        case 83:
            if(dirY != -1){
                dirX = 0
                dirY = 1
            }
            break;
        case 65:
            if(dirX != 1){
                dirX = -1
                dirY = 0
            }

            break;
        case 68:
            if(dirX != -1){
                dirX = 1
                dirY = 0
            }

            break;
    }
}


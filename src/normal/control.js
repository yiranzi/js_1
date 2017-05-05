/**
 * Created by sun10 on 2017/5/1.
 */
document.onkeydown = function (ev) {
    var ev = ev || event
    let num = ev.keyCode
    if(moveType === 1){
        switch(num) {
            case 87:
                dirWay = 'W'
                break;
            case 83:
                dirWay = 'S'
                break;
            case 65:
                dirWay = 'A'
                break;
            case 68:
                dirWay = 'D'
                break;
        }
    } else {
        switch(num) {
            case 87:
                move('W');
                break;
            case 83:
                move('S');
                break;
            case 65:
                move('A');
                break;
            case 68:
                move('D');
                break;
        }
    }

}

function move(dir) {
    console.log(dir);
    switch(dir) {
        case 'W':
            movePos(1,-1);
            break;
        case 'S':
            movePos(1,1);
            break;
        case 'A':
            movePos(2,-1);
            break;
        case 'D':
            movePos(2,1);
            break;
    }
}

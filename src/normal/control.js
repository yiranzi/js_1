/**
 * Created by sun10 on 2017/5/1.
 */
document.onkeydown = function (ev) {
    var ev = ev || event
    let num = ev.keyCode
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
function move() {

}
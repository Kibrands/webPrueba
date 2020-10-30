function display_c() {
    var refresh = 1000;
    mytime = setTimeout('clock()', refresh)
}

function clock() {
    var x = new Date();
    var minutes = x.getMinutes();
    var seconds = x.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    var x1 = x.getHours() + ":" + minutes + ":" + seconds;
    document.getElementById('reloj').innerHTML = x1;

    tt = display_c();
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}
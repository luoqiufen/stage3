function getTime(){
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var second = now.getSeconds();
    return hour+':'+minutes+':'+second;
}

exports.getTime=getTime;
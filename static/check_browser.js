function getChromeVersion() {
    var arr = navigator.userAgent.split(' '); 
    var chromeVersion = '';
    for(var i=0;i < arr.length;i++){
        if(/chrome/i.test(arr[i]))
        chromeVersion = arr[i]
    }
    if(chromeVersion){
        return Number(chromeVersion.split('/')[1].split('.')[0]);
    } else {
        return false;
    }
}
if(getChromeVersion()) {
    var version = getChromeVersion();
    if(version < 85) {
    alert("bro你chrome内核版本过旧乐💀");
    window.open("//old.biliterminal.cn",'_self');
    }
}

var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
if(isIE) {
alert("不是bro你还用IE呢💀");
window.open("//old.biliterminal.cn",'_self');
}

var match = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
var ver = match ? parseInt(match[1]) : 99;
if(ver < 95) {
alert("bro你火狐内核过老了💀");
window.open("//old.biliterminal.cn",'_self');
}

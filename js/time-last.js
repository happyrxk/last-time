/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 14-4-30
 * Time: 上午9:23
 * To change thhis template use File | Settings | File Templates.
 */
var lastTime;
lastTime = function (timeStr) {


    var selfObj,
        futureTime = Date.parse(timeStr),
        nowTime = Date.now(),
        time;
    time = futureTime - nowTime > 0 ? Math.floor((futureTime - nowTime) / 1000) : 0;
    console.log(time);
    selfObj = function () {
        var timer = setInterval(function () {
            time--;
            if (time < 0) {
                clearInterval(timer);
            }
        }, 1000);
    };
    selfObj.prototype.getDay = function () {
        return Math.floor(time / 86400);
    };
    selfObj.prototype.getHours = function () {
        var hourTime = time % 86400;
        return Math.floor(hourTime / 3600);
    };
    selfObj.prototype.getMinutes = function () {
        var minuteTime = time % 3600;
        return Math.floor(minuteTime / 60);
    };
    selfObj.prototype.getSeconds = function () {
        return time % 60;
    };
    selfObj.prototype.toString = function () {
        return this.getDay() + "  " + this.getHours() + "  " + this.getMinutes() + "  " + this.getSeconds();
    };
    return selfObj;
};
var TimeShow = lastTime("2014-04-30T03:11");
var show = new TimeShow();
setInterval(function(){
    console.log(show.toString());
},1000);


var start = new Date();
var startMilli=start.getTime();

function stopTime(){

    var stop= new Date();
    var stopMilli=stop.getTime();

  var diffMilli = stopMilli - startMilli;

  var diffSecond= diffMilli/1000;

  alert("the number of seconds past is" +diffSecond);

}

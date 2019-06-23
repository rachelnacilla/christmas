//var deadline = '2015-12-24 23:59:59 GMT+10:00'


function getTimeRemaining(endtime){
  
	var t = Date.parse(endtime) - Date.parse(new Date()); 
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
  

	return {
    
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
  
  };

}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  
  function theClock(){
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = t.seconds;

   
  if(t.total<=0){
    clearInterval(timeinterval);
  }
}

theClock(); // run function once at first to avoid delay
  var timeinterval = setInterval(theClock, 1000);
}
var deadline = '2019-12-24 23:59:59 GMT+10:00'
//var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
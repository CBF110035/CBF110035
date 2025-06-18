			document.addEventListener('DOMContentLoaded', function() { //事件觸發時執行
			  var h1Element = document.querySelector('h1');
			  h1Element.addEventListener('mousemove', function(e) {
				var rXP = (e.pageX - this.offsetLeft - (this.offsetWidth / 2));
				var rYP = (e.pageY - this.offsetTop - (this.offsetHeight / 2));
				h1Element.style.textShadow = rYP/10 + 'px ' + rXP/80 + 'px rgba(227,6,19,.8), ' + rYP/8 + 'px ' + rXP/60 + 'px rgba(255,237,0,1), ' + rXP/70 + 'px ' + rYP/12 + 'px rgba(0,159,227,.7)';
			  });//計算陰影偏移量
			});


var currentTimeElement = document.getElementById("current-time");

function updateCurrentTime() {
  var currentDate = new Date();
  var currentDateTimeString = currentDate.toLocaleString(); // 獲取日期跟時間
  currentTimeElement.textContent = currentDateTimeString;
}

updateCurrentTime();// 初始加載

setInterval(updateCurrentTime, 1000);// 每秒更新一次時間

document.addEventListener('DOMContentLoaded', function() {
  var historyCount = window.history.length;
  var historyCountElement = document.getElementById('historyCount');
  historyCountElement.textContent = historyCount;
});





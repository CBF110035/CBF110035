var str='歡迎來到SIRI小姐的世界';
window.alert(str);


function showConfirmation() {
  var result = confirm("請問你是否要進入本網站？");
  if (result === false) {
    redirectToGoogle();
  }
}

showConfirmation();

document.addEventListener('DOMContentLoaded', function() {
  var historyCount = window.history.length;
  var historyCountElement = document.getElementById('historyCount');
  historyCountElement.textContent = historyCount;
});
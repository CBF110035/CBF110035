document.addEventListener('DOMContentLoaded', function() {
  var h1Element = document.querySelector('h1');
  h1Element.addEventListener('mousemove', function(e) {
    var rXP = (e.pageX - this.offsetLeft - (this.offsetWidth / 2));
    var rYP = (e.pageY - this.offsetTop - (this.offsetHeight / 2));
    h1Element.style.textShadow = rYP/10 + 'px ' + rXP/80 + 'px rgba(227,6,19,.8), ' + rYP/8 + 'px ' + rXP/60 + 'px rgba(255,237,0,1), ' + rXP/70 + 'px ' + rYP/12 + 'px rgba(0,159,227,.7)';
  });
});

function showConfirmation() {
  var result = confirm("歡迎進入該網站，請問您是否滿18歲？");
  if (result === false) {
    redirectToGoogle();
  } else {
    continueToWebsite();
  }
}
function redirectToGoogle() {
  window.location.href = "https://www.google.com";
}
showConfirmation();
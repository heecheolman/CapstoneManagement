(function() {
  var score = document.getElementById('result');
  var sum = 0;
})();

(function() {
  var score = document.getElementById('result');
  var sum = 0;
  var radio = document.querySelectorAll('input[name="val_1"]');
  for(var i = 0; i < 5; i++) {
    radio[i].addEventListener('click', function() {
      score.innerHTML = parseInt(document.querySelector('input[name="val_1"]:checked').value);
    });
  }
})();
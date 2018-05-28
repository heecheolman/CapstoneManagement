(function () {
  var sumList = [];
  sumList.length = 7;
  
  // 처음 값을 불러오기위한 호출
  sum();
  
  var radio = [];
  radio.length = 7;
  
  for(var i = 0; i < radio.length; i++) {
    radio[i] = document.querySelectorAll('input[name="val_' + (i + 1) + '"]');
  }
  
  for(var i = 0; i < radio.length; i++) {
    for(var j = 0; j < radio[0].length; j++) {
      radio[i][j].addEventListener('click', function() {
        sum();
      });
    }
  }
  
  function sum() {
    var score = document.getElementById('result');
    var sum = 0;
    for(var i = 0; i < sumList.length; i++) {
      sumList[i] = parseInt(document.querySelector('input[name="val_' + (i + 1) + '"]:checked').value);
      sum += sumList[i];
    }
    score.innerHTML = parseInt(sum);
  }
})();
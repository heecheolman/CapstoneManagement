(function() {
  var printBtn = document.getElementById('print');
  html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.innerHTML = '';
    document.body.appendChild(canvas);
  });
})();

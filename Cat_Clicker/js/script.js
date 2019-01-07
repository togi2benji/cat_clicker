const picSelection = document.getElementById('CatPic');
var counter = 0;
picSelection.addEventListener('click', function(){
  counter++;
  var output = document.getElementById("text").innerHTML = 'Amount of clicks on the picture is '+counter;
  return output;
});

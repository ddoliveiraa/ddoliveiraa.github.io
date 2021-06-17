var r;
$(document).ready(function() {
$(function() {  
  $.ajax({
    type: "GET",
    url: "./js/projeto.json", // Using our resources.json file to serve results
    success: function(result) {
      console.log(result);
      r=result;
      }, 
    });
  });
  
}); 
document.getElementById("fon").innerHTML = r;



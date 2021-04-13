function mouseOver(x) {
      document.getElementById(x).style.backgroundColor = "yellow"
      document.getElementById(x).style.color = "black";
      }
  
  
  function mouseOut(x) {
            document.getElementById(x).style.backgroundColor = "green";
            document.getElementById(x).style.color = "white";
          }
              
var x = setInterval(function() {
  for (let index = 0; index <= 9; index++) {
    document.getElementById(index).onmouseover = function() {mouseOver(index)};
    document.getElementById(index).onmouseout = function() {mouseOut(index)};   
  }
    document.getElementById("C").onmouseover = function() {mouseOver("C")};
    document.getElementById("C").onmouseout = function() {mouseOut("C")};
    
    document.getElementById("=").onmouseover = function() {mouseOver("=")};
    document.getElementById("=").onmouseout = function() {mouseOut("=")};

    document.getElementById("+").onmouseover = function() {mouseOver("+")};
    document.getElementById("+").onmouseout = function() {mouseOut("+")};

    document.getElementById("-").onmouseover = function() {mouseOver("-")};
    document.getElementById("-").onmouseout = function() {mouseOut("-")};

    document.getElementById("*").onmouseover = function() {mouseOver("*")};
    document.getElementById("*").onmouseout = function() {mouseOut("*")};

    document.getElementById("/").onmouseover = function() {mouseOver("/")};
    document.getElementById("/").onmouseout = function() {mouseOut("/")};
  });

  //document.getElementById("C").addEventListener("click", getclick());

  function evil(fn) {
    return new Function('return ' + fn)();
  }

  function getclick(n) {
            if (n != "C" && n != "=") {
              document.getElementById('final').value = "";
              document.getElementById('cal').value += n;
            } else if (n == "C") {
              document.getElementById('cal').value = "";
              document.getElementById('final').value = "";
            } else{
              document.getElementById('final').value = evil(document.getElementById('cal').value);
            }
        }
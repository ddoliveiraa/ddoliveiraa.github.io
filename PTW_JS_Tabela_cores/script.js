function mouseOver(x) {
    switch(x) {
        case "green":
            document.getElementById("green").style.backgroundColor = "green"
          break;
        case "red":
          document.getElementById("red").style.backgroundColor = "red"
          break;
        case "blue":
            document.getElementById("blue").style.backgroundColor = "blue"
            break;
        case "yellow":
          document.getElementById("yellow").style.backgroundColor = "yellow"
          break;
      }
  }
  
  function mouseOut(x) {
        switch(x) {
            case "green":
                document.getElementById("green").style.backgroundColor = "white";
              break;
            case "red":
                document.getElementById("red").style.backgroundColor = "white";
              break;
            case "blue":
                document.getElementById("blue").style.backgroundColor = "white";
              break;
              case "yellow":
                document.getElementById("yellow").style.backgroundColor = "white";
              break;
          }
  }


var x = setInterval(function() {

    document.getElementById("green").onmouseover = function() {mouseOver("green")};
    document.getElementById("green").onmouseout = function() {mouseOut("green")};

    document.getElementById("blue").onmouseover = function() {mouseOver("blue")};
    document.getElementById("blue").onmouseout = function() {mouseOut("blue")};

    document.getElementById("red").onmouseover = function() {mouseOver("red")};
    document.getElementById("red").onmouseout = function() {mouseOut("red")};

    document.getElementById("yellow").onmouseover = function() {mouseOver("yellow")};
    document.getElementById("yellow").onmouseout = function() {mouseOut("yellow")};

  });
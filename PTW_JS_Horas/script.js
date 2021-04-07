var x = setInterval(function() {

    //////// Alternativa 1 ////////
    // Get today's date and time
    //var now = new Date().getTime();

    // Time calculations for days, hours, minutes and seconds
    //var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 1);
    //var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    //var seconds = Math.floor((now % (1000 * 60)) / 1000);

    //////// Alternativa 2 ////////
    var now = new Date();
    
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if(seconds%2 == 0){
        document.getElementById("demo").style.backgroundColor = "green"
    }else{
        document.getElementById("demo").style.backgroundColor = "blue"
    }
  }, 1000);
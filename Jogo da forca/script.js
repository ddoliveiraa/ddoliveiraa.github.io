function mouseOver(x) {
      document.getElementById(x).style.backgroundColor = "red"
      document.getElementById(x).style.color = "black";
      }
  
  
  function mouseOut(x) {
            document.getElementById(x).style.backgroundColor = "white";
            document.getElementById(x).style.color = "black";
          }
              

var list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];   

var words = ['AJAX', 'CSS', 'DOM', 'HTML', 'JAVASCRIPT','JQUERY', 'JSON', 'PHP', 'PROGRAMACAO', 'TECNOLOGIAS', 'WEB'];   

var word;

var letters = [];

var tries =0;

var saiu ;
  function returnword() {
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    return word;
    }

    function createspaces(word){
      for (i = 0; i < word.length; i++){
        var btn = document.createElement("P");
        // btn.innerText = word.charAt(i);
        btn.innerText = "_";
        btn.className = "word"
        btn.setAttribute("id", "l" + i);
        document.getElementById("word-container").appendChild(btn); 
      }
    }

    function createLetters(i){
        var p = document.createElement("input");
        p.type = "button";
        p.value = list[i];
        fon = list[i];
        p.setAttribute("id", list[i]);
        document.getElementById("botoes-container").appendChild(p); 
        
        p.onclick = function(){
          console.log(list[i]);
          cheackWord(list[i]);
        } ;
      }

      function cheackWord(letter){   
        cheack = false;
        saiu = false;
        for (i = 0; i < word.length; i++){
          if(letter == word.charAt(i)){
            console.log(letters.length);

              cheack = true;
              console.log("Encontrei");
              letters[letters.length] = letter;
              console.log(letters);
              document.getElementById("l" + i).innerHTML = letter;
              document.getElementById(letter).setAttribute('disabled','disabled');

            
          }
        }

        if(cheack == false){
          document.getElementById(letter).style.backgroundImage = "url('imagens/incorrect.gif')";
          tries++;
          wrong(tries);
          
          console.log(tries);
          if(tries >= 7){
            alert("Opsy parece que as tuas tentativas acabaram.\nHasta la vista, baby ;)\nPalavra era: "+ word);
           //window.location.reload(true);
          }
        }

        if(letters.length == word.length){
          alert("Parabéns!")
        }
      }

      function wrong(tries){
        console.log(tries);
        switch(tries){
          case 1: 
            document.getElementById("wrongs").src = "imagens/wrong-1.gif";
            document.getElementById("wrongs").className = "wrong-1";
          break;
          case 2: 
            document.getElementById("wrongs").src = "imagens/wrong-2.gif";
            document.getElementById("wrongs").className = "wrong-2";
          break;
          case 3: 
            document.getElementById("wrongs").src = "imagens/wrong-3.gif";
            document.getElementById("wrongs").className = "wrong-3";
          break;
          case 4: 
            document.getElementById("wrongs").src = "imagens/wrong-4.gif";
            document.getElementById("wrongs").className = "wrong-4";
          break;
          case 5: 
            document.getElementById("wrongs").src = "imagens/wrong-5.gif";
          break;
          case 6: 
            document.getElementById("wrongs").src = "imagens/wrong-6.gif";
          break;
          case 7: 
            document.getElementById("wrongs").src = "imagens/wrong-7.gif";
            document.getElementById("wrongs").className = "wrong-7";
          break;
        }

      }
    
    
var x = setInterval(function() {
  for (let index = 0; index< list.length; index++) {
    document.getElementById(list[index]).onmouseover = function() {mouseOver(list[index])};
    document.getElementById(list[index]).onmouseout = function() {mouseOut(list[index])};   
  }
  });

  //document.getElementById("C").addEventListener("click", getclick());



// Create cenas
for (i = 0; i < list.length; i++){
  window.createLetters(i);
}

window.createspaces(window.returnword());


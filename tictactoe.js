var player1;
var player2;
var check;
function You() {
      player1 = playerone.value;
           if (res.innerHTML = playerone.value) {
            // res.innerHTML = playerone.value+'successfully registered';
           showing.innerHTML= ("");               
      }
       player2 = playertwo.value;
      if (good.innerHTML = playertwo.value) {
            showing2.innerHTML= ("Begin The Game (Good Luck 🎉🎉✨✨ )");  
               
            
      }else{
            good.innerHTML = ("Waiting For Player");

            showing2.innerHTML= ("Waiting For Player")

         

            showing.innerHTML= ("Waiting For Player")
      }
      if (player1 == "") {
            alert("is empty")
            show();
      }
     
}
var myVar = setInterval(clock, 1000);

function clock() {
     faith= new Date();
    gun.innerHTML = faith.toLocaleTimeString();
    a=faith.getHours();
    b=faith.getMinutes();
    c=faith.getSeconds();

    setTimeout(clock, 1000)
    
} 
clock();

let active = 'x'
function show (e){
      player1 = playerone.value;
      if (player1 == "") {
            showing2.innerHTML = 'REGISTER YOUR NAME  MAM / SIR '
            e.target.innerHTML = '';
      }
      else{
            if(e.target.innerText || check ){
                  return
            } else if(active == 'x'){
                  e.target.innerHTML = 'x'
                  active = 'o'
                  showing2.innerHTML = player2 + ' turn'
            } else {
                  e.target.innerHTML = 'o'
                  active = 'x'
                  showing2.innerHTML = player1 + ' turn'
            }
      }
      


      if (
           (one.innerText == 'o' && five.innerText == 'o' && nine.innerText == 'o')||
           (three.innerText == 'o' && five.innerText == 'o' && seven.innerText == 'o') ||
           (two.innerText == 'o' && five.innerText == 'o' && eight.innerText == 'o') ||
           (one.innerText == 'o' && four.innerText == 'o' && seven.innerText == 'o')||
           (four.innerText == 'o' && five.innerText == 'o' && six.innerText == 'o')||
           (seven.innerText == 'o' && eight.innerText == 'o' && nine.innerText == 'o')||
           (one.innerText == 'o' && two.innerText == 'o' && three.innerText == 'o') ||
           (three.innerText == 'o' && six.innerText == 'o' && nine.innerText == 'o')
     ) {

      showing2.innerHTML=(player2 + " won ✨✨🎉🎉🎊🎉 ");
      ++scoreboard2.innerHTML;
          check = true
  
     } 
     
      if (
            (one.innerText == 'x' && five.innerText == 'x' && nine.innerText == 'x')||
            (three.innerText == 'x' && five.innerText == 'x' && seven.innerText == 'x') ||
            (two.innerText == 'x' && five.innerText == 'x' && eight.innerText == 'x') ||
            (one.innerText == 'x' && four.innerText == 'x' && seven.innerText == 'x')||
            (four.innerText == 'x' && five.innerText == 'x' && six.innerText == 'x')||
            (seven.innerText == 'x' && eight.innerText == 'x' && nine.innerText == 'x')||
            (one.innerText == 'x' && two.innerText == 'x' && three.innerText == 'x') || 
            (three.innerText == 'x' && six.innerText == 'x' && nine.innerText == 'x')
      ) {
            showing2.innerHTML=(player1 + " won ✨✨🎉🎉🎊🎉 ");
            ++scoreboard.innerHTML;
            console.log(body.innerHTML);
            
            check = true
            
      } else if ((one.innerText == 'x' || one.innerText == 'o') && (two.innerText == 'x' || two.innerText == 'o') && (three.innerText == 'x' || three.innerText == 'o') && (four.innerText == 'x' || four.innerText == 'o') && (five.innerText == 'x' || five.innerText == 'o') && (six.innerText == 'x' || six.innerText == 'o') && (seven.innerText == 'x' || seven.innerText == 'o') && (eight.innerText == 'x' || eight.innerText == 'o') && (nine.innerText == 'x' || nine.innerText == 'o')) {
            showing2.innerHTML=("It Is a draw please continue 😒😒😒😒")
      }

}


function Continue(){
      check = false

      body.innerHTML = `<tr border:2px>
      <td><button id="one" onclick="show(event)"></button></td>
      <td><button id="two" onclick="show(event)"></button></td>
      <td><button id="three" onclick="show(event)"></button></td>
  </tr>
  <tr>
      <td><button id="four" onclick="show(event)"></button></td>
      <td><button id="five" onclick="show(event)"></button></td>
      <td><button id="six" onclick="show(event)"></button></td>
  </tr>
  <tr>
      <td><button id="seven" onclick="show(event)"></button></td>
      <td><button id="eight" onclick="show(event)"></button></td>
      <td><button id="nine" onclick="show(event)"></button></td>
  </tr>`
  console.log(body.innerHTML);

}
function Session(){
      location.reload();
}

var x = document.getElementById('coded');
function son(){
    x.play();
}
function sof(){
    x.pause();
}
var x = document.getElementById('nice');
function son(){
    x.play();
}
function sof(){
    x.pause();
}
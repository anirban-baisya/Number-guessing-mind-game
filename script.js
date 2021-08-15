var guess = Math.floor(Math.random() * 100) + 1; //this is a pre generated no. ; 100is max vale

// 0 to <1

//0.123456*100 = 12.3456 = 12

//0.00002*100 = 0.002 = 0
//0.9999*100 = 99.99 = 99
// 0 to 99 -----> 1 to 100

function calc() {
  if (document.getElementById("U_input").value == "") {
    //if the input box is empty

    document.getElementById("result").innerHTML = "Enter a number";
    return;
  }

  var n = parseInt(document.getElementById("U_input").value); //storng the input value in n

  if (n === guess)
    //if user entered value is same as guess value then congo!
    document.getElementById("result").innerHTML =
      "Congrats! You got it correctly!";
  else if (n > guess)
    //if user entered value is greater
    document.getElementById("result").innerHTML = "Guess a small number";
  //if user entered value is smaller
  else document.getElementById("result").innerHTML = "Guess a greater number";
}

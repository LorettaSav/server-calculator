const express = require("express");
const app = express();
//const bodyParser = require("body-parser");

app.get("/" , function(req,res) {
  res.sendFile( __dirname +"/index.html"); //__dirname is a constant that gets the whole path
  //we use it in servers because the relative path wont work
});

 var data = app.use(express.urlencoded({extended: true}));
 var n1;
 var n2;
 var sum;

 function hasNumber(myString) { //to check if string contains anything but numbers
  return /\d/.test(myString);
}

app.post("/" , function(req,res) {
  n1 = Number(req.body.num1);
  n2 = Number(req.body.num2); 
  sum = n1 + n2;
  var difference = n1 - n2;
  var division = n1 / n2;
  var multiplication = n1 * n2;
  
  //check if user entered numbers
  if (hasNumber(n1) && hasNumber(n2)) {
    //check which button was submitted
    let inputValue = req.body.submit;
    switch (inputValue) {
      case "sum":
        res.send("the answer is " + sum );
        break;
      case "retraction":
        res.send("the answer is " + difference );
        break;
      case "division":
          res.send("the answer is " + division );
          break;
      case "multiplication":
        res.send("the answer is " + multiplication );
        break;
      default:
        break;
    }
  } else {
    res.send("please enter valid numbers");
  }
});

app.listen(3000, function() {
  console.log("hiya");
})

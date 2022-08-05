var fn = prompt("Enter your first name");

var ln = prompt("Enter your last name");

var age = prompt("Enter your age");

var tall = prompt("Enter your height");

var pet = prompt("Enter the name of your pet");


if (fn[0] == ln[0]){
  if (age >= 20 && age <=30){
    if (tall>=170) {
      if(pet[0] == "y"){
          console.log("You are a spy");
      }
    }
  }
}else{
  console.log("You are not a spy");
}

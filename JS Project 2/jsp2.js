var roster = []
function add(){
  var add = prompt("Enter your name !");
  roster.push(add)
}
function remove(){
  var rmvname = prompt("Enter the name you want to remove");
  roster.indexAt(rmvName)
  roster.splice(rmvName,1)
}
function display(){

  console.log(roster);
}

var start = prompt("Start for y, quit for n")
var req = "empty"



if (start === "y"){
  while(req != "quit"){
    req = prompt("Please select an option: add, remove, display or quit")
      if (req === "add"){
        add()
      }else if (req === "remove"){
        remove()
      }else if(req === "display"){
        display()
      }else{
        alert("Not recognized")
        //req = "quit"
      }
  }
}

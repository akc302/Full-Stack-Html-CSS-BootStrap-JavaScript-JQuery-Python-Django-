function stringTimes(str, n){

  var rtstr = "";
  for(var i = 1; i<=n; i++){
    rtstr = rtstr+ str;
  }
  console.log(rtstr);


}

function addStr(str){
  console.log(str +" is awesome");
}


var arr= ["python", "java", "GoLang"]


arr.forEach(addStr)

var emp = {
name : " john smith",
age : 31,
job: "Programmer",
nameLength: function(){
    console.log(this.name.length)

}
report: function(){  console.log(this.name +" "+this.job)}



lastName: function(){
  console.log(this.name.split(" ")[1])
}

}

emp.nameLength()
emp.report()
emp.lastName()

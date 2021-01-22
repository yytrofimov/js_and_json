 
const text = '{  "name":"Prakticum Paul", "street":"Jan Magnus Janssons plats 5","phone":"555 1234567"}'; 
const obj = JSON.parse(text); 

document.getElementById("demo").innerHTML = obj.name + "<br>" + 
obj.street + "<br>" + 
obj.phone; 

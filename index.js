


var obj = {
    Name: "Aqsa",
    Age: "19",
    City: "khanpur",
}
console.log(obj["Age"])
console.log(obj["Name"])
console.log(obj["City"])
console.log(obj)



var array =[
   { Name: "Aqsa",Age: "19", City: "Ryk"},
   { Name: "Alisha",Age: "20", City: "sdk"},
    {Name: "Misty",Age: "18", City: "khanpur"},
    {Name: "Iqra",Age: "23", City: "sajha"},
]
console.log(array)
console.log(array["2"])
console.log(array["1"])
console.log(array["0"])
console.log(array["3"])


for ( var i = 0; i<=array.length; i++){
    console.log(array[i])
}

for ( var i = 0; i<=3; i++){
    console.log(array[i])
}
for ( var i = 0; i<=2; i++){
    console.log(array[i])
}
for ( var i = 0; i<=1; i++){
    console.log(array[i])
}
for ( var i = 0; i<=0; i++){
    console.log(array[i])
}

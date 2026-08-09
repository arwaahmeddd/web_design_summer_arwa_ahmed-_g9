var degree = prompt("enter your degree")
degree = Number(degree)
if (degree > 90) {
    console.log("A")
}
else if (degree >= 80 && degree <= 90) {
    console.log("B")
}
else if (degree >= 70 && degree < 80) {
    console.log("C")
}
else {
    console.log("F")
}
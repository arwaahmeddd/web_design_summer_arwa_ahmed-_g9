var courses = ["HTML", "CSS", "JavaScript"];
var course = prompt("Enter course name:");
var index = courses.indexOf(course);
if (index != -1) {
    console.log(index);
}
else {
    courses.push(course);
    console.log(courses);
}
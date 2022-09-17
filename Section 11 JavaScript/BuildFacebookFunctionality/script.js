var database = [
    {
        username: "Hero",
        password: "Zero"
    }
]

newsfeed = [
    {
        username: "Java",
        timeline: "Java is hyped"
    },
    {
        username: "Python",
        timeline: "Python is all-rounder"
    },
    {
        username: "C++",
        timeline: "C++ is too old - but they say old is gold"
    }
]

var userName = prompt("Enter your userName: ");
var password = prompt("Enter your password: ");

function signIn(userName, password){
    if(database[0].username === userName && database[0].password === password){
        console.log(newsfeed);
    }
    else{
        alert("Sorry wrong user name or password !");
    }
}

signIn(userName, password);
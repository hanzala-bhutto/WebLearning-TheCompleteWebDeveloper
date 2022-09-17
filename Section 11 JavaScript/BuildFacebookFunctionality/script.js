var database = [
    {
        username: "Hero",
        password: "Zero"
    },
    {
        username: "Meow",
        password: "Kiri"
    },
    {
        username: "Woof",
        password: "Hush"
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

function isUserValid(userName,password){
    for(var i=0 ; i<database.length; i++){
        if(database[i].username === userName && database[i].password === password){
            return true;
        }
    }
    return false;
}

function signIn(userName, password){
    var valid = isUserValid(userName,password);
    if (valid){
        console.log(newsfeed);
    }
    else{
        alert("Sorry wrong user name or password !");        
    }
}

signIn(userName, password);
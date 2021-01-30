
let friends = [
    {name : "Jose", age=99},
    {name : "Ahmad", age=98},
    {name : "Ashik", age=97},
    {name : "Aslan", age=96},
    {name : "Brujo", age=95},
    {name : "Dries", age=94},
]

// ! Long way : ========================================

let myFriends = [];

for ( let i= 0; i<friends.length;i++){

    if(friends[i].age > 96){
        myFriends.push(friends[i]);
    }

}

// ! Filter Method with classic Function : ==================


let myFriends = friends.filter(
    function (e){
        return e.age > 96; 
    }
);

// ! Filter Method with less syntax (Arrow Func) : ==================

let myFriends = friends.filter( e => e.age > 96)
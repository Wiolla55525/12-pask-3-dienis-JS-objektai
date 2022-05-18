/*let countries = [
    ["Peru", 31826018,1285216],
    ["Filipinai", 103796832, 300000],
    ["Portugalija", 10260000, 92212],
    ["Lietuva", 2814696, 65300],
    ["Meksika", 130222815, 1972550]
]

console.log(countries[0]);

console.log(countries[0][0]);

for(let item of countries) {
    const country = item[0];
    const gyventojai = (item[1]/1000000).toFixed(2);
    const plotas = item[1];
    const plotasGyventojui = plotas / item[1];
    const atsakymas = `Salis: ${country}, joje gyvena ${gyventojai}mln. gyventoju, valstybes plotas - ${plotas} km^2, plotas, tenkantis vienam gyventojui - ${plotasGyventojui} m^2 </br> `
    document.write(atsakymas);
}


*/


/*const doors = {
    key: 'secretKey',
    color: 'red',
    uniquecode: 1234,
    isOpen: false,
    isClosed: true,
    open: function () {
      //  console.log('Door is opening');
        if (doors.isOpen === true && doors.isClosed === true) {
            return 'Doors are open'
        } else if (
            doors.isOpen = true && doors.isClosed === false
           { return     'I am opening the doors'}
        )else (
            doors.isOpen === false && doors.isClosed === true;
            {return 'I am closing doors'}
        )

        }
    
    obj:{},
}

console.log(typeof doors);
console.log(doors.color)
console.log(doors.obj)
console.log(doors.open());

*/

/*
const cars = {
    type: "BMW", price: '30.000',
    type: "MERCEDES", price: '35.000',
    type: "HONDA", price: '18.000',
    type: "VOLVO", price: '25.000',
    obj:{}

    .forEach(myFunction),

    function myFunction(type) {
        return 
        `${type} price is $${price}`
    }

}
console.log(typeof cars);
*/

const cars = [
    {type: "BMW", price: '30.000'},
    {type: "MERCEDES", price: '35.000'},
    {type: "HONDA", price: '18.000'},
    {type: "VOLVO", price: '25.000'},
];

cars.forEach(function(cars))
cars.forEach(type => console.log(cars.type));
forEach(function(type))

const carsType = cars.type;
cars.type
/*
`${type} car price $${price}`
cars.forEach(myFunction);

function myFunction(item) {
    return 
    `${type} price is $${price}`
}
console.log(typeof cars)
*/

/*
let savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney (amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
   /* withdraw: function removeMoney (amount) {
               let verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -=amount;
        }
    },
    */
   /*
    withdraw: function removeMoney () {
        let verifyBalance = savingsAccount.balance - amount;
 if (amount > 0 && verifyBalance >= 0) {
    
     savingsAccount.balance -=amount;
 }
},
    


    }
    printAccountSummary: function printAccountSummary(){

        return (
        `Welcome! \nYour balance is currently $${savingsAccount.balance},
and your interest rate is ${savingsAccount.interestRatePercent}%`
        )

},
};

console.log(savingsAccount.printAccountSummary());
//document.write(savingsAccount.printAccountSummary());


*/
/*
const facebookProfile = {
    name: 'Vio',
    friends: 0,
    messages: [],

postMessage: function (message) {
    facebookProfile.messages.push(message);
},
deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1)
},
addFriends: function () {
    facebookProfile.friends +=1;
},
removeFriends: function () {
    facebookProfile.friends = facebookProfile.friends - 1;
}
};

console.log(facebookProfile.messages);
facebookProfile.postMessage("My first name");
facebookProfile.postMessage("Sveiki visi");
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);

console.log('Friends:', facebookProfile.friends);
facebookProfile.addFriends();
facebookProfile.addFriends();
console.log('Friends:', facebookProfile.friends)

*/


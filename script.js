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

let savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney (amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney (amount) {
               let verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -=amount;
        }
    },
    printAccountSummary: function printAccountSummary(){

        console.log (
        `Welcome! \nYour balance is currently 
        $${savingsAccount.balance},
        and your interest rate is 
        ${savingsAccount.interestRatePercent}%`
        )

},
};

//console.log(savingsAccount.printAccountSummary());
document.write(savingsAccount.printAccountSummary);

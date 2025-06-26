let userAge=''
let userName=''
let birthYear=''
let daysAlive=''
const afterJesus=2025
const daysYear=365

function calculateAge() {
 userAge=prompt('what is your Age?');
userAge= parseInt(userAge);

}

function getName() {
 userName=prompt('What is your Name?');
}

function userGreet() {
     getName()
    calculateAge() 
   daysLived()
alert('Hello ' + userName + '!'+'You are ' + userAge +' yeras old.' + 
      ' You were born in ' + birthYear + '.'+ 'You have been alive for approximately '+ daysAlive +'.');




}

function daysLived() {
     birthYear= afterJesus - userAge;
    daysAlive= userAge * daysYear;

console.log(afterJesus +'-' + userAge + '=' + birthYear);
console.log(userAge + '*' +daysYear +'=' +daysAlive );
}
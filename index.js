// #create a function to write thankyou messages for friends
const birthdayMessages=[]
const names=["Charlie", "Samip", "Ali"]

function writeCards(names,event){
    for (let i=0;i<names.length;i++){
        birthdayMessages.push(`Thankyou ${names[i]} for the ${event} wishes`);
    }
    return birthdayMessages;
}

console.log(writeCards(names,"birthday"));



function countDown(number){
    let i=number;
    while(i>=0){
      console.log(`${i}`)
      i--;
    };
  }
console.log(countdownTimer(4));


//Q.1 Write a program that uses a for loop to output the numbers from 1 to 10 to the console.
console.log("numbers from 1 to 10");
for(let number=1; number<=10;number++)
{
    console.log(number);
}
//Q.2 Write a program that uses a for loop to print even numbers from 0 to 20.
console.log("Even Numbers:")
for(let even=0; even<=20; even=even+2)
{
    console.log(even);
}
//Write a program to print fabonacci series.
console.log("Fabonacci Series");
let firstNumber=0;
let SecondNumber=1;
let thirdnumber=1;
console.log(firstNumber);
console.log(SecondNumber);
for(let i=0; i<=20; i++)
{
   let sum=thirdnumber+SecondNumber;
    firstNumber=SecondNumber;
    SecondNumber=thirdnumber;
    thirdnumber=sum;
    console.log(SecondNumber);
}
//Print a table for a certain number entered by a user using for loop.
console.log("Table");
let number=prompt("Please enter a number");
for(start=1;start<=10;start++)
{
console.log(`${number}*${start}=${number*start}`);
}
//Question No.2
//part 01: Calculate the average scores for both teams.
const dolphinsdata1=[96,108,89];
const dolphinsdata2=[97,112,101];
const dolphinsdata3=[97,112,101];
const koalasdata1=[88,91,110];
const koalasdata2=[109,95,123];
const koalasdata3=[109,95,123];

for(let i=0;i<3;i++)
{
    const DolphinAverage=(eval(`dolphinsdata${i}`)[0]+eval(`dolphinsdata${i}`)[1]+eval(`dolphinsdata${i}`)[2])/3;
    const KoalasAverage=(eval(`koalasdata${i}`)[0]+eval(`koalasdata${i}`)[1]+eval(`koalasdata${i}`)[2])/3;
    console.log(DolphinAverage);
    console.log(KoalasAverage);
    if(DolphinAverage>KoalasAverage){
        console.log("Winner=Dolphins")
    }
    else if(KoalasAverage>DolphinAverage){
        console.log("Winner=Koalas")
    }
    else{
        console.log("its a draw");
    }
    
}

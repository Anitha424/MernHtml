// console.log("yt");
// let obj1={age:33};
// let obj2=obj1;
// obj2.age=44;
// console.log(obj1.age);

// logical operators
// let a=true;
// let b=false;
// if(a||b)
// console.log("hello");
// else
// console.log("bye");

// functions
// function sum(a,b){
//     console.log(a+b);
// }
// const sum2=(a,b,c)=>{
//     console.log(a+b+c);
// }
// sum2(11,22,33);
// sum2(100,200,300);

//map - pass the element into parmeter and pass a new element
//double - used to double the given elements
// function double(num){
//     return num*2;
// }
// let arr=[1,2,3,4,5];
// let doubledArr=arr.map(double);
// console.log(doubledArr);
// const tripledArr=arr.map((num)=>num*3);
// console.log(tripledArr);
// const squaredArr=arr.map(num=>num*num);
// console.log(squaredArr);
// //filter - filter the elements based on the condition
// //odd and even numbers
// const oddArr=arr.filter(num=>num%2!=0);
// console.log(oddArr);
// if(oddArr===oddArr){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// function isOdd(num){
//     return num%2!=0;
// }
// let oddNumber=arr.filter(isOdd);
//     console.log(oddNumber);
//     let doubleOdd=oddNumber.map(double);
//     console.log(doubleOdd);

    // let array=[5,11,15,30,45,68,67,80,90];
    // return num%5===0;           
    
    // console.log(newArray);

    //reduce - total array reduce to single element
    // let array1=[1,2,3,4,5,6];
    // let sum=array1.reduce((product,current)=>{return product*current},1);
    // console.log(sum);

    // let array2=[10,20,30,40,50];
    
    // let tripplesum=array2.map(num=>num*3);
    // let evennum=tripplesum.filter(num=>num%2===0);
    // let sum=evennum.reduce((sum,current)=>sum+current,0);
    // console.log(sum);

    // let arr=[1,2,3,4,5,6];
    // let ans=arr.map(num=>num*3).filter(num=>num%2===0).reduce((sum,current)=>{ return sum+current;},0);
    // console.log(ans);

    // //restructure
    // let b=[1,2,3,4,5,6];
    
    // const [one,...two]=b;
    
    // console.log(two);
    // let num=[0,...b,7,8,9];
    // console.log(num);

    // const obj1={x:3,y:5}
    // const obj2={x:4,y:6}
    // const spread={...obj1,...obj2}
    // console.log(spread);

    // const promise=new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         const success=true;
    //         if(success){
    //             resolve("promise resolved");
    //         }
    //         else{
    //             reject("promise rejected");
    //         }
    //     },2000);
    // });

    //json 
    // fetch('https://jsoneditoronline.org/')
    // .then(response=>response.json())
    // .then(data=>console.log(data))

    //string literals
    let name="anitha";
    let age=22;
    console.log(`my name is ${name} and my age is ${age}`);
    


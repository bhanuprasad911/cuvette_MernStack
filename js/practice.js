// // console.log("First step..!");
// // setTimeout(()=>console.log("second step"), 3000);
// // console.log("Third step..");
// function changeObj(obj){
//     obj.city='Hyderabad';
//     obj.country='India';
//     obj.mother.country="india";
//     return obj
// }
// const person={
//     name:"jane",
//     age:22,
//     mother:{
//         name:"saritha",
//         age:40,
//         city:"Hyderabad"
//     }
// }
// console.log(changeObj(person));
// console.log(globalThis);
// const animal= {
//     species:"FAUNA"
// }
// const dog = new Object(animal);
// dog.breed="LAB";
// console.log(dog.species);
// console.log(dog);
// var bhanu
// bhanu="Bhanu";
// console.log(bhanu);
function fetchData(){
    console.log("fetching data")
    return new Promise((resolve, reject)=>{
        const success = 1;
        setTimeout(()=>{
            console.log("executing timeout function")
            if (success){
                resolve({name:"Bhanu", number:8328252312});
            }
            else{
                reject("failedd to fetch data")
            }
        },3000)
    })
    
}
async function fetch() {
    try{
        const data = await fetchData();
        console.log(data);
        
    }catch(e){
        console.log(e);
    }
}

fetch()
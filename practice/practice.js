// function a(input, func){
//     console.log("processing uses input...!")
//     return func(input);
// }

// function test (input){
//     console.log(`input:${input}`);
// }

// a("bhanu", test);


// Closure in js used to access the variables out of their scope

// function first(){
//     var x= 10;
//     function inner(){
//         console.log(x);
//     }
//     return inner;
// }
// var x=first();
// x();

//call, apply and bind are used to manipulate 'this' operator between differend objects


// var btn = document.getElementById("btn1");
// var datadiv = document.getElementById("data1");

// btn.addEventListener("click", dataload)

// function dataload(){

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'testt.txt',true);
//     xhr.send();
//     xhr.onprogress = ()=>{
//         datadiv.innerText="loading...!"
//     }
//     xhr.onload = function(){
//         if (xhr.status >= 200 && xhr.status < 300) {
//             datadiv.innerText = xhr.responseText;
//             }
//             }
//     xhr.onerror = function(){
//         datadiv.innerText = "error";
//         }
       

    
//     }


function step(){
    setTimeout(()=>{
        console.log("step 1");
    }, 2000);
    setTimeout(()=>{
        console.log("step 2");
    },2000)
}

function step1(){
    setTimeout(() => {
        console.log("step 1 in step 1")
        setTimeout(()=>{
            console.log("step 2 in step 1")
        })
    }, 2000);
}

step();
step1();



function changeObj(obj){
    obj.city='Hyderabad';
    obj.country='India';
    obj.mother.country="india";
    return obj
}
const person={
    name:"jane",
    age:22,
    mother:{
        name:"saritha",
        age:40,
        city:"Hyderabad"
    }
}
console.log(changeObj(person));
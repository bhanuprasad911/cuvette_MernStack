function evenEle(arr){
    let even =[]
    for (let i =0;i<arr.length;i++){
        if (arr[i]%2==0){
            even.push(arr[i]);
        }
    }
    return even;

}
console.log(evenEle([1,2,3,4,5,6,7,8,9,0]))

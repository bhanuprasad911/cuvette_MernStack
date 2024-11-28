function countEle(arr,n){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === n){
            count++;
        }
        }
    return count
}
console.log(countEle([8,3,2,8,2,5,2,3,1,2],2));
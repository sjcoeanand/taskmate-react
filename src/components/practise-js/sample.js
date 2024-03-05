
// fibonacci
function findFibNumber(n){
    let fibarray = [0,1];
    for(let i = 2; i<=n; i++){
        fibarray.push(fibarray[i-1] + fibarray[i-2])
    }
    console.log('f', fibarray);
    return fibarray
}
findFibNumber(9)


// promise
 new Promise( (resolve, reject) => {
    resolve('Success')
}).then( (resp) => {
    console.log(resp)
})

// reverese given array with no pre method
let a = [3,5,6,1,0,4];

function b1(a1) {
    let b = [];
    for(let i=a1.length -1; i >= 0; i--){
        b.push(a1[i]);
    }
    console.log(b);
    return b
}
b1(a);

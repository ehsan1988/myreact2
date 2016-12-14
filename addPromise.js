function addPromise(a,b) {
    return new Promise(function (resolve,reject) {
        if(typeof a==="number" && typeof b==="number"){
            resolve(a+b);
        }
        else {
            reject('not number')
        }
    })
}
addPromise(5,5).then(function (sum) {console.log('sahih ast',sum)},function (error) {console.log('sahih nist',error)});
function myname(name) {
    return new  Promise(function (resolve,reject) {
        if(typeof name==='string'){
            resolve('good choise');
        }
        else{
            reject('u must enter string');
        }

    })

}
myname('iman ahmadi').then(function () {
    console.log('salam')
},function () {
    console.log('ghalat')
})

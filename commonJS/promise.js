const testPromise = new Promise ((resolve, reject)=>{
    console.log('timeout started');
    setTimeout(() => {
        console.log('timeout finished');
        if(Boolean(+((new Date()).getSeconds())%2)){
            resolve(console.log('success'));
        }
        else {
            console.log('failure')
            reject('err')
        }
    }, 1000);
})


module.exports = testPromise;
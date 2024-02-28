
const callAsyncAwait = () =>{ (async function(){
    console.log('simple async-await case')
    
    const newPromise = new Promise ((resolve, reject)=>{
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

    
     try {
         const successResult = await newPromise;
         console.log('Async call success: ', successResult);
     } catch(error) {
         console.log('Async call failed: ', error);
     }
})();}

export default callAsyncAwait
console.log('simple async-await case')

const asyncCase = (async function(){
     try {
         const successResult = await require('./promise');
         console.log('Async call success: ', successResult);
     } catch(error) {
         console.log('Async call failed: ', error);
     }
})();

module.exports = asyncCase
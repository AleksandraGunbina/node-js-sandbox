console.log('classic Promise case:')

const classicPromise = require('./promise').then(state=>{
     console.log('then detected', state);
 }).catch(err=>{
     console.log('catch detected', err);
 }).finally(()=>{
     console.log('finally detected');
 });


 module.exports = classicPromise
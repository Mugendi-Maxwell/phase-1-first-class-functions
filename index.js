 function receivesAFunction (callback){
     callback();
 }
 function returnsANamedFunction (){
  const named = function inner (){console.log('named inner function')}
  return named
     
 }
 function returnsAnAnonymousFunction(){
  return  function (){console.log("crazy day")}
  
 }
 
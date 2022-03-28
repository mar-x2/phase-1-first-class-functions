function receivesAFunction(callback){
    return callback();
    };
    
    function returnsANamedFunction(){
    let namedFunction = () => {};
      return namedFunction;
    }
    
    function returnsAnAnonymousFunction(){
       return () => '';
   };
    
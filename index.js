function  receivesAFunction(callback){
    callback();
}
function  returnsANamedFunction(){
    function namedFunction(){
        console.log("this is a named function !");
    }

    return  namedFunction;
}
function  returnsAnAnonymousFunction(){
    return function(){
        console.log("This is an anonymous function!");
    };
}
function receivesAFunction(spy) {
    console.log(spy());
}

function returnsANamedFunction() {
    return function myFunction() {
        console.log("string in my function");
    }
}


function returnsAnAnonymousFunction() {
    return function () {
        console.log("sting inside anon function");
    }
}

console.log(returnsANamedFunction());
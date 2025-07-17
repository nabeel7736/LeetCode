/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        let output= "Hello World"
        return output
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
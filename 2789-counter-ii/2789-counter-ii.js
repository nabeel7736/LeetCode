/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let curntvalue =init
    return{
        increment: function(){
            return ++curntvalue
        },
         decrement: function(){
            return --curntvalue
        },
         reset: function(){
            curntvalue =init
            return curntvalue
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
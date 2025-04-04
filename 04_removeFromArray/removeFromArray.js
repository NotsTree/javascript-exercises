const removeFromArray = function() {
    const args = Array.from(arguments);
    const array = args[0];
    const itemsToRemove = args.slice(1);
    
    return array.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

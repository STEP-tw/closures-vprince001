const makeConstant = function(value) {
  return function() {
    return value;
  };
};

const makeCounterFromN = function(countInitializer) {
  let counter = countInitializer;
  return function() {
    return counter++;
  };
};

const makeCounterFromZero = function() {
  return makeCounterFromN(0);
};

const makeDeltaTracker = function(initialValue) {
  let tracker = {old : initialValue, new : initialValue};
  return function(deltaValue) {
    if(!deltaValue){
      deltaValue = 0;
    }
    tracker.old = tracker.new;
    tracker.delta = deltaValue;
    tracker.new = tracker.delta + tracker.old;
    let result = Object.assign({}, tracker);
    return result;
  };
};

const makeFiboGenerator = function(second = 1, first = 0 ) {
  let previous = Math.min(first,second);
  let present = Math.max(first,second);
  return function(){
    let result = previous;
    let next = previous + present;
    previous = present;
    present = next;
    return result;
  };
};

const makeCycler = function(collection) {
  let currentIndex = 0;
  let copyOfCollection = collection.slice("");
  return function() {
    let sizeOfCollection = copyOfCollection.length;
    let indexToReturnValueOf = currentIndex % sizeOfCollection;
    currentIndex++;
    return copyOfCollection[indexToReturnValueOf];
  };
};

const curry = function(combiner, initialValue) {
  return function(valueToCombine, anotherValueToCombine) {
    return combiner(initialValue, valueToCombine, anotherValueToCombine);
  };
};

const compose = function(firstOperation, secondOperation){
  return function(firstCollection, secondCollection) {
    let output  = firstOperation(secondOperation(firstCollection, secondCollection));
    return output;
  };
};

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;

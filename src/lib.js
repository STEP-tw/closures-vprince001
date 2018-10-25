const makeConstant = function(input) {
  return constantlyReturnTwo  = function() {
    return input;
  }

  return constantlyReturnString = function() {
    return input;
  }

  return constantlyReturnArray = function() {
    return input;
  }

  return constantlyReturnObject = function() {
    return input;
  }
}

const makeCounterFromN = function(input) {
  let count = input;
  return countApples = function() {
    return count++;
  }

  return countMangoes = function() {
    return count++;
  }

  return countOranges = function() {
    return count++;
  }

  return countGrapes = function() {
    return count++;
  }
};

const makeCounterFromZero = function() {
  let count = 0;
  return function() {
    return count++;
  }
}

const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;

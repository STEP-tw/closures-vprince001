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

const makeDeltaTracker = function(old) {
  let deltaTracker = {old:0, delta:0, new:0};
  return trackDelta = function(delta) {
    deltaTracker.old = old;
    deltaTracker.delta = delta;
    if(delta == undefined) {
      deltaTracker.delta = 0;
    }
    deltaTracker.new = deltaTracker.old + deltaTracker.delta;
    old = deltaTracker.new;
    return deltaTracker;
  }
}

const makeFiboGenerator = function(input1, input2) {
  let limit = 1;

  return getNextFiboNumber = function() {
    let numToMultiply = input1;
    if(numToMultiply == undefined || input2 != undefined){
      numToMultiply = 1;
    }

    let firstTerm = input1;
    let secondTerm = input2;
    if(input1 == undefined || input2 == undefined) {
      firstTerm = 0;
      secondTerm = 1;
    }
    for(let term = 1; term < limit; term++){
      sum = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = sum;
    }
    limit++;
    return firstTerm*numToMultiply;
  }
}

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

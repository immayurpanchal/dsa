// subSequence("", "abc")
function subSequenceArray2(processed, unprocessed, arr) {
  if (!unprocessed) {
    arr.push(processed);
    // RETURN NOTHING!!!
    return;
  }

  // take it - "a", "bc"
  subSequenceArray2(processed + unprocessed[0], unprocessed.substr(1), arr);
  // ignore it - "", "bc"
  subSequenceArray2(processed, unprocessed.substr(1), arr);
}

const ansArr = [];
subSequenceArray2('', 'abc', ansArr);
console.log(ansArr);

// RETURN THE ARRAY
// subSequence("", "abc")
function subSequenceArray3(processed, unprocessed, arr) {
  if (!unprocessed) {
    arr.push(processed);

    // RETURN THE FINAL ANS ARRAY
    return arr;
  }

  // take it - "a", "bc"
  subSequenceArray3(processed + unprocessed[0], unprocessed.substr(1), arr);
  // ignore it - "", "bc"
  subSequenceArray3(processed, unprocessed.substr(1), arr);
  return arr;
}

console.log(subSequenceArray3('', 'abc', []));

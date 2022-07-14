// subSequence("", "abc")
function subSequenceArray2(processed, unprocessed, arr) {
  if (!unprocessed) {
    arr.push(processed);
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

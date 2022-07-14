// subSequence("", "abc")
function subSequenceArray(processed, unprocessed) {
  if (!unprocessed) {
    const arr = [processed];
    return arr;
  }

  // take it - "a", "bc"
  const left = subSequenceArray(
    processed + unprocessed[0],
    unprocessed.substr(1)
  );
  // ignore it - "", "bc"
  const right = subSequenceArray(processed, unprocessed.substr(1));

  return left.concat(right);
}

console.log(subSequenceArray('', 'abc'));

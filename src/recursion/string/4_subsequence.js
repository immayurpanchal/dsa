// https://www.youtube.com/watch?v=gdifkIwCJyg&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=32&t=1192s
// with time stamp
// subSequence("", "abc")
function subSequence(processed, unprocessed) {
  if (!unprocessed) {
    console.log(processed);
    return;
  }

  // take it - "a", "bc"
  subSequence(processed + unprocessed[0], unprocessed.substr(1));
  // ignore it - "", "bc"
  subSequence(processed, unprocessed.substr(1));
}

console.log(subSequence('', 'abc'));

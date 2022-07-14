// bcdapplebcd -> bcdbcd
// skip "app" but not "apple"
function skipString2(str, strToSkip, strNotToSkip, ans) {
  if (!str) return ans;
  if (
    str.startsWith(strToSkip) &&
    (!strNotToSkip || !str.startsWith(strNotToSkip))
  ) {
    return skipString2(
      str.slice(strToSkip.length),
      strToSkip,
      strNotToSkip,
      ans
    );
  }
  return skipString2(str.slice(1), strToSkip, strNotToSkip, ans + str[0]);
}

console.log(skipString2('bcdapplebcd', 'bc', 'bcd', ''));
console.log(skipString2('bcdapplebcd', 'app', 'apple', ''));
console.log(skipString2('bcdapplebcd', 'apple', '', ''));
console.log(skipString2('a', 'a', '', ''));

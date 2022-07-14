// bcdapplebcd -> bcdbcd
function skipString(str, strToSkip, ans) {
  if (!str) return ans;
  if (str.startsWith(strToSkip)) {
    return skipString(str.slice(strToSkip.length), strToSkip, ans);
  }
  return skipString(str.slice(1), strToSkip, ans + str[0]);
}

console.log(skipString('bcdapplebcd', 'bcd', ''));
console.log(skipString('a', 'a', ''));

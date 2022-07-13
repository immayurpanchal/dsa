// skip char = a, means ignore all "a" chars in the string
function skipCharacter(str, ans, skipChar) {
  if (!str.length) return ans;
  const isValidChar = str[0] !== skipChar ? str[0] : '';
  return skipCharacter(str.slice(1, str.length), ans + isValidChar, skipChar);
}

console.log(skipCharacter('bbaabcedcaaba', '', 'a'));

function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  for(i = 0; i < word.length-1; i++){
    if(word[i] === word[word.length-1] && word[i+1]===word[word.length-2]){
      return true;
    } else{
      return false;
    }
  }
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
function solution(str) {
    let i;
    let nextChar;
    let result = '';
        
    if (str === "") {
      return str;
    } else {
      for (i = 0; i < str.length - 1; i++) {
      nextChar = str[i+1];
      if (nextChar === nextChar.toUpperCase()) {
        result = result + str[i] + ' ' ;
      } else {
        result += str[i];
      }
    }
    result += str[i];
    return result;
    }
}


console.log(solution("camelCasing"));
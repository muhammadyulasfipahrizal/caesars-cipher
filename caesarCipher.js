function rot13(str) {
    let result = "";
  
    for (var i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
  
      if (c >= 65 && c <= 90) {  
        c = ((c - 65 + 13) % 26) + 65;
      }
  
      result += String.fromCharCode(c);
    }
  
    return result;
  }
  
  rot13("SERR PBQR PNZC");

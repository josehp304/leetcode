function isPalindrome(s: string): boolean {
    // first strip out only the alphabets from the input
    let alpha = s.match(/[a-zA-Z0-9]/g)
    let formatedString
    if (alpha){
        formatedString = alpha.join('').toLowerCase()
    }
    else{
      return true
    }
    // check if the formated string is equal to its reverse order
    let n = formatedString.length
    for(let i=0;i<=n/2;i++){
        if(formatedString[i] != formatedString[n-1-i]){
            console.log(formatedString[i],formatedString[n-i],i)
            return false
        }
    }
    return true
};


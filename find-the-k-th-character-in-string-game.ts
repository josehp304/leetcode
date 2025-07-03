function kthCharacter(k: number): string {
    let word = a
    let modified_word=word
    while (modified_word.length < k){
        let codes:number[] = []
        for(let i of modified_word){
            let a =i.charCodeAt(0)
            if(a == 122){
                codes.push(97)
            }else{
                a += 1
                codes.push(a)
            }
        }   
        modified_word += String.fromCharCode(...codes)
        
    }
    return modified_word[k-1]
};

function isAnagram(s: string, t: string): boolean {
    let shashmap:{[key:string]:number} = {}
    let thashmap:{[key:string]:number} = {}
    if(s.length != t.length){
        return false
    } else{
        for(let i =0;i<s.length;i++){
            if(s[i] in shashmap){
                shashmap[s[i]]++
            }else{
                shashmap[s[i]]=1
            }
        }
        for(let i =0;i<t.length;i++){
            if(t[i] in thashmap){
                thashmap[t[i]]++
            }else{
                thashmap[t[i]]=1
            }
        }
        for(let char of s){
            if(thashmap[char] == shashmap[char]){
                
            }else{
                return false
            }
        }
        return true
    }
};
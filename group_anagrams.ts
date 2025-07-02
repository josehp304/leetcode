function groupAnagrams(strs: string[]): string[][] {
    let hasmap = new Map()
    for (let s of strs){
        let ukey = Array(26).fill(0)
        for(let i  of s){
            let n = i.charCodeAt(0) - "a".charCodeAt(0)
            ukey[n] += 1;
        }
        let key = JSON.stringify(ukey)
        if(hasmap.has(key)){
            let temp_val = hasmap.get(key)
            temp_val.push(s)
            hasmap.set(key,temp_val)
        }else{
            hasmap.set(key,[s])
        }
    }
    return Array.from(hasmap.values())
    
};
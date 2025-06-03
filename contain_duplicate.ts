function containsDuplicate(nums: number[]): boolean {
    let hashset = new Set<number>();
    for(let i =0;i<nums.length;i++){
        if(hashset.has(nums[i])){
            return true
        }else{
            hashset.add(nums[i])
        }
    }
    return false
};
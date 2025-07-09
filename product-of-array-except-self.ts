# Intuition
at first first i tried a brute force methode by going through each position and replacing it for the product of every other elements.

# Approach
if there is more than 1 zero -> return array of 0s with same length as input array

if there is 1 zero -> only the position of the zero gets the product of the array

if there is 0 zeros -> each value is replaced with total product divided by the value 

# Complexity
- Time complexity:0(n)


- Space complexity:0(n)

# Code
```typescript []
function productExceptSelf(nums: number[]): number[] {
    let result = 1
    let no_of_0 = 0
    let arr =[]
    for (let n of nums){
      if(n ==0){
        no_of_0++;
        continue
      }
      result *= n; 
    }
    if(no_of_0>1){
      return Array.from({length:nums.length},()=> 0)
    }else{
      for (let n in nums){
        if(nums[n] == 0){
          arr[n] = result   
        }else{
          if(no_of_0){
            arr[n]= 0;
          }else{
            arr[n] = result/nums[n];
          }
    
        }
      }
    }
    
    return arr;
};  
```

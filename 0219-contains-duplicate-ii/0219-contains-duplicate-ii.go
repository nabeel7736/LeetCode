func containsNearbyDuplicate(nums []int, k int) bool {
    if k==0{
        return false
    }

   seen := make(map[int] int )
    for i,num := range nums{
     if prev, found:= seen[num];found{
        if i - prev <= k{
            return true
        }
     }
     seen[num] =i
     }
     return false
    }

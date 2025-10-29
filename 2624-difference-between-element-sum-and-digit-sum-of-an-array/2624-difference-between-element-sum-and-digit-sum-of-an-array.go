func differenceOfSum(nums []int) int {
    elementsum:=0
    digitsum:=0

    for _,num:= range nums{
        elementsum +=num
        temp:=num
        for temp >0{
            digitsum += temp %10
            temp/=10
        }

    }
    return int((elementsum - digitsum))
}
func canAliceWin(nums []int) bool {
    singledigitnum :=0
    doubledigitsum :=0

    for _ ,num := range nums {
        if num >= 10 {
            doubledigitsum += num
        }else{
            singledigitnum += num
        }
    }
    return singledigitnum != doubledigitsum
}
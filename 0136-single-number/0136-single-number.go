func singleNumber(nums []int) int {
    singlenumber:=0

    for _,num :=range nums{
        singlenumber ^= num
    }
        return singlenumber
}
func countDigits(num int) int {
    count := 0
    orginalnum :=num

    for num >0 {
        digit := num %10

        if  digit != 0 && orginalnum % digit ==0{
            count++
        }
        num /= 10
    }
    return count
}
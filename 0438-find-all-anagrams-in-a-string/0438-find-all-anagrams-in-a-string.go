func findAnagrams(s string, p string) []int {
    if len(p)> len(s){
        return []int{}
    }
    pcount:= make([]int, 26)
    scount:= make([]int, 26)

    for _, ch := range p{
        pcount[ch-'a']++
    }

    result := []int{}

    for i:= 0 ; i< len(s) ; i++ {
        scount[s[i]-'a']++
        if i>=len(p) {
            scount[s[i-len(p)]-'a']--
        }
        if eqlslices(pcount, scount) {
            result = append(result, i-len(p)+1)
        }

    }
    return result
}

func eqlslices(a,b []int) bool {
    for i := range a {
        if a[i] != b[i] {
            return false
        }

    }
    return true
}
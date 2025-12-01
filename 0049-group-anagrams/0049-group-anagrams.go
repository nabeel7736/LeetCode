func groupAnagrams(strs []string) [][]string {
    anagramap := make(map[string][]string)

    for _, str := range strs{
        r:= []rune(str)
        sort.Slice(r, func(i,j int) bool {return r[i] < r[j]})
        key := string(r)

        anagramap[key] = append(anagramap[key], str)

    }

    result := [][]string{}
    for _, group := range anagramap{
        result = append(result, group)
    }

    return result
}
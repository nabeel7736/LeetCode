func findWordsContaining(words []string, x byte) []int {
    var result []int

    for i := 0; i < len(words); i++ {
		word := words[i]
		found := false

        for j := 0; j < len(word); j++ {
			if word[j] == x {
				found = true
				break
            }
        }
        if found {
			result = append(result, i)
		}
    }
    return result
}
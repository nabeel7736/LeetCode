func maximumWealth(accounts [][]int) int {
    maxWealth := 0

    for _,customerAccounts := range accounts {
        currentwealth :=0

        for _, accountBalance := range customerAccounts{
            currentwealth += accountBalance
        }

        if currentwealth > maxWealth {
            maxWealth = currentwealth
        }
    }
    return maxWealth
}
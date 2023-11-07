def score(subordinates, person):
    this_score = 1

    for subordinate in subordinates[person]:
        this_score += score(subordinates, subordinate)

    return this_score

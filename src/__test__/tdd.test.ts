function solution(bandage: number[], initialHealth: number, attacks: number[][]) {
    const lastSecond = attacks[attacks.length - 1][0];
    let currentHealth = initialHealth;
    let consecutiveSuccess = 0;

    for (let second = 0; second <= lastSecond; second++) {
        const attack = attacks.find((value) => value[0] === second);

        if (attack) {
            consecutiveSuccess = 0;
            currentHealth -= attack[1];

            if (currentHealth <= 0) {
                return -1; // 생존 불가능한 경우, -1을 즉시 반환
            }
        } else {
            let healingAmount = bandage[1];
            consecutiveSuccess += 1;

            if (consecutiveSuccess === bandage[0]) {
                healingAmount += bandage[2];
                consecutiveSuccess = 0;
            }

            currentHealth = Math.min(initialHealth, currentHealth + healingAmount);
        }
    }

    return currentHealth;
}



describe("붕대 감기 테스트", () => {
    // given
    const cases = [
        {
            bandage: [5, 1, 5],
            health: 30,
            attaks: [[2, 10], [9, 15], [10, 5], [11, 5]],
            expected: 5
        },
        {
            bandage: [3, 2, 7],
            health: 20,
            attaks: [[1, 15], [5, 16], [8, 6]],
            expected: -1
        },
        {
            bandage: [4, 2, 7],
            health: 20,
            attaks: [[1, 15], [5, 16], [8, 6]],
            expected: -1
        },
        {
            bandage: [1, 1, 1],
            health: 5,
            attaks: [[1, 2], [3, 2]],
            expected: 3

        }
    ];

    test.each(cases)("각각의 플레이어가 정상적으로 붕대를 감을 수 있는지 확인합니다.",
        ({bandage, health, attaks, expected}) => {
            // when
            const result = solution(bandage, health, attaks)
            // result
            expect(result).toBe(expected);
        })
});
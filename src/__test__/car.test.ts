
class Car {
    #position;
    #moveForNumber;
    constructor(moveForNumber: number) {
        this.#position = 0;
        this.#moveForNumber = moveForNumber;
    }

    move(number: number) {
        if (number >= this.#moveForNumber) {
            this.#position += 1;
        }
    }

    getPostion() {
        return this.#position;
    }
}

describe('자동차 경주 테스트', () => {
    test('자동차가 전진하는지 테스트합니다.', () => {
        const car = new Car(4);

        car.move(5);
        car.move(6);
        car.move(3);

        expect(car.getPostion()).toBe(2);
    });

    test('the best flavor is not coconut', () => {
        expect("kimchi").not.toBe('coconut');
    });
});

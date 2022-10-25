/*Реализуйте класс Worker (Работник), который будет иметь следукицие свойства: name
(bмя), surname (фамилия), rate (става за день работы), days (количество отработанных
дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату
работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных
дней days */
class WorkerTypeOne {
    name;
    surname;
    rate;
    days;
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary;
    }
}
let workeOne = new WorkerTypeOne('Ибрагим', 'Ыманалы уулу', 11, 31);
console.log(workeOne.name);
console.log(workeOne.surname);
console.log(workeOne.rate);
console.log(workeOne.days);
console.log(workeOne.getSalary());

class WorkerTypeTwo {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    getDays() {
        return this.#days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}
workeTwo = new WorkerTypeTwo('Ибрагим', 'Ыманалы уулу', 11, 31);
console.log(workeTwo.getName());
console.log(workeTwo.getSurname());
console.log(workeTwo.getRate());
console.log(workeTwo.getDays());
console.log(workeTwo.getSalary());

//Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
//(подсказка используйте методы Get  и  Set)

class WorkerTypeThree {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    setRate(rate) {
        this.#rate = rate;
    }
    getDays() {
        return this.#days;
    }
    setDays(days) {
        this.#days = days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}
let workerThree = new WorkerTypeThree('Ибрагим', 'Ыманалы уулу', 11, 31);
console.log(workerThree.getRate());
console.log(workerThree.getDays());
console.log(workerThree.getSalary());
workerThree.setRate(40);
workerThree.setDays(40);
console.log(workerThree.getRate());
console.log(workerThree.getDays());
console.log(workerThree.getSalary());


// public, private, projected, readonly
class User {
    technology: string;
    institute: string;
    curriculum: number;

    constructor(technology: string, institute: string, curriculum: number) {
        this.technology = technology;
        this.institute = institute;
        this.curriculum = curriculum;
    }

    Display(): void{
        console.log(`Technology : ${this.technology}. Institute : ${this.institute}. Curriculum : ${this.curriculum}`)
    }

}

class Student extends User {
    name: string;
    roll: number;
    registration: number
    constructor(name: string, roll: number, registration: number, technology: string, institute: string, curriculum: number) {
        super(technology, institute, curriculum);
        this.name = name;
        this.roll = roll;
        this.registration = registration;
    }
    Display(): void {
        console.log(`Name : ${this.name}. Roll : ${this.roll}. Registration : ${this.registration}. Technology : ${this.technology}. Institute : ${this.institute}. Curriculum : ${this.curriculum}`)
    }
}

const user = new User("Computer", "Cox-ploy", 15)
user.curriculum = 30
console.log(user)

// const student = new Student("Sariot Hossain", 12925, 1502081734, "Computer", "Cox-ploy", 15)
// student.Display()


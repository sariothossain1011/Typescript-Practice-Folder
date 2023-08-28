// public, private, projected, readonly
class User {
    protected technology: string; //protected value
    public institute: string; //public value
    readonly curriculum: number; // only readable value 

    constructor(technology: string, institute: string, curriculum: number) {
        this.technology = technology;
        this.institute = institute;
        this.curriculum = curriculum;
    }

    Display(): void {
        console.log(`Technology : ${this.technology}. Institute : ${this.institute}. Curriculum : ${this.curriculum}`)
    }

}

class Student extends User {
    name: string;
    roll: number;
    registration: number;
    private studentID: number;
    constructor(name: string, roll: number, registration: number, technology: string, institute: string, curriculum: number, studentID: number) {
        super(technology, institute, curriculum);
        this.name = name;
        this.roll = roll;
        this.registration = registration;
        this.studentID = studentID;
    }
    Display(): void {
        console.log(`Name : ${this.name}. Roll : ${this.roll}. Registration : ${this.registration}. Technology : ${this.technology}. Institute : ${this.institute}. Curriculum : ${this.curriculum}`)
    }
    setStudentID(studentID: number): void {
        this.studentID = studentID;
    }
    getStudentID(): number {
        return this.studentID;
    }
}

const user = new User("Computer", "Cox-ploy", 15)
// user.curriculum = 30 // not update this value 
console.log(user)

const student = new Student("Sariot Hossain", 12925, 1502081734, "Computer", "Cox-ploy", 15,456788887654)
student.Display()

student.setStudentID(300034)

console.log(student.getStudentID())



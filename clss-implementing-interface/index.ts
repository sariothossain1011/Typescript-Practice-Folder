interface IUserFormatter {
    formatUser: () => string;
}

class User implements IUserFormatter {
    constructor(private fullName: string, private age: number) {

    }
    formatUser = () => {
        return `name : ${this.fullName}, age:${this.age}`;
    };
}

const user = new User("Sariot Hossan", 20);

console.log(user.formatUser())
// import employee structure
const Employee = require('./employee');

// intern constructor extends from employee structure
class Intern extends Employee {
    constructor (name, id, email, school) {
        // calling employee contuctor
        super (name, id, email);

        this.school = school;
    }

    // return school from input
    getSchool() {
        return this.school;
    }

    // employee role is intern
    getRole() {
        return 'Intern';
    }
}

// export
module.exports = Intern;
// import employee structure
const Employee = require('./employee');

// engineer constructor extends from employee structure
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee contuctor
        super (name, id, email);

        this.github = github;
    }

    // return github from input
    getGithub() {
        return this.github;
    }

    // employee role is engineer
    getRole() {
        return 'Engineer';
    }
}

// export
module.exports = Engineer;
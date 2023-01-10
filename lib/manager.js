// importing employee constructor
const Employee = require('./employee');

// manager constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee contructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // employee role is manager
    getRole() {
        return 'Manager';
    }
}

// export
module.exports = Manager;
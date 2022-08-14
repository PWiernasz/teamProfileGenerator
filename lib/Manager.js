
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) { //Please explain why we have to declare the args twice constructor and super
        super(name, id, email);
        this.office = office;
        this.role = 'Manager';
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;
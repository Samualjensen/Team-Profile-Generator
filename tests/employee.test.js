const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName', () => {
        it("should return a new employee's name", () => {
            const employee = new Employee('Hildalgo');

            expect(employee.name).toEqual('Hildalgo');
        })
    });

    describe('getID', () => {
        it("should return a new employee's ID", () => {
            const employee = new Employee('Hildalgo', 666);

            expect(employee.id).toEqual(666);
        })
    });

    describe('getEmail', () => {
        it("should return a new employee's email", () => {
            const employee = new Employee('Hildalgo', 666, 'hildalgo@test.com');

            expect(employee.email).toEqual('hildalgo@test.com');
        })
    });

    describe('getRole', () => {
        it("should return a new employee's role", () => {
            const employee = new Employee('Hildalgo', 666, 'hildalgo@test.com');

            expect(employee.getRole()).toEqual('Employee');
        })
    });
});
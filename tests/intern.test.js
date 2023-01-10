const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Init', () => {
        it('should create a new team member with the role of intern', () => {
            const intern = new Intern('Bobby', 668, 'propaneintern@test.com');

            expect(intern.name).toEqual('Bobby');
            expect(intern.id).toEqual(668);
            expect(intern.email).toEqual('propaneintern@test.com');
        })
    });

    describe('school', () => {
        it("should return new intern's school", () => {
            const intern = new Intern('Bobby', 668, 'propaneintern@test.com', 'Arlen Middle School');

            expect(intern.school).toEqual('Arlen Middle School');
        })
    });

    describe('getRole', () => {
        it("should return the employee's role", () => {
            const intern = new Intern('Bobby', 668, 'propaneintern@test.com');

            expect(intern.getRole()).toEqual('Intern');
        })
    })
});
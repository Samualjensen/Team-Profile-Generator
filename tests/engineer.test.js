const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Init', () => {
        it('should create a new team member with the role of enineer', () => {
            const engineer = new Engineer('Hank', 667, 'propane@test.com');

            expect(engineer.name).toEqual('Hank');
            expect(engineer.id).toEqual(667);
            expect(engineer.email).toEqual('propane@test.com');
        })
    });

    describe("github", () => {
        it("should return new engineer's github username", () => {
            const engineer = new Engineer('Hank', 667, 'propane@test.com', 'propaneMan');

            expect(engineer.github).toEqual('propaneMan');
        })
    });

    describe('getRole', () => {
        it("should return the employee's role", () => {
            const engineer = new Engineer('Hank', 667, 'propane@test.com');

            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
});
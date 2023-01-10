const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('init', () => {
        it('should create new team manager', () => {
            const manager = new Manager('Buck', 669, 'propanemanager@test.com');

            expect(manager.name).toEqual('Buck');
            expect(manager.id).toEqual(669);
            expect(manager.email).toEqual('propanemanager@test.com');
        })
    });

    describe('getRole', () => {
        it("should return the employee's role as manager", () => {
            const manager = new Manager('Buck', 669, 'propanemanager@test.com');

            expect(manager.getRole()).toEqual('Manager');
        })
    });
});
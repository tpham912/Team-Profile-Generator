const Manager = require("../lib/manager");
describe('Manager', () => {
    it('should return the office number of the manager', () => {
        let Manager = new Manager("officeNumber")
        let OfficeNumber = new OfficeNumber("40A")

        expect(Manager.officeNumber).toEqual("40A")
     
    });

    it('should return the role of manager when they select their position', () => {
        expect(Manager).getRole(Manager)
    });
    
});

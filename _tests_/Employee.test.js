const Employee = require("../lib/Employee")

test("it should create an object when I initialize my Employee class", () => {
    let testVariable = new Employee()


    expect(typeof(testVariable)).toBe("object")
})

test("if I pass a first parameter it should assign a name in the object", () => {
    let testVariable = new Employee("Tina")

    console.log(testVariable)
    expect(testVariable.name).toBe("Tina")
})


test("if I pass a second parameter it should assign an id in the object", () => {
    let testVariable = new Employee("Tina","007","tina@gmail.com")
    
    console.log(testVariable)
    expect(testVariable.id).toBe("007")

})

test("if I pass a third parameter it should assign an email in the object", () => {
    let testVariable = new Employee("Tina","007","tina@gmail.com")
    
    console.log(testVariable)
    expect(testVariable.email).toBe("tina@gmail.com")
})

test("if I get role from an employee it should their role", () => {
    let testVariable = new Employee("Tina","007","tina@gmail.com")
    
    console.log(testVariable)
    expect(testVariable.getRole()).toBe("Employee");
})
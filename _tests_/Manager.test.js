const Manager = require("../lib/manager");
test("it should create an object when I initialize my Manager class", () => {
    let testVariable = new Manager()


    expect(typeof(testVariable)).toBe("object")
})

test("if I pass a first parameter it should assign a name in the object", () => {
    let testVariable = new Manager("Julia")

    console.log(testVariable)
    expect(testVariable.name).toBe("Julia")
})

test("if I pass a second parameter it should assign an id in the object", () => {
    let testVariable = new Manager("Julia","798")
    
    console.log(testVariable)
    expect(testVariable.id).toBe("798")

})

test("if I pass a third parameter it should assign an email in the object", () => {
    let testVariable = new Manager("Julia","798","Julia@yahoo.com")
    
    console.log(testVariable)
    expect(testVariable.email).toBe("Julia@yahoo.com")

})

test("if I pass a fourth parameter it should assign the office number of the Manager in the object", () => {
    let testVariable = new Manager("Julia","798","Julia@yahoo.com","Suite20A")
    
    console.log(testVariable)
    expect(testVariable.officeNumber).toBe("Suite20A")

})

test("if I get role from an Manager it should their role", () => {
    let testVariable = new Manager("Julia","798","Julia@yahoo.com","Suite20A")
    
    console.log(testVariable)
    expect(testVariable.getRole()).toBe("Manager");
})
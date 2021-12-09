const Engineer = require("../lib/Engineer")

test("it should create an object when I initialize my Engineer class", () => {
    let testVariable = new Engineer()


    expect(typeof(testVariable)).toBe("object")
})

test("if I pass a first parameter it should assign a name in the object", () => {
    let testVariable = new Engineer("Mike")

    console.log(testVariable)
    expect(testVariable.name).toBe("Mike")
})

test("if I pass a second parameter it should assign an id in the object", () => {
    let testVariable = new Engineer("Mike","238")
    
    console.log(testVariable)
    expect(testVariable.id).toBe("238")

})

test("if I pass a third parameter it should assign an email in the object", () => {
    let testVariable = new Engineer("Mike","238","mike@yahoo.com")
    
    console.log(testVariable)
    expect(testVariable.email).toBe("mike@yahoo.com")

})

test("if I pass a fourth parameter it should assign a github username in the object", () => {
    let testVariable = new Engineer("Mike","238","mike@yahoo.com","mike88")
    
    console.log(testVariable)
    expect(testVariable.github).toBe("mike88")

})

test("if I get role from an engineer it should their role", () => {
    let testVariable = new Engineer("Mike","238","mike@yahoo.com","mike88")
    
    console.log(testVariable)
    expect(testVariable.getRole()).toBe("Engineer");
})
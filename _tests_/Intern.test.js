const Intern = require("../lib/Intern")

test("it should create an object when I initialize my Engineer class", () => {
    let testVariable = new Intern()


    expect(typeof(testVariable)).toBe("object")
})

test("if I pass a first parameter it should assign a name in the object", () => {
    let testVariable = new Intern("April")

    console.log(testVariable)
    expect(testVariable.name).toBe("April")
})

test("if I pass a second parameter it should assign an id in the object", () => {
    let testVariable = new Intern("April","66")
    
    console.log(testVariable)
    expect(testVariable.id).toBe("66")

})

test("if I pass a third parameter it should assign an email in the object", () => {
    let testVariable = new Intern("April","66","April@yahoo.com")
    
    console.log(testVariable)
    expect(testVariable.email).toBe("April@yahoo.com")

})

test("if I pass a fourth parameter it should assign the school of the intern in the object", () => {
    let testVariable = new Intern("April","66","April@yahoo.com","UCLA")
    
    console.log(testVariable)
    expect(testVariable.school).toBe("UCLA")

})

test("if I get role from an intern it should their role", () => {
    let testVariable = new Intern("April","66","April@yahoo.com","UCLA")
    
    console.log(testVariable)
    expect(testVariable.getRole()).toBe("Intern");
})



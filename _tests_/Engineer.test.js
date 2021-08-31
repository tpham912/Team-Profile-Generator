const Engineer = require("../lib/Engineer")

test("it should create an object when I initialize my Engineer class", () => {
    let testVariable = new Engineer()


    expect(typeof(testVariable)).toBe("object")
})

test("if I pass a first parameter it should assign a github username in the object", () => {
    let testVariable = new GitHub("tpham8")

    console.log(testVariable)
    expect(testVariable.GitHub).toBe("tpham8")
})

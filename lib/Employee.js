// const inquirer = require("inquirer");

class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){ //getName();
        return this.name
    };

    getID(){ // getID();
        return this.id
    };

    getEmail(){// getEmail();
        return this.email
    };

    getRole(){
        return "Employee"
    };
}

module.exports = Employee;
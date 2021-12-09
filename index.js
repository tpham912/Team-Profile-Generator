// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./generateHTML");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const employees = [];

function showFirstQuestion() {
    const questions = [
        {
            type: "rawlist",
            message: "What's the position?",
            name: "position",
            choices: ["Manager", "Engineer", "Intern"],
        },
    ];
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        showRoleQuestion(response.position);
    });
}

function showRoleQuestion(role) {
    const commonQuestions = [
        {
            name: "Name",
            message: `What is the ${role}\'s name?`,
            type: "input"
        },
        {
            name: "Id",
            message: `What is the ${role}\'s ID?`,
            type: "input"
        },
        {
            name: "Email",
            message: `What is the ${role}\ email?`,
            type: "input"
        },
    ];

    if(role === "Manager") {
        commonQuestions.push({
            name: "OfficeNum",
            message: "What is the Manager's Office Number?",
            type: "input"
        });

    } else if (role === "Engineer") {
        commonQuestions.push({
            name: "gitHub",
            message: "What is the Engineer's github username?",
            type: "input"
        });
        
    } else if (role === "Intern") {
        commonQuestions.push({
            name: "school",
            message: "What is the Intern's school?",
            type: "input"
        });

    }

    inquirer.prompt(commonQuestions).then((response) => {
        console.log(response);
        let employee;
        if(role === "Manager") {
            employee = new Manager(response.Name, response.Id, response.Email, response.OfficeNum);
            
        } else if (role === "Engineer") {
            employee = new Engineer(response.Name, response.Id, response.Email, response.gitHub);

            
        } else if (role === "Intern") {
            employee = new Intern(response.Name, response.Id, response.Email, response.school);

    
        }
       
        console.log(employee);
        employees.push(employee);
        showAddAgainQuestion();

    })
}

function showAddAgainQuestion() {
    inquirer.prompt({
        name: "choice",
        message: "Would you like to keep adding team members?",
        type: "list",
        choices: ["Yes", "No"]
    }).then((response) => {
        if(response.choice == "Yes") {
            showFirstQuestion();
        }else {
            console.log(employees);
            let html = generateHTML(employees);
            console.log(html);
            writeFileAsync('index.html', html)
            .then(() => console.log('Successfully generated index.HTML'));
        }
    })
}
showFirstQuestion();




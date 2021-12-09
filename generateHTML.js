const generateHTML = (response) =>
`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile Generator</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class="bg-primary text-white text-xl-center" class="header">The Office Team</header>
  <div class="d-flex justify-content-around">
${addEmployees(response)}

  </div>
</body>
</html>`

function addEmployees (response){
  let output = "";

  console.log(response)
  for (let i = 0; i < response.length; i++) {
    let employee = response[i]; 
    console.log(employee);
    if (employee.getRole() === "Manager") {
      output += `
        <div class="row">
          <div class="card col mx-5">
            <div class="card-header">
              <h5 class="card-title">${employee.getName()}</h5>
              <p class="card-text">${employee.getRole()}</p>
              <p class="list-group-item">ID: ${employee.getID()}</p>
              <p class="list-group-item">Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></p>
              <p class="list-group-item">Office Number: ${employee.getOfficeNumber()}</p>
            </div>
          </div>
        </div>
      `
      
    } else if (employee.getRole() === "Engineer") {
      output += `
        <div class="row">
          <div class="card col mx-5">
            <div class="card-header">
              <h5 class="card-title">${employee.getName()}</h5>
              <p class="card-text">${employee.getRole()}</p>
              <p class="list-group-item">ID: ${employee.getID()}</p>
              <p class="list-group-item">GitHub: <a href='https://www.github.com/${employee.getGitHub()}'>GitHub Profile</a></p>
            </div>
          </div>
        </div>
        `

    } else if (employee.getRole() === "Intern") {
        output += `
          <div class="row">
            <div class="card col mx-5">
              <div class="card-header">
                <h5 class="card-title">${employee.getName()}</h5>
                <p class="card-text">${employee.getRole()}</p>
                <p class="list-group-item">ID: ${employee.getID()}</p>
                <p class="list-group-item">School: ${employee.getSchool()}</p>
              </div>
            </div>
          </div>
          `

    }
    console.log(output);
  }
  return output;
}


module.exports = generateHTML;
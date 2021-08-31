const generateHTML = (response) =>
`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile Generator</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>

<body>
  <header class="p-3 mb-2 bg-primary text-white text-xl-center">${response.teamName}</header>
  <div class="card d-flex justify-content-center" style="width: 40rem;">
${addEmployees(response)}

  </div>
</body>
</html>`

function addEmployees (response){
  let output = "";

  console.log("TESTTTTTTTT")
  console.log(response)
  for (let i = 0; i < response.length; i++) {
    let employee = response[i]; 
    console.log(employee);
    if (employee.getRole() === "Manager") {
      output += `
        <div class="row">
          <div class="card col mx-5">
            <div class="card-body">
              <h5 class="card-title">${employee.getName()}</h5>
              <p class="card-text">${employee.getRole()}</p>
              <p class="list-group-item">${employee.getID()}</p>
              <p class="list-group-item">${employee.getOfficeNumber()}</p>
            </div>
          </div>
        </div>
      `
      
    } else if (employee.getRole() === "Engineer") {
      output += `
        <div class="row">
          <div class="card col mx-5">
            <div class="card-body">
              <h5 class="card-title">${employee.getName()}</h5>
              <p class="card-text">${employee.getRole()}</p>
              <p class="list-group-item">ID: ${employee.getID()}</p>
              <p class="list-group-item">GitHub: ${employee.getGitHub()}</p>
            </div>
          </div>
        </div>
        `

    } else if (employee.getRole() === "Intern") {
        output += `
          <div class="row">
            <div class="card col mx-5">
              <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <p class="card-text">${employee.getRole()}</p>
                <p class="list-group-item">${employee.getID()}</p>
                <p class="list-group-item">${employee.getSchool()}</p>
              </div>
            </div>
          </div>
          `

    }
    console.log(output);
    return output;
  }
}


module.exports = generateHTML;
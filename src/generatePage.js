const generateEmployees = teamArray => {
    return `
    ${teamArray
    .filter(({role}) => role === 'Manager')
    .map(({name, id, email, office, role}) => {
    return `
        <div id="card">
            <div id="head">
                <div id="name">
                    ${name}
                </div>
                <div id="role">
                    <i class="fas fa-mug-hot"></i> ${role}
                </div>
            </div>
            <div id="info">
                <div id="idNum" class="infobox">
                    ID: ${id}
                </div>
                <div id="email" class="infobox">
                    Email:
                    <a href="mailto:${email}" target="_blank"> ${email}</a>
                </div>
                <div id="special" class="infobox">
                    Office Number: ${office}
                </div>
            </div>
        </div>
        `;
    })
    .join('')}
    ${teamArray
    .filter(({role}) => role === 'Engineer')
    .map(({name, id, email, github, role}) => {
    return `
        <div id="card">
            <div id="head">
                <div id="name">
                    ${name}
                </div>
                <div id="role">
                    <i class="fas fa-glasses"></i> ${role}
                </div>
            </div>
            <div id="info">
                <div id="idNum" class="infobox">
                ID: ${id}
                </div>
                <div id="email" class="infobox">
                    Email:
                    <a href="mailto:${email}" target="_blank"> ${email}</a>
                </div>
                <div id="special" class="infobox">
                    Github:
                    <a href="https://github.com/${github}" target="_blank"> ${github}</a>
                </div>
            </div>
        </div>
        `;
    })
    .join('')}
    ${teamArray
    .filter(({role}) => role === 'Intern')
    .map(({name, id, email, school, role}) => {
    return `
        <div id="card">
            <div id="head">
                <div id="name">
                    ${name}
                </div>
                <div id="role">
                    <i class="fas fa-user-graduate"></i> ${role}
                </div>
            </div>
            <div id="info">
                <div id="idNum" class="infobox">
                    ID: ${id}
                </div>
                <div id="email" class="infobox">
                    Email:
                    <a href="mailto:${email}" target="_blank"> ${email}</a>
                </div>
                <div id="special" class="infobox">
                    School: ${school}
                </div>
            </div>
        </div>
        `;
    })
    .join('')}
     `   
}

module.exports = templateData => {
    const {members} = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" >
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
    <h1>My Team</h1>
    </header>
    <main id="main">
    ${generateEmployees(members)}
    </main>
    </body>
    </html>
    `
}
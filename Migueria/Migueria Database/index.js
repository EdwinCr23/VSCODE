const sqlite3 = require('sqlite3').verbose();

const bd = new sqlite3.Database('laMigueria.bd');

/*bd.run(
     `CREATE TABLE usuarios(
        id Integer primary key,
        name text,
        password text,
        email text
        )`
);*/

/*bd.run(
    `INSERT INTO users(id,name,password,email) values(1,'ecardenas','Lm54321@*','edwin.cardenas@lamigueria.com')`
);
bd.run(
    `INSERT INTO users(id,name,password,email) values(2,'bramirez','Lm54321@*','bladimir.ramirez@lamigueria.com')`
);*/

bd.each(`SELECT * FROM users`, (err,row) =>{
    if(err){
        console.error(err.message)
        return
    }
    console.log(row.id, row.name, row.password, row.email)
});

bd.close();
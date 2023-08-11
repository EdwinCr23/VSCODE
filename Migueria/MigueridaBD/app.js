const express = require('express');
const bodyParser = require('body-parser');
const db = require('./laMigueria.bd');

const app = express();
app.use(bodyParser.json);

//Crear
app.post('/usuarios', (req, res) =>{
    const {user, password, email} = req.body;
    db.run('INSERT INTO usuarios(user,password,email) VALUES(?,?,?)', [user, password, email, usuarioId], function(err){
        if(err) {
            return res.status(500).json({error : err.message});
        }
        res.json({message: 'Usuario creado', id: this.lastID});
    });
});

//Buscar todos los datos
app.get('/usuarios', (req, res) => {
    db.all('SELECT * FROM usuarios', (err, rows) =>{
        if(err){
            return res.status(500).json({error: err.message});
        }
        res.json(rows)
    });
});

//Buscar un sólo dato
app.get('/usuarios/:id', (req, res) => {
    const usuarioId = req.params.id;
    db.get('SELECT * FROM usuarios where id = ?', [usuarioId], (err, row) => {
        if (err){
            return res.status(500).json({ error: err.message});
        }
        res.json(row);
    });
});

//Actualizar
app.put('/usuarios/:id', (req, res) =>{
    const usuarioId = req.params.id;
    const {user, password, email} = req.body;
    db.run('UPDATE usuarios SET user = ?, password = ?, email = ? WHERE id = ?', [user, password, email, usuarioId], (err) =>{
        if(err){
            return res.status(500).json({error: err.message});
        }
        res.json({message: 'Usuario actualizado', changes : this.changes});
    });
});

//Eliminar
app.delete('/usuarios/:id', (req, res) => {
    const usuarioId = req.params.id;
    db.run('DELETE FROM usuarios WHERE id = ?', [usuarioId], (err)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }
        res.json({message: 'Usuario eliminado!', changes: this.changes});
    });
});

//Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`El servidor está conectado al puerto ${PORT}`)
})
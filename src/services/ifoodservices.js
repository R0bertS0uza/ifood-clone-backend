const db = require('../db');

module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM users', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM users WHERE id = ?', [id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome,cpf,email,password) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO users (nome, cpf, email, password) VALUES (?, ?, ?, ?)', 
                [nome, cpf, email, password], 
                (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.userId);
            });
        });
    },

    alterar: (id,nome,cpf,email,password) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE users SET nome = ?, cpf = ?, email = ?, password = ? WHERE id = ?', 
                [nome, cpf, email, password, id], 
                (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results);
            });
        });
    },

    excluir: (id)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarEnderecos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM endereco', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUmEndereco: (id_cep) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM endereco WHERE id_cep = ?', [id_cep], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserirEndereco: (rua,numero,complemento,bairro,cidade,estado,cep) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO endereco (rua, numero, complemento, bairro, cidade, estado, cep) VALUES (?, ?, ?, ?, ?, ?, ?)', 
                [rua, numero, complemento, bairro, cidade, estado, cep], 
                (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.userId);
            });
        });
    },

    alterarEndereco: (id_cep,rua,numero,complemento,bairro,cidade,estado,cep) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE endereco SET rua = ?, numero = ?, complemento = ?, bairro = ?, cidade = ?, estado = ?, cep = ? WHERE id_cep = ?', 
                [rua, numero, complemento, bairro, cidade, estado, cep, id_cep], 
                (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results);
            });
        }); 
    },

    excluirEndereco: (id_cep)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM endereco WHERE id_cep = ?', [id_cep], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },


};


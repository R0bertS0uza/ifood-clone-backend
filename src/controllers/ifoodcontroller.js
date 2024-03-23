const ifoodServices = require('../services/ifoodservices');

module.exports = {
    buscarTodos: async (req, res)=> {
        let json = {error:'', result:[]};

        let users = await ifoodServices.buscarTodos();

        for(let i in users){
            json.result.push({
                codigo: users[i].codigo,
                descricao: users[i].nome,
                cpf: users[i].cpf,
                email: users[i].email
            });
        }
        res.json(json);
    },
    
    buscarUm: async(req,res)=>{
        let json = {error:'', result:{}};

        let id = req.params.id;
        let user = await ifoodServices.buscarUm(id);

        if(user){
            json.result = user;
        }
        res.json(json);
    },

    inserir: async(req,res)=>{
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let email = req.body.email;
        let password = req.body.password;
        

        if(nome && cpf && email && password){
            let userId = await ifoodServices.inserir(nome, cpf, email, password);
            json.result = {
                id: userId,
                nome,
                cpf,
                email,
                password
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req,res)=>{
        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let email = req.body.email;
        let password = req.body.password;
        

        if(id && nome && cpf && email && password){
            await ifoodServices.alterar(id, nome, cpf, email, password);
            json.result = {
                id,
                nome,
                cpf,
                email,
                password
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req,res) => {
        let json = {error:'', result:{}};

        await ifoodServices.excluir(req.params.id);

        res.json(json);
    },

//CRUD DE ENDERECO

    buscarEnderecos: async (req, res)=> {
        let json = {error:'', result:[]};

        let endereco = await ifoodServices.buscarEnderecos();

        for(let i in endereco){
            json.result.push({
                codigo: endereco[i].id_cep,
                rua: endereco[i].rua,
                numero: endereco[i].numero,
                complemento: endereco[i].complemento,
                bairro: endereco[i].bairro,
                cidade: endereco[i].cidade,
                estado: endereco[i].estado,
                cep: endereco[i].cep 
            });
        }
        res.json(json);
    },

    buscarUmEndereco: async(req,res)=>{
        let json = {error:'', result:{}};

        let id_cep = req.params.id_cep;
        let morada = await ifoodServices.buscarUmEndereco(id_cep);

        if(morada){
            json.result = morada;
        }
        res.json(json);
    },

    inserirEndereco: async(req,res)=>{
        let json = {error:'', result:{}};

        let rua = req.body.rua;
        let numero = req.body.numero;
        let complemento = req.body.complemento;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let cep = req.body.cep;

        if(rua && numero && complemento && bairro && cidade && estado && cep){
            let enderecoId = await ifoodServices.inserirEndereco(rua, numero, complemento, bairro, cidade, estado, cep);
            json.result = {
                id_cep: enderecoId,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                cep
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterarEndereco: async(req,res)=>{
        let json = {error:'', result:{}};

        let id_cep = req.params.id_cep;
        let rua = req.body.rua;
        let numero = req.body.numero;
        let complemento = req.body.complemento;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let cep = req.body.cep;
        
        if(id_cep && rua && numero && complemento && bairro && cidade && estado && cep){
            await ifoodServices.alterarEndereco(id_cep, rua, numero, complemento, bairro, cidade, estado, cep);
            json.result = {
                id_cep,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                cep
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluirEndereco: async(req,res) => {
        let json = {error:'', result:{}};

        await ifoodServices.excluirEndereco(req.params.id_cep);

        res.json(json);
    }
}








const cepServices = require('../services/cepServices');
//const ifoodServices = require('../services/ifoodservices');

class CepController {
    async findByLocalidade(req, res) {
        try {
            let response = await cepServices.findByEndereco(req);
            return res.json(response);
        } catch (error) {
            // Se ocorrer um erro, retorna uma resposta de erro
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new CepController();
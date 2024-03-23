const { json } = require("body-parser");
const axios = require("axios");

const { VIA_CEP_URI } = require("../config/secrets.js");

class ViaCepClient {
    async findByCep(cep) {
        let response = {};
        console.info(`Buscando dados da API do ViaCep para o CEP ${cep}`);
        try {
            const res = await axios.get(VIA_CEP_URI(cep));
            const apiResponse = res.data;
            response = {
                cep: apiResponse.cep, 
                logradouro: apiResponse.logradouro,
                complemento: apiResponse.complemento,
                bairro: apiResponse.bairro,
                localidade: apiResponse.localidade,
                uf: apiResponse.uf,
            };
            console.log(`Retornando dados da API do ViaCep para o CEP ${cep}: ${JSON.stringify(apiResponse)}`);
        } catch (err) {
            console.error(`Erro ao chamar a API do ViaCep para o CEP ${cep}`);
            console.error(err);
        }
        return response;
    }
}

module.exports = new ViaCepClient();


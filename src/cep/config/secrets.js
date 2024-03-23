const env = process.env;

const VIA_CEP_URI = (cep) => {
    return `https://viacep.com.br/ws/${cep}/json/`;
};

module.exports = {
    VIA_CEP_URI: VIA_CEP_URI
};

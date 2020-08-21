
function getAdress(){
    var rua = document.querySelector('.rua')
    var bairro = document.querySelector('.bairro')
    var localidade= document.querySelector('.localidade')
    var uf = document.querySelector('.uf')
    var unfind = document.querySelector('.unfind')
    
    
    var cep = document.querySelector('#cep').value
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function(response){
            if(response.data.erro){
                //caso não ache endereço
                unfind.innerHTML = "Endereço não localizado."
                rua.innerHTML = null
                bairro.innerHTML = null
                localidade.innerHTML = null
                uf.innerHTML = null
            }else{
                console.table(response.data)
                unfind.innerHTML = null
                rua.innerHTML = "Endereço: " + response.data.logradouro
                bairro.innerHTML = "Bairro: " + response.data.bairro
                localidade.innerHTML = "Cidade: " +response.data.localidade
                uf.innerHTML = "Estado: " + response.data.uf
            }
    })
}
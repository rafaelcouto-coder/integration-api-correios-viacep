
function getAdress(){
    
    var cep = document.querySelector('#cep').value
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function(response){
            if(response.data.erro){
                //se deu erro, alerta no navegador
                alert('CEP não encontrado')
            }else{
                //se encontrou, mostra no console
                console.table(response.data)
                //ver o que fazer com a resposta do cep em formato de objeto
            }
    })
}
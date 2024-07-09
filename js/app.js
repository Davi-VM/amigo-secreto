let nomes = []

function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(nome.value == ''){
        alert("Nenhum nome foi digitado. Digite um nome para continuar.");
        return;
    }
    else{
        if(nomes.indexOf(nome.value) == -1){
            nomes.push(nome.value);
            if(lista.textContent == ''){
                lista.textContent = nome.value;
            }
            else{
                lista.textContent = lista.textContent + ', ' + nome.value;
            }
        }
        else{
            alert(`O nome ${nome.value} já foi digitado. Utilize o sobrenome ou outra forma de diferenciação para continuar.`);
            return;
        }
    }
    
    nome.value = '';
}

function sortear(){
    if(nomes.length < 3){
        alert("Número de pessoas muito baixo. Digite pelo menos três nomes para continuar.");
        return;
    }
    else{
        embaralhar(nomes);

        let sorteio = document.getElementById('lista-sorteio');

        for(let i = 0; i < nomes.length; i++){
            if(i == nomes.length - 1){
                sorteio.innerHTML = sorteio.innerHTML + nomes[i] + ' --> ' + nomes[0] + '<br>';
            }
            else{
                sorteio.innerHTML = sorteio.innerHTML + nomes[i] + ' --> ' + nomes[i + 1] + '<br>';
            }
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    nomes = []
    let nome = document.getElementById('nome-amigo').value = '';
    let lista = document.getElementById('lista-amigos').innerHTML = '';
    let sorteio = document.getElementById('lista-sorteio').innerHTML = '';
}
const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();//previnimos o comportamento padrão de atualizar a página ao clicarmos em submit

    const nome = event.target.elements['nome'].value;//capturamos o valor do campo nome do formulário
    const quantidade = event.target.elements['quantidade'].value;//capturamos o valor do campo quantidade do formulário

    criaElemento(nome,quantidade);
    
    form.reset();//após o envio do formulário limpamos os campos dele
});

function criaElemento(nome,quantidade){

    const novoItem = document.createElement('li');//criamos um novo elemento li que irá fazer parte de nossa lista
    novoItem.classList.add('item');//adicionamos a classe 'item' ao elemento

    const numeroItem = document.createElement('strong');//criamos um novo elemento strong que receberá a quantidade do item
    numeroItem.innerHTML = quantidade;//a constante numeroItem recebe a quantidade em sua estrutura HTML

    novoItem.appendChild(numeroItem);//fazemos com que nossa li aglutine a tag strong que contém o número do item
    novoItem.innerHTML += nome;//inserimos o parâmetro nome a estrutura HTML da do novoItem criado

    lista.appendChild(novoItem);//fazemos com que nossa lista aglutine o novo item li

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }//criamos uma const que recebe um par de objetos

    itens.push(itemAtual);//empurramos para dentro de nosso array itens cada novo item que estamos adicionando

    localStorage.setItem("item", JSON.stringify(itens));//passamos como valor da chave do item que irá para o local storage nosso array de itens criados
}
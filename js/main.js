const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];//verificamos a existência de itens em nosso localStorage, se não houver criamos um novo array

itens.forEach ( (elemento) =>{
    criaElemento(elemento);
});


form.addEventListener("submit", (event) => {
    event.preventDefault();//previnimos o comportamento padrão de atualizar a página ao clicarmos em submit

    const nome = event.target.elements['nome'];//capturamos o campo nome do formulário
    const quantidade = event.target.elements['quantidade'];//capturamos o campo quantidade do formulário

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }//criamos uma const que recebe um par de objetos

    criaElemento(itemAtual);

    itens.push(itemAtual);//empurramos para dentro de nosso array itens cada novo item que estamos adicionando

    localStorage.setItem("itens", JSON.stringify(itens));//passamos como valor da chave do item que irá para o local storage nosso array de itens criados
    
    form.reset();//após o envio do formulário limpamos os campos dele
});

function criaElemento(item){

    const novoItem = document.createElement('li');//criamos um novo elemento li que irá fazer parte de nossa lista
    novoItem.classList.add('item');//adicionamos a classe 'item' ao elemento

    const numeroItem = document.createElement('strong');//criamos um novo elemento strong que receberá a quantidade do item
    numeroItem.innerHTML = item.quantidade;//a constante numeroItem recebe a quantidade em sua estrutura HTML

    novoItem.appendChild(numeroItem);//fazemos com que nossa li aglutine a tag strong que contém o número do item
    novoItem.innerHTML += item.nome;//inserimos o parâmetro nome a estrutura HTML da do novoItem criado

    lista.appendChild(novoItem);//fazemos com que nossa lista aglutine o novo item li
}
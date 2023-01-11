const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];//verificamos a existência de itens em nosso localStorage, se não houver criamos um novo array

itens.forEach ( (elemento) =>{
    criaElemento(elemento);//através do forEach passamos por cada um dos itens do array itens e acessamos suas propriedades com as funcionalidades de criaElemento
});


form.addEventListener("submit", (event) => {
    event.preventDefault();//previnimos o comportamento padrão de atualizar a página ao clicarmos em submit

    const nome = event.target.elements['nome'];//capturamos o campo nome do formulário
    const quantidade = event.target.elements['quantidade'];//capturamos o campo quantidade do formulário

    const existe = itens.find( elemento => elemento.nome === nome.value )

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }//criamos uma const que recebe um par de objetos

   
    
    if(existe){
        itemAtual.id = existe.id;//se o elemento foi encontrado, apenas vamos usar como seu id o id já previamente estabelecido
        
        atualizaElemento(itemAtual);//se o nome é encontrado, atualizamos o elemento

        itens[existe.id] = itemAtual;

    }else{
        itemAtual.id = itens.length;//se o elemento não foi encontrado, usar como id o novo tamanho de nosso aray (que inclui o elemento que acabamos de criar)

        criaElemento(itemAtual);//se o nome não é encontrado, aqui passamos para nosso criaElemento como parâmetro o objeto itemAtual

        itens.push(itemAtual);//empurramos para dentro de nosso array itens cada novo item que estamos adicionando
    }





    localStorage.setItem("itens", JSON.stringify(itens));//passamos como valor da chave do item que irá para o local storage nosso array de itens criados
    
    form.reset();//após o envio do formulário limpamos os campos dele
});

function criaElemento(item){//nossa função criaElemento recebe como parâmetor um item

    const novoItem = document.createElement('li');//criamos um novo elemento li que irá fazer parte de nossa lista
    novoItem.classList.add('item');//adicionamos a classe 'item' ao elemento

    const numeroItem = document.createElement('strong');//criamos um novo elemento strong que receberá a quantidade do item
    numeroItem.innerHTML = item.quantidade;//a constante numeroItem recebe a quantidade em sua estrutura HTML

    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem);//fazemos com que nossa li aglutine a tag strong que contém o número do item
    novoItem.innerHTML += item.nome;//inserimos o parâmetro nome a estrutura HTML da do novoItem criado

    lista.appendChild(novoItem);//fazemos com que nossa lista aglutine o novo item li
}

function atualizaElemento (item){
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade;
}
const form = document.getElementById("novoItem");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.elements['nome'].value);
    console.log(event.target.elements['quantidade'].value);
});
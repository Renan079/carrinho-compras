let totalgeral;
limpar();

function adicionar() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidadeDoProduto = document.getElementById("quantidade"); 
    let subTotal = quantidadeDoProduto.value * valorUnitario;

    let listacarrinho = document.getElementById("lista-produtos");
    listacarrinho.innerHTML = listacarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeDoProduto.value}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
    </section>` 
    totalgeral = totalgeral + subTotal;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$${totalgeral}`

}


function limpar() {
    totalgeral = 0
    document.getElementById("lista-produtos").innerHTML = " ";
    document.getElementById("valor-total").innerHTML =  "R$ 0";
}
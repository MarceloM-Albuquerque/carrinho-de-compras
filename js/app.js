let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];  //slpit quebra o texto em posições a parrtir do caracter indicado
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade < 0) {
        alert('Quantidade invalida!')

    } else {
        if (quantidade == 0) {
            alert('Quantidade zerada, digite a quantidade!')
        } else {
            //calcular preço: subtotal
            let preco = quantidade * valorProduto;

            //adicionar no carrinho
            let carrinho = document.getElementById('lista-produtos');
            carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;

            //atualiza o valor total
            totalGeral = totalGeral + preco;
            let camporTotal = document.getElementById('valor-total');
            camporTotal.textContent = `R$${totalGeral}`;
            document.getElementById('quantidade').value = 0;
        }
    }
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
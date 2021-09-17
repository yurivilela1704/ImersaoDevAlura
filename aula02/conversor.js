function Converter()
{
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    //console.log(valorEmDolarNumerico);

    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real de U$" + valorEmDolarNumerico + ",00" + " é R$" + valorEmReal + ",00";
    elementoValorConvertido.innerHTML = valorConvertido

}
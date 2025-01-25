function calcular(){
    var valor = document.getElementById("valor").value;
    var gasolina_pix = 6.09;
    var alcool_pix = 4.19;
    var gasolina_adtivada_pix = 7.09;
    var alcool_adtivado_pix = 5.19;
    var gasolina_pixTotal = valor / gasolina_pix;
    var alcool_pixTotal = valor / alcool_pix;
    var gasolina_adtivada_pixTotal = valor / gasolina_adtivada_pix;
    var alcool_adtivado_pixTotal = valor / alcool_adtivado_pix;
    document.getElementById("Gasolina_pix").innerHTML = gasolina_pixTotal.toFixed(2);
    document.getElementById("Alcool_pix").innerHTML = alcool_pixTotal.toFixed(2);
    document.getElementById("Gasolina_adtivada_pix").innerHTML = gasolina_adtivada_pixTotal.toFixed(2);
    document.getElementById("Alcool_adtivado_pix").innerHTML = alcool_adtivado_pixTotal.toFixed(2);

    var gasolina = 7.59;
    var alcool = 5.79;
    var gasolina_adtivada = 8.39;
    var alcool_adtivado = 6.79;
    var gasolinaTotal = valor / gasolina;
    var alcoolTotal = valor / alcool;
    var gasolina_adtivadaTotal = valor / gasolina_adtivada;
    var alcool_adtivadoTotal = valor / alcool_adtivado;
    document.getElementById("gasolina").innerHTML = gasolinaTotal.toFixed(2);
    document.getElementById("alcool").innerHTML = alcoolTotal.toFixed(2);
    document.getElementById("gasolina_adtivada").innerHTML = gasolina_adtivadaTotal.toFixed(2);
    document.getElementById("alcool_adtivado").innerHTML = alcool_adtivadoTotal.toFixed(2);
}
function calcular_litros(){
    var litros = document.getElementById("Litros").value;
    var gasolina_litros = 7.59;
    var gasolina_adtivada_litros = 8.39;
    var alcool_litros = 5.79;
    var alcool_adtivado_litros = 6.79;
    var gasolina_litrosTotal = litros * gasolina_litros;
    var gasolina_adtivada_litrosTotal = litros * gasolina_adtivada_litros;
    var alcool_litrosTotal = litros * alcool_litros;
    var alcool_adtivado_litrosTotal = litros * alcool_adtivado_litros;
    document.getElementById("Gasolina_litros").innerHTML = gasolina_litrosTotal.toFixed(2);
    document.getElementById("Gasolina_adtivada_litros").innerHTML = gasolina_adtivada_litrosTotal.toFixed(2);
    document.getElementById("Alcool_litros").innerHTML = alcool_litrosTotal.toFixed(2);
    document.getElementById("Alcool_adtivado_litros").innerHTML = alcool_adtivado_litrosTotal.toFixed(2);
    
    var gasolina_pix_litros = 6.09;
    var gasolina_adtivada_pix_litros = 7.09;
    var alcool_pix_litros = 4.19;
    var alcool_adtivado_pix_litros = 5.19;
    var gasolina_pix_litrosTotal = litros * gasolina_pix_litros;
    var gasolina_adtivada_pix_litrosTotal = litros * gasolina_adtivada_pix_litros;
    var alcool_pix_litrosTotal = litros * alcool_pix_litros;
    var alcool_adtivado_pix_litrosTotal = litros * alcool_adtivado_pix_litros;
    document.getElementById("Gasolina_pix_litros").innerHTML = gasolina_pix_litrosTotal.toFixed(2);
    document.getElementById("Gasolina_adtivada_pix_litros").innerHTML = gasolina_adtivada_pix_litrosTotal.toFixed(2);
    document.getElementById("Alcool_pix_litros").innerHTML = alcool_pix_litrosTotal.toFixed(2);
    document.getElementById("Alcool_adtivado_pix_litros").innerHTML = alcool_adtivado_pix_litrosTotal.toFixed(2);
}

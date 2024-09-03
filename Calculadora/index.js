function somar(){
    let num1= parseFloat(document.getElementById('num1').value);
    let num2= parseFloat(document.getElementById('num2').value);
    
    let resultado= num1 + num2;

    document.getElementById('resultado').value = resultado;
}

function subtrair(){
    let num3= parseFloat(document.getElementById('num3').value);
    let num4= parseFloat(document.getElementById('num4').value);
    
    let resultado2= num3 - num4;

    document.getElementById('resultado2').value = resultado2;
}

function multiplicar(){
    let num5= parseFloat(document.getElementById('num5').value);
    let num6= parseFloat(document.getElementById('num6').value);
    
    let resultado3 = num5 * num6;

    document.getElementById('resultado3').value = resultado3;
}

function dividir(){
    let num7= parseFloat(document.getElementById('num7').value);
    let num8= parseFloat(document.getElementById('num8').value);
    
    let resultado4 = num7 / num8;

    document.getElementById('resultado4').value = resultado4;
}

function limpar1() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";

}

function limpar2() {
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("resultado2").value = "";

}

function limpar3() {
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
    document.getElementById("resultado3").value = "";

}
function limpar4() {
    document.getElementById("num7").value = "";
    document.getElementById("num8").value = "";
    document.getElementById("resultado4").value = "";

}




function removePlaceholder(element) {
    element.removeAttribute('placeholder');
}
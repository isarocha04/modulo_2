function calculo(){
    var num1 = parseFloat(document.getElementById('op1').value)
    var operador = document.getElementById('operador').value
    var num2 = parseFloat(document.getElementById('op2').value)

    var resultado

    if(operador == 0){
        resultado = num1 + num2
    }
    else if(operador ==1){
        resultado = num1 - num2
    }
    else if(operador ==2){
        resultado = num1 * num2
    }
    else if(operador ==3){
        resultado = num1 / num2
    }
    else if(operador ==4){
        resultado = Math.floor(num1 / num2);
    }
    else if(operador ==5){
        resultado = num1 % num2
    }

    document.getElementById('saida').innerHTML = resultado;
}
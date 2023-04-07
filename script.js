var numeroSecreto =  parseInt(Math.random()* 11);
var t = 0;



function Chutar() {

    
    var elementoResultado = document.getElementById("resultado");
    var chute =  parseInt(document.getElementById("valor").value);
    console.log(chute);
    t ++;
    if (chute == numeroSecreto) {
         elementoResultado.innerHTML = "Você acertou."
    } 
else if (chute>10||chute <0) {
    elementoResultado.innerHTML=" Você deve digitar um número de 0 a 10";
}
        else {
            elementoResultado.innerHTML=" Você errou"  ;
         }

         if(t== 5 && chute !== numeroSecreto) {

            elementoResultado.innerHTML = "Você execedeu o número de tentativas, o número secreto é: " + numeroSecreto;

         }

         

        
} 
function Limpar() {
  const valor = document.querySelector("#valor")
  valor.value = " ";
}

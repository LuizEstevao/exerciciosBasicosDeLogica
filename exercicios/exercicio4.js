export function executar() {
    alert("Executando Exercício 4!");
  
    let num1 = Number(prompt("digite o valor do primeiro numero: "));
    let num2 = Number(prompt("digite o valor do segundo numero: "));
  
    function Multiplicar(num1, num2) {
      return num1 * num2;
    }
  
    alert(Multiplicar(num1, num2));
  }
  
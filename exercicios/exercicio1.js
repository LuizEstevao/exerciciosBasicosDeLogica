export function executar() {
    alert("Executando Exercício 1!");
  
    let num1 = parseFloat(prompt("Digite o primeiro numero: "));
    let num2 = parseFloat(prompt("Digite o segundo numero: "));
  
    let soma = num1 + num2;
  
    if (soma % 2 == 0) {
      alert(`${soma} é  um numero par.`);
    } else {
      alert(`${soma} é um numero impar.`);
    }
  }
  
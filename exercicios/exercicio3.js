export function executar() {
    alert("Executando Exercício 3!");
  
    let escolha = parseInt(
      prompt("Escolha como quer que o contador funcione \n 1 = for \n 2 = while")
    );
  
    if (escolha == 1) {
      for (let i = 0; i <= 10; i++) {
        console.log(`O número a ser impresso é: ${i}`);
      }
    } else if (escolha == 2) {
      let i = 0;
      while (i <= 10) {
        console.log(`O número a ser impresso é: ${i}`);
        i++;
      }
    } else {
      alert("Escolha inválida");
    }
  }
  
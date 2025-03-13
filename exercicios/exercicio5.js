export function executar() {
    alert("Executando Exercício 5!");
  
    let listaDeFrutas = ["maçã", "banana", "morango", "uva", "laranja"];
  
    console.log(listaDeFrutas[0]);
    console.log(listaDeFrutas[4]);
    listaDeFrutas.push("limão");
    listaDeFrutas.shift(1);
    alert(listaDeFrutas);
  }
  
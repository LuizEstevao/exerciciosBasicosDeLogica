export function executar() {
    alert("Executando exercicio 6!");
  
    let nome = String(prompt("Qual é o seu nome?"));
    let idade = Number(prompt("Qual é a sua idade?"));
    let sexo = String(prompt("Qual é o seu sexo?"));
    let cidade = String(prompt("Qual é a sua cidade?"));
  
    let pessoa = {
      nome: nome,
      idade: idade,
      sexo: sexo,
      cidade: cidade,
    };
    alert(`nome: ${pessoa.nome}\n idade:${pessoa.idade}\n sexo: ${pessoa.sexo}\n cidade: ${pessoa.cidade}\n`);
  }
  
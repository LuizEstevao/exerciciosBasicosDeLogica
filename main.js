function carregarExercicio() {
    let selectElement = document.getElementById("exercicioSelecionado");
  
    if (!selectElement || !selectElement.value) {
      console.error("Nenhum exercício selecionado!");
      return; // Para a execução se o valor for inválido
    }
  
    let exercicio = selectElement.value; // Obtém o valor selecionado
  
    import(`./exercicios/${exercicio}.js`)
      .then((module) => module.executar())
      .catch((err) => console.error("Erro ao carregar o exercício:", err));
  }
  
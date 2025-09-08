document.getElementById('enviar').addEventListener('click', calcularMedias);
document.getElementById('limpar').addEventListener('click', limparInput);
function calcularMedias() {
  // Grupo 1
  const g1v1 = parseFloat(document.getElementById('g1v1').value);
  const g1v2 = parseFloat(document.getElementById('g1v2').value);
  const g1v3 = parseFloat(document.getElementById('g1v3').value);
  const media1 = (g1v1 + g1v2 + g1v3) / 3;

  // Grupo 2
  const g2v1 = parseFloat(document.getElementById('g2v1').value);
  const g2v2 = parseFloat(document.getElementById('g2v2').value);
  const g2v3 = parseFloat(document.getElementById('g2v3').value);
  const media2 = (g2v1 + g2v2 + g2v3) / 3;

  // Exibir resultados
  document.getElementById('resultado').innerHTML =
    'Sistólica: ' +
    media1.toFixed(0) +
    '<br>' +
    'Diastólica: ' +
    media2.toFixed(0);

    
}

function limparInput(){
  document.getElementById('resultado').innerHTML = ""
  g1v1.value = "";
  g1v2.value = "";
  g1v3.value = "";

  g2v1.value = "";
  g2v2.value = "";
  g2v3.value = "";
}

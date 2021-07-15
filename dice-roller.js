// Um dado contém o número 1 a 6
// Simular 1000 lançamentos de um par de dados
//Para cada possível lançamento, conte a frequência. Use um array para armazenar os resultados.
// O resultado deve formar uma barra gráfica, usando uma DIV para cada barra e variando as dimensões proporcionalmente aos resultados.
//Função para gerar jogar um dado

//criar uma div
let makeDiv = document.createElement('div');
makeDiv.id = 'makeDiv';
document.body.appendChild(makeDiv);

//criar uma div com a id para conter os elementos do grafico
let container = document.createElement('div');
container.id = 'container';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'flex-start';
document.body.appendChild(container);

// função com a lógica do dado
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
  // console.log('Você rollou: ' + roll);
}

// rola 02 dados ao mesmo tempo
function rollDices() {
  return rollDice() + rollDice();
}

// rolar os dados 1000x
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let sum = 0;
for (let i = 0; i < 1000; i++) {
  count[rollDices() - 2]++;
}

// Cria um paragrafo que retorna os valores dos dados que foram rolados
for (let i = 2; i <= 12; i++) {
  let makeP = document.createElement('p');
  makeP.innerText = i + '.) ' + count[i - 2];
  document.querySelector('#makeDiv').appendChild(makeP);
}

// criar as barras com estilização
for (let i = 2; i <= 12; i++) {
  anotherDiv = document.createElement('div');
  anotherDiv.style.background = 'darkred';
  anotherDiv.style.borderTop = '1px solid #000';
  anotherDiv.style.color = '#FFF';
  anotherDiv.style.height = '30px';
  anotherDiv.style.width = ((count[i - 2] * 100) / 1000) * 5 + '%';
  anotherDiv.innerText = i + '.) ' + (count[i - 2] * 100) / 1000 + '%';
  document.querySelector('#container').appendChild(anotherDiv);
}

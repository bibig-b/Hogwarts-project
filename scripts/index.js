document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    const pontuacao = {
      grifinoria: 0,
      sonserina: 0,
      corvinal: 0,
      lufalufa: 0
    };
  
    respostas.forEach(resposta => {
      pontuacao[resposta.value]++;
    });
  
    const casa = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);
  
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Você pertence à casa ${casa.charAt(0).toUpperCase() + casa.slice(1)}! 🏰`;
    resultado.className = `resultado ${casa}`;
    resultado.classList.add('mostrar');
  
    const brasoes = {
      grifinoria: ("")
      sonserina: '',
      corvinal: '',
      lufalufa: ''
    };
  
    const imgBrasao = document.getElementById('brasao');
    imgBrasao.src = brasoes[casa];
    imgBrasao.style.display = 'block';
  });
  
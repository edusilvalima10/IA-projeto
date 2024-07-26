const caixaPrincipal = document.querySelectorAll(".caixa principal");
const caixaPerguntas = document.querySelectorAll(".caixa perguntas");
const caixaAlternativas = document.querySelectorAll(".caixa alternativas");
const caixaResultado = document.querySelectorAll(".caixa resultado");
const textoResultado = document.querySelectorAll(".resultado final");

const Perguntas = [
    {
    enunciado: "Você é um milionário e filamtropo de extrema importância para sua cidade e nação. Certo dia você recebe uma ligação de uma autoridade anônima lhe dizendo: Não me perguntre quem sou e de onde estou ligando, apenas saiba que suspeitamos que algo grande está para acontecer. Precisamos de sua ajuda, está dentro?",
    alternativas:[

        {
        texto: "Estou dentro",
        afirmação: 
        },

        {
       texto: "Estou fora"
       afirmação: 

        }
]
},

{
enunciado: "Após receber detalhes a repeito de uma reunião ultra secreta, você se dirige a uma sede do governo onde descobre que até mesmo o presidente está no local. De costas, o presidente diz: A Venezuela comunicou diversas nações a respeito de um a tecnologia de IA que ultrapassa todas as já existentes, mas ao analisarmos percebemos que há algo de estranho nessa história, pois o país não tem a estrutura e nem o investimento necessário para criar algo tão inovador. São os detalhes que precisa saber, queremos que você nos ajude cedendo algumas de suas tecnologias avançadas e usar seu dinheiro para deixar tudo por debaixo dos panos, tanto para as nação es quanto para a população de nosso país. Um espião será enviado numa missão ao país para investigar o que está ocorrendo. O presidente se vira para vocẽ e pergunta: Você ajudará? ",
alternativas:[
    "certamente.",
    "Isso é loucura."
]
},        
{
enunciado: "O espião chega ao país e descobre o local onde está sendo desenvolvido a inteligência artificial. Lá ele observa um grupo de homens terno entregando uma maleta om um objeto brilhante dentro. Ele segue a maleta e eles chegam a uma sala com um robô gigante de aparência nada amigável. Eles inserem o objeto no peito do robô que inicia e ergue a cabeça. O espião se posiciona num ponto estratégico nos ferros de sustentação da estrutura da sala e nos afirma carrega uma bomba pequena em seu cinturão, ele a pega na mão, mira no peito da máquina e pergunta: Devo destruir?",
alternativas:[
    {
    texto: "Jogue",
    afirmação:

    },

    {
    "Aguarde, esse robô não deve ser nada de mais!"
    }
]
}


]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botãoAlternativas = document.createElement("button");
    botãoAlternativa.textContent = alternativa;
    caixaAlternativas.appendChild(botãoAlternativas);
}
}
mostraPergunta()
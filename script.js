const caixaPrincipal = document.querySelectorAll(".caixa principal");
const caixaPerguntas = document.querySelectorAll(".caixa perguntas");
const caixaAlternativas = document.querySelectorAll(".caixa alternativas");
const caixaResultado = document.querySelectorAll(".caixa resultado");
const textoResultado = document.querySelectorAll(".resultado final");

const perguntas = [
    {
    enunciado: "Você é um milionário e filamtropo de extrema importância para sua cidade e nação. Certo dia você recebe uma ligação de uma autoridade anônima lhe dizendo: Não me perguntre quem sou e de onde estou ligando, apenas saiba que suspeitamos que algo grande está para acontecer. Precisamos de sua ajuda, está dentro?",
    alternativas:[
        "Estou dentro",
        "Estou fora"
]
},

{
enunciado: "Após receber detalhes a repeito de uma reunião ultra secreta, você se dirige a uma sede do governo onde descobre que até mesmo o presidente está no local. de costas, o presidente diz: A Venezuela comunicou diversas nações a respeito de um a tecnologia de IA que ultrapassa todas as já existentes, mas ao analisarmos percebemos que há algo de estranho nessa história, pois o país não tem a estrutura e nem o investimento necessário para criar algo tão inovador. São os detalhes quie precisa saber, queremos que vá numa missão ao país para investigar o que está ocorrendo. O pesidente se vira para vocẽ e pergunta: Você irá? ",
alternativas:[
    "Irei.",
    "Não correrei tal risco."
]
},        
{
enunciado: "pergunta3",
alternativas:[
    "alternativa1",
    "alternativa2"
]
}


]
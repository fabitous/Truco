var baralho = [
  "<div class='estampa' valor='111' data_print='A ♣'><img src='img/A_zap.png'></img></div>",
  "<div class='estampa' valor='106' data_print='2 ♣'><img src='img/2_zap.png'></img></div>",
  "<div class='estampa' valor='107' data_print='3 ♣'><img src='img/3_zap.png'></img></div>",
  "<div class='estampa' valor='100' data_print='4 ♣'><img src='img/4_zap.png'></img></div>",
  "<div class='estampa' valor='101' data_print='7 ♣'><img src='img/7_zap.png'></img></div>",
  "<div class='estampa' valor='102' data_print='Q ♣'><img src='img/Q_zap.png'></img></div>",
  "<div class='estampa' valor='103' data_print='J ♣'><img src='img/J_zap.png'></img></div>",
  "<div class='estampa' valor='104' data_print='K ♣'><img src='img/K_zap.png'></img></div>",
  "<div class='estampa' valor='110' data_print='A ♥'><img src='img/A_copas.png'></img></div>",
  "<div class='estampa' valor='106' data_print='2 ♥'><img src='img/2_copas.png'></img></div>",
  "<div class='estampa' valor='107' data_print='3 ♥'><img src='img/3_copas.png'></img></div>",
  "<div class='estampa' valor='100' data_print='4 ♥'><img src='img/4_copas.png'></img></div>",
  "<div class='estampa' valor='101' data_print='7 ♥'><img src='img/7_copas.png'></img></div>",
  "<div class='estampa' valor='102' data_print='Q ♥'><img src='img/Q_copas.png'></img></div>",
  "<div class='estampa' valor='103' data_print='J ♥'><img src='img/J_copas.png'></img></div>",
  "<div class='estampa' valor='104' data_print='K ♥'><img src='img/K_copas.png'></img></div>",
  "<div class='estampa' valor='105' data_print='A ♦'><img src='img/A_ouro.png'></img></div>",
  "<div class='estampa' valor='106' data_print='2 ♦'><img src='img/2_ouro.png'></img></div>",
  "<div class='estampa' valor='107' data_print='3 ♦'><img src='img/3_ouro.png'></img></div>",
  "<div class='estampa' valor='100' data_print='4 ♦'><img src='img/4_ouro.png'></img></div>",
  "<div class='estampa' valor='108' data_print='7 ♦'><img src='img/7_ouro.png'></img></div>",
  "<div class='estampa' valor='102' data_print='Q ♦'><img src='img/Q_ouro.png'></img></div>",
  "<div class='estampa' valor='103' data_print='J ♦'><img src='img/J_ouro.png'></img></div>",
  "<div class='estampa' valor='104' data_print='K ♦'><img src='img/K_Ouro.png'></img></div>",
  "<div class='estampa' valor='105' data_print='A ♠'><img src='img/A_espada.png'></img></div>",
  "<div class='estampa' valor='106' data_print='2 ♠'><img src='img/2_espada.png'></img></div>",
  "<div class='estampa' valor='107' data_print='3 ♠'><img src='img/3_espada.png'></img></div>",
  "<div class='estampa' valor='100' data_print='4 ♠'><img src='img/4_espada.png'></img></div>",
  "<div class='estampa' valor='109' data_print='7 ♠'><img src='img/7_espada.png'></img></div>",
  "<div class='estampa' valor='102' data_print='Q ♠'><img src='img/Q_espada.png'></img></div>",
  "<div class='estampa' valor='103' data_print='J ♠'><img src='img/J_espada.png'></img></div>",
  "<div class='estampa' valor='104' data_print='K ♠'><img src='img/K_espada.png'></img></div>",
]

var darCartas = false;
var indiceCarta = 0;
var primeira;
var cartaNaMesa;
var tento = 1;
var truco = false;
var pernas = [0,0];
var pontos = [0,0];
var jogada = [0,0];
var mapCartasCamputador = {
  0 : "cartaComputador1",
  1 : "cartaComputador2",
  2 : "cartaComputador3",
};
var jogadorTorna = false;
var jogadorComecaRodada = confirm("Quer começar?");


function game() {
do{
  if(darCartas) {
    DarCartas();
  }
  if(jogadorComecaRodada || jogadorTorna) {
    do{

    }while(jogada[1] == 0)
  } else {
    JogarComputador();
  }
  VerificaCartasNaMesa();
while(true);
}

function DarCartas() {
  if(pontos[0] <= 11 && pontos[1] <= 11) {
    indiceCarta = 0;
    tento = 1;
    pernas[0] = 0;
    pernas[1] = 0;
    primeira = "nenhuma";
    document.getElementById("carta1").innerHTML = null;
    document.getElementById("carta2").innerHTML = null;
    document.getElementById("carta3").innerHTML = null;
    document.getElementById("carta1").style.opacity = "1";
    document.getElementById("carta2").style.opacity = "1";
    document.getElementById("carta3").style.opacity = "1";
    document.getElementById("btn-truco").disabled  = false;
    document.getElementById("status").innerHTML = "&nbsp;Valendo um tento";
    if(pontos[1]==11) {
      document.getElementById("btn-truco").disabled  = true;
    }
    baralho.sort(function() { return .5 - Math.random() });
    document.getElementById("carta2").innerHTML = baralho[indiceCarta];indiceCarta++;
    document.getElementById("carta1").innerHTML = baralho[indiceCarta];indiceCarta++;
    document.getElementById("carta3").innerHTML = baralho[indiceCarta];indiceCarta++;
    document.getElementById("cartaComputador1").innerHTML = baralho[indiceCarta];indiceCarta++;
    document.getElementById("cartaComputador2").innerHTML = baralho[indiceCarta];indiceCarta++;
    document.getElementById("cartaComputador3").innerHTML = baralho[indiceCarta];indiceCarta = 0;
    document.getElementById("mesa").innerHTML = " ";
    jogada[0] = 0;
      if(jogadorComecaRodada == false && jogada[0] == 0) {
        JogarComputador();
      }
    } else {
      if(pontos[1] >= 12) {
        document.body.innerHTML = "<h1>Parabéns! Você ganhou a partida!</h1><a href='play.html'>Jogar outra partida!</a>";
      } else {
        document.body.innerHTML = "<h1>Infelizmente o computador levou essa!</h1><a href='play.html'>Jogar outra partida?<a/>";
      }
    }
}

function Jogar(clicked) {
  if(document.getElementById(clicked).innerHTML != " ") {
    if (jogada[0] != 0 && jogada[1] != 0) {
      var cartasDadas = VerificaCartasNaMesa();
    }
    if(cartasDadas != true) {
      document.getElementById("carta1").style.opacity = "1";
      document.getElementById("carta2").style.opacity = "1";
      document.getElementById("carta3").style.opacity = "1";
      document.getElementById(clicked).style.opacity = "0.5";
      jogada[1] = document.getElementById(clicked).getElementsByClassName("estampa")[0].getAttribute("valor");
      var consolePrint =  document.getElementById(clicked).getElementsByClassName("estampa")[0].getAttribute("data_print");
      cartaNaMesa = document.getElementById(clicked).innerHTML;
      document.getElementById(clicked).innerHTML = " ";
      document.getElementById("mesa").innerHTML += cartaNaMesa;
      console.log("Jogador carta  " + indiceCarta + " - " + consolePrint);
    }
    if (jogada[0] != 0 && jogada[1] != 0) {
      VerificaCartasNaMesa();
    }
    if(indiceCarta == 0 && jogada[1] == 0 && jogadorComecaRodada == true) {

    } else if(cartasDadas != true) {
      JogarComputador();
    }
  } else {
    if (jogada[0] != 0 && jogada[1] != 0) {
      VerificaCartasNaMesa();
    }
  }
}

function VerificaCartasNaMesa() {
  if (jogada[0] != 0 && jogada[1] != 0) {
      var darCartas = false;
      if(jogada[0] > jogada[1]) {
        pernas[0] += 1;
        if(indiceCarta == 0) {primeira = "computer";} else {primeira = "player";}
      }
      if(jogada[1] > jogada[0]) {
        pernas[1] += 1;
        if(indiceCarta == 0) {primeira = "player";} else {primeira = "computer";}
      }
      indiceCarta++;
      document.getElementById("mesa").innerHTML = null;
      jogada[0] = 0;
      jogada[1] = 0;
      if(pernas[0] == 2 || pernas[1] == 2) {
        if(pernas[0] == 2) {
          pontos[0] += tento;
          document.getElementById("computerpoints").innerHTML = pontos[0];
          console.log("Computador tentos: " + pontos[0]);
        }
        if(pernas[1] == 2) {
          pontos[1] += tento;
          document.getElementById("playerpoints").innerHTML = pontos[1];
          console.log("Seus tentos: " + pontos[1]);
        }
        darCartas = true;
      } else if (indiceCarta == 3) {
        if(primeira == "player") {
          pontos[1] += tento;
          document.getElementById("playerpoints").innerHTML = pontos[1];
          console.log("Seus tentos: " + pontos[1]);
        }
        if(primeira == "computer") {
          pontos[0] += tento;
          document.getElementById("computerpoints").innerHTML = pontos[0];
          console.log("Computador tentos: " + pontos[0]);
        }
        darCartas = true;
      }
      if(darCartas == true) {
        if(jogadorComecaRodada == true) {
          jogadorComecaRodada = !jogadorComecaRodada;
        DarCartas();
      }
  }
  return darCartas;
}

function JogadorTrucar() {
    VerificaCartasNaMesa();
    if(Math.random(1) > 0.5) {
      tento = 3;
      document.getElementById("status").innerHTML = "&nbsp;Trucado!";
      console.log("Trucado");
      document.getElementById("btn-truco").disabled  = true;
    }
    else {
      pontos[1] += tento;
      document.getElementById("playerpoints").innerHTML = pontos[1];
      console.log("Seus tentos: " + pontos[1]);
      DarCartas();
    }
}

function ComputadorTrucar() {
  if(tento < 3 && indiceCarta > 0)  {
    if(confirm("TTTTRRRRRRRRUUUUUUUCCCCOOOO LADRÃO!")) {
      tento = 3;
      document.getElementById("status").innerHTML = "&nbsp;Trucado!";
      console.log("Trucado");
      document.getElementById("btn-truco").disabled  = true;
      return true;
    }
    else {
      pontos[0] += tento;
      document.getElementById("computerpoints").innerHTML = pontos[0];
      console.log("Computador tentos: " + pontos[0]);
      return false;
    }
  }
}

function JogarComputador() {
 var cartaComputador = mapCartasCamputador[indiceCarta];
 if((Math.random(1) > 0.77)&&(pontos[0]<11))  {
     if(ComputadorTrucar()) {
       var cartaComputador = "cartaComputador" + indiceCarta;
       jogada[0] = document.getElementById(cartaComputador).getElementsByClassName("estampa")[0].getAttribute("valor");
       document.getElementById("mesa").innerHTML += document.getElementById(cartaComputador).innerHTML;
       console.log("Computador carta " + indiceCarta + " - " + document.getElementById(cartaComputador).getElementsByClassName("estampa")[0].getAttribute("data_print"));
     }else{
       DarCartas();
     }
  } else {
    jogada[0] = document.getElementById(cartaComputador).getElementsByClassName("estampa")[0].getAttribute("valor");
    document.getElementById("mesa").innerHTML += document.getElementById(cartaComputador).innerHTML;
    console.log("Computador carta " + indiceCarta + " - " + document.getElementById(cartaComputador).getElementsByClassName("estampa")[0].getAttribute("data_print"));
  }
}

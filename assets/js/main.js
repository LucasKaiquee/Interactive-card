let nomeArea = document.getElementsByClassName('card-name')[0];
let nome = document.getElementById('nome');

let numeroArea = document.getElementsByClassName('card-number')[0];
let numero = document.getElementById('numero');

let dataArea = document.getElementsByClassName('card-validity')[0];
let mes = document.getElementById('mes');
let ano = document.getElementById('ano');

let cvcArea = document.getElementsByClassName('cvc')[0];
let cvc = document.getElementById('cvc');

function atualizarNome() {
    let nomeTexto = nome.value;
    return nomeArea.innerHTML = nomeTexto;
}

function atualizarNumero() {
    let num = numero.value;
    num = num.replace(/\s/g, "");
    num = num.replace(/(\d{4})(?=\d{1})/g, "$1 ");
    numero.value = num;
    return numeroArea.innerHTML = num
}

numero.addEventListener('keyup', function() {
    let valor = this.value;
    let campoP = document.getElementById('validation-number');
    if (/[^\d\s]/.test(valor)) {
      campoP.innerHTML = 'Wrong format, numbers only';
    } else {
      campoP.innerHTML = "";
    }
  });
 
function atualizarData() {
    let textoMes = mes.value;
    let textoAno = ano.value;
    return dataArea.innerHTML = textoMes + '/' + textoAno;
}

mes.addEventListener('keyup', function() {
    let valor = this.value;
    let campoP = document.getElementById('validation-data');
    if (/[^\d\s]/.test(valor) || valor > 12) {
      campoP.innerHTML = "Can't be blank";
    } else {
      campoP.innerHTML = "";
    }
  });

  ano.addEventListener('keyup', function() {
    let valor = this.value;
    let campoP = document.getElementById('validation-data');
    if (/[^\d\s]/.test(valor) || valor < 22) {
      campoP.innerHTML = "Can't be blank";
    } else if(mes.value <= 12) {
      campoP.innerHTML = "";
    }
  });

function atualizarCvc() {
    let cvcText = cvc.value;
    return cvcArea.innerHTML = cvcText;
}

cvc.addEventListener('keyup', function() {
    let valor = this.value;
    let campoP = document.getElementById('validation-cvc');
    if (/[^\d\s]/.test(valor)) {
      campoP.innerHTML = "Can't be blank";
    } else {
      campoP.innerHTML = "";
    }
  });

function CompleteMenssage() {
    let addClass = document.getElementsByClassName('input-area')[0];
    let removeClass = document.getElementsByClassName('complete')[0];
    let validationNumero = document.getElementById('validation-number');
    let validationData = document.getElementById('validation-data');
    let validationCvc = document.getElementById('validation-cvc');
    let btn = document.getElementsByClassName('bt')[0];

    if (validationNumero.innerHTML === ""  && validationData.innerHTML === "" && validationCvc.innerHTML === "" && nome.value != "" && numero.value != "" && ano.value != "" && mes.value != "" && cvc.value != "" ) {
        addClass.classList.toggle("is-complete");
        removeClass.classList.toggle("is-complete");
    } 
}

function reload () {
    document.location.reload(true);
}






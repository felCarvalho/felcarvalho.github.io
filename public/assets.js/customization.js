"use strict";

import {
  verificacaoGerador,
  newPassword,
  sliderRangeStyle,
  controlePassword,
  controleSLider,
  slider,
  lowerCase,
  upperCase,
  numberCaractere,
  simbolosEspecial,
  resetGeradorReferencia,
  btnResetGerador,
  resetGerador,
} from "../assets.js/script.js";

import {
  ativarGerador,
  desativarInterfaceLoginReferencia,
  desativarGerador,
  ativarTemporizador,
  ativarInterfaceLogin,
  desativarTemporizador,
  popUpLogin,
  controleEnter,
  containerPopUp,
  user,
  password,
} from "../assets.js/loginUser.js";

const btnIsBack = document.querySelector(".btn-back");
const temporizadorInsert = document.querySelector(".temporizador");
export const linkConvidado = document.querySelector(".link");
export const btnConfig = document.querySelector(".icon-config-header-open");
const config = document.querySelector(".container-menu-config");
const backgroundFundoPopUp = document.querySelector(".fundo-background-menu");
const titleClosedConfig = document.querySelector(".title-closed");
const btnClosedConfig = document.querySelector(".content-closed");
const optionPersonalizar = document.querySelector(".sub-content-link");
const modalOptionCaracteresForm = document.querySelector(
  ".container-option-config"
);
const tilteBackOptionForm = document.querySelector(".title-back-form");
const btnClosedOptionForm = document.querySelector(".btn-closed-form");
const palavraEspecial = document.querySelector(".background");
const linkStringFavorita = document.querySelector("#linkPalavraEspecial");
const closedTitlePalavraEspecial = document.querySelector(
  "#title-menu-closed-palavra-personalizada"
);
const closedBtnPalavraEspecial = document.querySelector(
  "#content-closed-palavra-personalizada"
);
const btnCancelarPalavraPessoal = document.querySelector(
  "#content-btn-cancelar-palavra-personalizada"
);
export const palavraEspecialValor = document.querySelector(
  "#palavra-personalizada-valor"
);

const btnConfirmarPalavraEspecial = document.querySelector(
  "#content-btn-confirmar-palavra-personalizada"
);
const containerTheme = document.querySelector(".content-dark");
const inputLowerCase = document.querySelector("#abc");
const inputUpperCase = document.querySelector("#ABC");
const inputNumber = document.querySelector("#numeros");
const inputSimbols = document.querySelector("#simbolos");
const btnConfirmar = document.querySelector(".btn-confirmar-form");
const btnCancelar = document.querySelector(".btn-cancelar-form");
const iconPen_abc = document.querySelector(".btn-icon-pen-abc");
const iconPenABC = document.querySelector(".btn-icon-pen-ABC");
const iconPenNumber = document.querySelector(".btn-icon-pen-number");
const iconPenSimbols = document.querySelector(".btn-icon-pen-simbolos");
const iconCheck_abc = document.querySelector(".btn-icon-check-abc");
const iconCheckABC = document.querySelector(".btn-icon-check-ABC");
const iconCheckNumber = document.querySelector(".btn-icon-check-number");
const iconCheckSimbolos = document.querySelector(".btn-icon-check-simbolos");
const verificacaoLower = /[a-z]/;
const verificacaoUpper = /[A-Z]/;
const verificacaoNumber = /[0-9]/;
const verificacaoCaracteresEspeciais = /[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~]`/;

//função para ativar e desativar o contaianer de de troca de tema
const desativarContentTheme = function () {
  containerTheme.classList.add("display-none");
};

export const ativarContentTheme = function () {
  containerTheme.classList.remove("display-none");
};

//função unica para melhorar o entendiment e diminução de codigo onde será executado para facilitar a leitura.
const verificarInputsEstado = function () {
  inputLowerCase.value = lowerCase;
  inputLowerCase.disabled = true;

  inputUpperCase.value = upperCase;
  inputUpperCase.disabled = true;

  inputNumber.value = numberCaractere;
  inputNumber.disabled = true;

  inputSimbols.value = simbolosEspecial;
  inputSimbols.disabled = true;

  palavraEspecialValor.value = "";
};

export const verificarInputsEstadoReferencia = function () {
  verificarInputsEstado();
};

window.addEventListener("load", verificarInputsEstadoReferencia);

//background para o popUp de configurações(remove o display-none)
const backgroundPopUpOn = () => {
  backgroundFundoPopUp.classList.remove("display-none");
};

//background para o popUp de configurações(adiciona o display-none)
const backgroundPopUpOff = () => {
  backgroundFundoPopUp.classList.add("display-none");
};

//popUp de configurações(remove display-none) e ativa o background para o popUp(backgroundPopUpOn)
const menuConfigOn = () => {
  config.classList.toggle("display-none");
  backgroundPopUpOn();
};

//popUp de configurações(adiciona display-none) e ainda deixa o background para o popUp de personalizar os caracteres.
const menuConfigOff = () => {
  config.classList.add("display-none");
  backgroundPopUpOn();
};

btnConfig.addEventListener("click", () => {
  menuConfigOn();
  backgroundPopUpOn();
});

titleClosedConfig.addEventListener("click", () => {
  menuConfigOff();
  backgroundPopUpOff();
  verificarInputsEstado();
});

btnClosedConfig.addEventListener("click", () => {
  menuConfigOff();
  backgroundPopUpOff();
  verificarInputsEstado();
});

optionPersonalizar.addEventListener("click", () => {
  modalOptionCaracteresForm.classList.remove("display-none");
  menuConfigOff();
  backgroundPopUpOn();
});

tilteBackOptionForm.addEventListener("click", () => {
  modalOptionCaracteresForm.classList.add("display-none");
  menuConfigOn();
});

const btnClosedForm = function () {
  //controlFormSenhaCLickPersonalizada(true);
  modalOptionCaracteresForm.classList.add("display-none");
  menuConfigOff();
  backgroundPopUpOff();
  verificarInputsEstado();
};

const btnClosedFormReferencia = function () {
  btnClosedForm();
};

btnClosedOptionForm.addEventListener("click", btnClosedFormReferencia);

const activeInputPersonalizado_abc = function () {
  inputLowerCase.disabled = false;
  inputLowerCase.focus();
};

const activeInputReferencia_abc = function () {
  activeInputPersonalizado_abc();
};

const activeInputPersonalizadosABC = function () {
  inputUpperCase.disabled = false;
  inputUpperCase.focus();
};

const activeInputReferenciaABC = function () {
  activeInputPersonalizadosABC();
};

const activeInputPersonalizadosNumber = function () {
  inputNumber.disabled = false;
  inputNumber.focus();
};

const activeInputReferenciaNumber = function () {
  activeInputPersonalizadosNumber();
};

const activeInputPersonalizadosSimbols = function () {
  inputSimbols.disabled = false;
  inputSimbols.focus();
};

const activeInputReferenciaSimbols = function () {
  activeInputPersonalizadosSimbols();
};

//funções para fazerem os inputs voltarem ao estado inical da pagina após fecharem o modal pelo btnClosed ou a seção de configurações como um todo
iconPen_abc.addEventListener("click", activeInputReferencia_abc);
iconPenABC.addEventListener("click", activeInputReferenciaABC);
iconPenNumber.addEventListener("click", activeInputReferenciaNumber);
iconPenSimbols.addEventListener("click", activeInputReferenciaSimbols);

//função de desabilitar inputs com checked e capturar seus valores atuais para uma maior interatividade no visual.
const btnCHeck_abc = function () {
  const valueAtual_abc = inputLowerCase.value;
  inputLowerCase.value = lowerCase;
  inputLowerCase.disabled = true;
  inputLowerCase.value = valueAtual_abc;
};
const btnCHeckABC = function () {
  const valueAtualABC = inputUpperCase.value;
  inputUpperCase.value = upperCase;
  inputUpperCase.disabled = true;
  inputUpperCase.value = valueAtualABC;
};
const btnCHeckNumber = function () {
  const valueAtualNumber = inputNumber.value;
  inputNumber.value = numberCaractere;
  inputNumber.disabled = true;
  inputNumber.value = valueAtualNumber;
};
const btnCHeckSimbols = function () {
  const valueAtualSimbols = inputSimbols.value;
  inputSimbols.value = simbolosEspecial;
  inputSimbols.disabled = true;
  inputSimbols.value = valueAtualSimbols;
};

iconCheck_abc.addEventListener("click", btnCHeck_abc);
iconCheckABC.addEventListener("click", btnCHeckABC);
iconCheckNumber.addEventListener("click", btnCHeckNumber);
iconCheckSimbolos.addEventListener("click", btnCHeckSimbols);

linkStringFavorita.addEventListener("click", () => {
  palavraEspecial.classList.remove("display-none");
  menuConfigOff();
  backgroundPopUpOn();
});

closedTitlePalavraEspecial.addEventListener("click", () => {
  palavraEspecial.classList.add("display-none");
  menuConfigOn();
});

const closedBtnPalavraPersonalizada = function () {
  palavraEspecial.classList.add("display-none");
  palavraEspecialValor.value = "";
  menuConfigOff();
  backgroundPopUpOff();
};

const closedBtnPalavraPersonalizadaReferencia = function () {
  closedBtnPalavraPersonalizada();
};

closedBtnPalavraEspecial.addEventListener(
  "click",
  closedBtnPalavraPersonalizadaReferencia
);

const BtnCancelarPalavraPessoalContainer = function () {
  palavraEspecial.classList.add("display-none");
  palavraEspecialValor.value = "";
  menuConfigOff();
  backgroundPopUpOff();
};

const btnCancelarPalavraPessoalReferencia = function () {
  BtnCancelarPalavraPessoalContainer();
};

btnCancelarPalavraPessoal.addEventListener(
  "click",
  btnCancelarPalavraPessoalReferencia
);

export let stringFinalPersonalizada;
console.log(stringFinalPersonalizada);

const stringPersonalizada = function (statusStringPersonalizada) {
  stringFinalPersonalizada = statusStringPersonalizada;
  console.log(stringFinalPersonalizada);
};

const confirmarPalavraPersonalizada = function () {
  palavraEspecial.classList.add("display-none");
  menuConfigOff();
  backgroundPopUpOff();
  let stringPessoal = palavraEspecialValor.value;
  stringPersonalizada(stringPessoal);
  palavraEspecialValor.value = "";
};

const confirmarPalavraPersonalizadaReferencia = function () {
  confirmarPalavraPersonalizada();
};

btnConfirmarPalavraEspecial.addEventListener(
  "click",
  confirmarPalavraPersonalizadaReferencia
);

const verificarCaracteresPersonalizados = function (
  lower,
  upper,
  number,
  simbols
) {
  const lowerCaseNew = new Set(lower);
  const upperCaseNew = new Set(upper);
  const numerosCaracteresNew = new Set(number);
  const simbolosCaracteresNew = new Set(simbols);
  console.log(
    lowerCaseNew,
    upperCaseNew,
    numerosCaracteresNew,
    simbolosCaracteresNew
  );

  const lowerCaseArray = [...lowerCaseNew];
  const upperCaseArray = [...upperCaseNew];
  const numerosCaracteresArray = [...numerosCaracteresNew];
  const simbolosCaracteresArray = [...simbolosCaracteresNew];

  const lowerCaseFinal = lowerCaseArray.join("");
  const upperCaseFinal = upperCaseArray.join("");
  const numerosCaracteresFinal = numerosCaracteresArray.join("");
  const simbolosCaracteresFinal = simbolosCaracteresArray.join("");

  verificacaoGerador(
    lowerCaseFinal,
    upperCaseFinal,
    numerosCaracteresFinal,
    simbolosCaracteresFinal
  );
};

const senhGeradaPersonalizada = function () {
  let minusculas = inputLowerCase.value;
  let maiusculas = inputUpperCase.value;
  let numeros = inputNumber.value;
  let simbolos = inputSimbols.value;

  const validacao = [
    {
      validar: () =>
        verificacaoUpper.test(minusculas) ||
        verificacaoNumber.test(minusculas) ||
        verificacaoCaracteresEspeciais.test(minusculas),
      erro: "Ops, digite apenas caracteres minusculos",
    },
    {
      validar: () =>
        verificacaoLower.test(maiusculas) ||
        verificacaoNumber.test(maiusculas) ||
        verificacaoCaracteresEspeciais.test(maiusculas),
      erro: "Ops, digite apenas caracteres maiusculos",
    },
    {
      validar: () => !verificacaoNumber.test(numeros),
      erro: "Ops, digite apenas caracteres numericos",
    },
    {
      validar: () =>
        verificacaoUpper.test(simbolos) ||
        verificacaoLower.test(simbolos) ||
        verificacaoNumber.test(simbolos),
      erro: "Ops, digite apenas caracteres especiais",
    },
  ];

  let isError = false;

  for (const { validar, erro } of validacao) {
    if (validar()) {
      alert(erro);
      isError = true;
      break;
    }
  }

  if (!isError) {
    sliderRangeStyle.removeEventListener("input", controleSLider);
    newPassword.removeEventListener("click", controlePassword);
    btnResetGerador.removeEventListener("click", resetGeradorReferencia);
    verificarInputsEstadoReferencia();

    const newSliderRange = function () {
      slider();
      verificarCaracteresPersonalizados(
        minusculas,
        maiusculas,
        numeros,
        simbolos
      );
    };

    const newVariablePassword = function () {
      verificarCaracteresPersonalizados(
        minusculas,
        maiusculas,
        numeros,
        simbolos
      );
    };

    modalOptionCaracteresForm.classList.add("display-none");
    backgroundPopUpOff();

    sliderRangeStyle.addEventListener("input", newSliderRange);
    newPassword.addEventListener("click", newVariablePassword);

    const resetGeradorPersonaliado = function () {
      resetGerador();
      sliderRangeStyle.removeEventListener("input", newSliderRange);
      newPassword.removeEventListener("click", newVariablePassword);
      sliderRangeStyle.addEventListener("input", controleSLider);
      newPassword.addEventListener("click", controlePassword);
    };

    const newResetGerador = function () {
      resetGeradorPersonaliado();
      //verificarGeradorPersonalizado = true;
    };
    btnResetGerador.addEventListener("click", newResetGerador);
  }
};

btnConfirmar.addEventListener("click", senhGeradaPersonalizada);

btnCancelar.addEventListener("click", btnClosedFormReferencia);

export const desativarBtnVoltar = function () {
  btnIsBack.classList.add("display-none");
};

let temporizador = 0.6;
let userConvidadoLoginUnico = 0;
let interval;

const temporizadorUser = function () {
  userConvidadoLoginUnico++;

  if (userConvidadoLoginUnico > 1) {
    desativarGerador();
    desativarTemporizador();
    btnIsBack.classList.add("display-none");
    ativarInterfaceLogin();
    desativarBtnVoltar();
    popUpLogin(containerPopUp);
    return;
  }

  interval = setInterval(() => {
    if (temporizador <= 0.01) {
      clearInterval(interval);
      desativarGerador();
      ativarInterfaceLogin();
      desativarTemporizador();
      desativarBtnVoltar();
      popUpLogin(containerPopUp);
      btnIsBack.classList.add("display-none");
      userConvidadoLoginUnico = 1;
    } else {
      temporizadorInsert.textContent = `${(temporizador -= 0.01)
        .toFixed(2)
        .replace(".", ":")}`;
    }
  }, 1000);
};

const redefinirTemporizador = function () {
  desativarBtnVoltar();
  clearInterval(interval);
};

const redefinirTemporizadorReferencia = function () {
  redefinirTemporizador();
};

const temporizadorUserReferencia = function () {
  temporizadorUser();
};

//sem uso no momento
const desativarBtnVoltarReferencia = function () {
  desativarBtnVoltar();
};

export const ativarBtnVoltar = function () {
  btnIsBack.classList.remove("display-none");
};

//sem uso no momento
const ativarBtnVoltarReferencia = function () {
  ativarBtnVoltar();
};

const voltarPagLogin = function () {
  desativarGerador();
  ativarInterfaceLogin();
  desativarBtnVoltar();
  desativarTemporizador();
  redefinirTemporizador();
  controleEnter(false);
  user.value = "";
  password.value = "";
};

export const voltarPagLoginReferncia = function () {
  voltarPagLogin();
};

btnIsBack.addEventListener("click", voltarPagLoginReferncia);

const controleUser = {
  controleLogin: false,
};

const linkUserConvidado = function (controleKey) {
  controleKey.controleLogin = true;

  if (controleKey.controleLogin === true) {
    btnConfig.classList.add("display-none");
    desativarInterfaceLoginReferencia();
    ativarGerador();
    ativarBtnVoltar();
    ativarTemporizador();
    temporizadorUser();
    desativarContentTheme();
  }
};

const linkUserConvidadoReferencia = function () {
  linkUserConvidado(controleUser);
};

linkConvidado.addEventListener("click", linkUserConvidadoReferencia);

//const verificarUserConvidado = function () {};

//replace(/[^a-zA-AZ\s]+/g, "").trim();

//modelo usando regex sem verificação, apenas formatando da forma necessaria para o codigo funcionar(obs: não apresenta erros ao usuario.)

//const lowerRegex = minusculas
/*.replace(/[^a-zA-Z\s]+/g, "")
.trim()
.toLowerCase();
const upperRegex = maiusculas
.replace(/[^a-zA-Z\s]+/g, "")
.trim()
.toUpperCase();
const numerosegex = numeros;
const simbolosRegex = simbolos.replace(/^[!@#$%&*0+,:]^><]+$/

if (
    verificacaoUpper.test(minusculas) ||
    verificacaoNumber.test(minusculas) ||
    verificacaoCaracteresEspeciais.test(minusculas)
  ) {
    alert("ops! insira apenas caracteres minusculos");
  } else {
    verificarCaracteresPersonalizados(minusculas);
  }
  if (
    verificacaoLower.test(maiusculas) ||
    verificacaoNumber.test(maiusculas) ||
    verificacaoCaracteresEspeciais.test(maiusculas)
  ) {
    alert("ops! insira apenas caracteres maiusculos");
  } else {
    verificarCaracteresPersonalizados(maiusculas);
  }

  if (verificacaoNumber.test(numeros)) {
    verificarCaracteresPersonalizados(numeros);
  }

  if (
    verificacaoUpper.test(simbolos) ||
    verificacaoNumber.test(simbolos) ||
    verificacaoLower.test(simbolos)
  ) {
    alert(
      "ops! insira apenas caracteres especiais listados abaixo do campo de digitação"
    );
  } else {
    verificarCaracteresPersonalizados(simbolos);
  }
*/

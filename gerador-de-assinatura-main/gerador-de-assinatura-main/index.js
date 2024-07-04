const buttonCopiar = document.getElementById('btn-copiar');
buttonCopiar.onclick = copiar;

const paPhones = {
  "Matriz": "18 2101 5478",
  "01": "18 2101 5861",
  "02": "18 2101 5862",
  "03": "67 3304 8314",
  "04": "67 3304 5112",
  "05": "18 2101 5492",
  "06": "67 2107 7550",
  "07": "67 3522 6978",
  "08": "18 2101 5481",
  "09": "18 2101 8728",
  "10": "18 2101 8709",
  "11": "18 2101 5463",
  "12": "17 2137 9543",
  "13": "18 3303 3678",
  "14": "18 2122 2081",
  "15": "18 2122 2079",
};

const pa = {
  "Matriz":"Presidente Prudente - Reverendo Coriolano, 2004, 19015-070",
  "01": "Presidente Venceslau - Avenida Dom Pedro II, 607, 19400-000",
  "02": "Rancharia - Avenida Dom Pedro II, 1144, 19600-000",
  "03": "Bataguassu - Avenida Campo Grande, 55, 79780-000",
  "04": "Nova Andradina - Avenida Joaquim Antonio de Moura Andrade, 290/300, 79750-000",
  "05": "Presidente Prudente - Avenida Washington Luiz, 235, 19010-090 ",
  "06": "Naviraí - Avenida Dourados, 147, 79950-000",
  "07": "Três Lagoas - Avenida Filinto Muller, 195, 79600-001",
  "08": "Presidente Prudente - Avenida Cel José Soares Marcondes, 2792, 19013-050",
  "09": "Regente Feijó - Rua Jose Bonifacio, 545, 19570-000",
  "10": "Alvares Machado - Rua Presidente Roosevelt, 19/6, 19160-000",
  "11": "Presidente Epitácio - Avenida Getúlio Vargas, 9 complemento 03, 19470-000",
  "12": "Rio Preto - Avenida Bady Bassit, 4500, 15025-000 ",
  "13": "Araçatuba - Rua Tabajaras, 684, 16010-390",
  "14": "Andradina - Avenida Guanabara, 2919, 16901-100",
  "15": "Penápolis - Rua Fernando Ribeiro de Barros, 205, 16300-031",
};


const emailPA = {
  "01": "agencia320901@sicoob.com.br",
  "02": "agencia320902@sicoob.com.br",
  "03": "agencia320903@sicoob.com.br",
  "04": "agencia320904@sicoob.com.br",
  "05": "agencia320905@sicoob.com.br",
  "06": "agencia320906@sicoob.com.br",
  "07": "agencia320907@sicoob.com.br",
  "08": "agencia320908@sicoob.com.br",
  "09": "agencia320909@sicoob.com.br",
  "10": "agencia320910@sicoob.com.br",
  "11": "agencia320911@sicoob.com.br",
  "12": "agencia320912@sicoob.com.br",
  "13": "agencia320913@sicoob.com.br",
  "14": "agencia320914@sicoob.com.br",
  "15": "agencia320915@sicoob.com.br",
};

const emailArea = {
  "Recuperação de Crédito": "recuperacao3209@sicoob.com.br",
  "Crédito": "credito3209@sicoob.com.br",
  "Tecnologia da Informação": "ti3209@sicoob.com.br",
  "Controles Internos e Riscos": "processos3209@sicoob.com.br",
  "Gerente Regional 1": "regional320901@sicoob.com.br",
  "Gerente Regional 2": "regional320902@sicoob.com.br",
  "Cadastro e Vistoria": "cadastro3209@sicoob.com.br",
  "Gestão de Pessoas": "rh3209@sicoob.com.br",
  "Comunicação e Marketing": "marketing3209@sicoob.com.br",
  "Contabilidade": "contabilidade3209@sicoob.com.br",
  "Governança Corporativa": "governanca3209@sicoob.com.br",
  "Produtos e Serviços": "produtos3209@sicoob.com.br",
  "Financeira/Administrativa": "financeiro3209@sicoob.com.br",
}

const unidadesPorPA = {
  "Matriz": ["Recuperação de Crédito", "Crédito", "Tecnologia da Informação",
    "Controles Internos e Riscos", "Gerente Regional 1", "Gerente Regional 2", "Cadastro e Vistoria", "Gestão de Pessoas", "Comunicação e Marketing", "Contabilidade",
    "Governança Corporativa", "Produtos e Serviços", "Financeira/Administrativa"],
  "01": ["Rede de Atendimento"],
};

const cargosPorPA = {
  "Matriz": ["Analista", "Gerente", "Estagiário", "Diretor", "Presidencia"],
  "01": [
    "Agente de Atendimento",
    "Agente de Atendimento/Caixa",
    "Assistente de Gerência",
    "Aprendiz",
    "Estagiário",
    "Gerente de Agência",
    "Gerente de Atendimento",
    "Gerente de Relacionamento"
  ],
  // Adicione os demais PAs e seus respectivos cargos
};

document.getElementById('PA').addEventListener('change', function () {
  const paValue = this.value;
  const phone = paPhones[paValue] || "";
  document.getElementById('celular').value = phone;
  updateCargos(paValue);
  updateUnidades(paValue);
  updateEmail(paValue);
  updateLocalidade(paValue);


  btn();
});

function updateUnidades(paValue) {
  const unidadeSelect = document.getElementById('unidade');
  unidadeSelect.innerHTML = ''; // Limpar todas as opções

  if (paValue === "Matriz") {
    unidadesPorPA["Matriz"].forEach(unidade => {
      const option = document.createElement('option');
      option.value = unidade;
      option.text = unidade;
      unidadeSelect.add(option);
    });
    unidadeSelect.addEventListener('change', function () {
      updateEmail(paValue);
    });
  }
  else if (["01", "02", "03", "04", "05", "06", "07", "11", "12", "13", "14", "15"].includes(paValue)) {
    unidadesPorPA["01"].forEach(unidade => {
      const option = document.createElement('option');
      option.value = unidade;
      option.text = unidade;
      unidadeSelect.add(option);
    });
  }
  else {
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Nenhuma unidade disponível';
    unidadeSelect.add(defaultOption);
  }
}

function updateCargos(paValue) {
  const cargosSelect = document.getElementById('cargos');
  cargosSelect.innerHTML = ''; // Limpar todas as opções

  if (paValue === "Matriz") {
    cargosPorPA["Matriz"].forEach(cargo => {
      const option = document.createElement('option');
      option.value = cargo;
      option.text = cargo;
      cargosSelect.add(option);
    });
  }
  else if (["01", "02", "03", "04", "05", "06", "07","8","9","10", "11", "12", "13", "14", "15"].includes(paValue)) {
    cargosPorPA["01"].forEach(cargo => {
      const option = document.createElement('option');
      option.value = cargo;
      option.text = cargo;
      cargosSelect.add(option);
    });
  }
  else {
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Nenhum cargo disponível';
    cargosSelect.add(defaultOption);
  }
}

function updateEmail(paValue) {
  let email = emailPA[paValue] || "";
  if (paValue === "Matriz") {
    const unidadeSelect = document.getElementById('unidade');
    const unidadeValue = unidadeSelect.value;
    email = emailArea[unidadeValue] || "";
  }
  document.getElementById('email-assinatura').innerText = email;
  document.getElementById('email-assinatura').href = "mailto:" + email;
}

function updateLocalidade(paValue) {
  let email = pa[paValue] || "";
 /* if (paValue === "Matriz") {
    const unidadeSelect = document.getElementById('unidade');
    const unidadeValue = unidadeSelect.value;
    email = emailArea[unidadeValue] || "";
  }*/
  document.getElementById('localidade-assinatura').innerText = email;
}

// Encontra as inputs
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const celularInput = document.getElementById('celular');
const cargosInput = document.getElementById('cargos');
const unidadesInput = document.getElementById('unidade');

// adiciona um metodo que realiza uma funcao quando um evento acontece
// no caso o evento chama-se: "input" e ocorre quando o texto digitado se altera
// ou quando o valor selecionado altera
nomeInput.addEventListener('input', btn);
sobrenomeInput.addEventListener('input', btn);
celularInput.addEventListener('input', btn);
cargosInput.addEventListener('input', btn);
unidadesInput.addEventListener('input', btn);

// encontra os campos a serem preenchidos na assinatura
const nomeCompletoField = document.getElementById('nome-assinatura');
const celularField = document.getElementById('celular-assinatura');
const emailField = document.getElementById('email-assinatura');
const cargoField = document.getElementById('cargo-assinatura');
const unidadeField = document.getElementById('unidade-assinatura');

function btn() {
  // recebe as informacoes das inputs
  const nome = nomeInput.value;
  const sobrenome = sobrenomeInput.value;
  const celular = celularInput.value;
  const cargo = cargosInput.options[cargosInput.selectedIndex].value;
  const unidade = unidadesInput.options[unidadesInput.selectedIndex].value;

  let nomeCompleto = nome + ' ' + sobrenome;

  // coloca os valores nos lugares na assinatura
  nomeCompletoField.innerHTML = editaNome(nomeCompleto);
  celularField.innerHTML = editaCelular(celular);
  cargoField.innerHTML = cargo;
  unidadeField.innerHTML = unidade;

  // configura os atributos de link
  celularField.setAttribute('href', `https://wa.me/55${editaCelular(celular).replace(/ /g, '')}`);
}

function obrigatorio() {
  if (nome == "") {
    console.log("Preencha o campo Nome");
  }
  else
    console.log("Sucesso");
}

function editaNome(nome) {
  let palavras = nome.split(' ');
  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = primeirasMaiusculas(palavras[i]);
  }
  if (palavras.join(' ') == ' ') {
    return 'Nome Sobrenome';
  }
  return palavras.join(' ');
}

function primeirasMaiusculas(palavra) {
  let n = palavra.length;
  if (n > 1) {
    let primeiraLetra = palavra[0].toUpperCase();
    let resto = palavra.slice(1);
    palavra = primeiraLetra + resto;
    return palavra;
  } else {
    return palavra.toUpperCase();
  }
}

function editaCelular(cel) {
  try {
    cel = cel.replace(/ /g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\-/g, '');
    let n = cel.length;
    if (n === 0) {
      return '99 99999 9999';
    } else if (n < 3) {
      return cel;
    } else if (n < 7) {
      return cel.slice(0, 2) + ' ' + cel.slice(2);
    } else if (n <= 11) {
      return cel.slice(0, 2) + ' ' + cel.slice(2, 7) + ' ' + cel.slice(7);
    } else {
      alert('Coloque um número válido');
      return cel;
    }
  } catch (error) {
    console.log(error);
  }
}


const imageMap = {
  cert1: './assets/imgs/cpa10.svg',
  cert2: './assets/imgs/cpa20.svg',
  cert3: './assets/imgs/cea.svg',
  cert4: './assets/imgs/cfg.svg',
  cert5: './assets/imgs/cge.svg',
  cert6: './assets/imgs/cga.svg'
};
 
const checkboxes = document.querySelectorAll('input[name="certificados"]');
const certificatesRow = document.getElementById('certificatesRow');
const certificatesTable = document.getElementById('certificatesTable');

function updateImages() {
  // Limpa a linha de certificados
  certificatesRow.innerHTML = '';

  // Adiciona as imagens dos certificados selecionados
  const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
  
  if (checkedCheckboxes.length === 0) {
    certificatesTable.style.display = 'none'; // Esconde a tabela se não houver checkbox selecionado
  } else {
    certificatesTable.style.display = 'table'; 
    // certificatesTable.style.backgroundColor ="#00000";// Mostra a tabela se houver checkbox selecionado

    checkedCheckboxes.forEach(checkbox => {
      const certValue = checkbox.value;
      const imgSrc = imageMap[certValue];

      if (imgSrc) {
        const td = document.createElement('td');
        td.style.paddingLeft = '2px';
        td.style.whiteSpace = 'nowrap';

        const img = document.createElement('img');
        img.src = imgSrc;
        img.width = 60;
        img.alt = certValue;

        td.appendChild(img);
        certificatesRow.appendChild(td);
      }
    });
  }
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateImages);
});

// Chama a função updateImages para verificar o estado inicial dos checkboxes
updateImages();


function copiar() {
  var content = document.getElementById('assinatura-div');
  var range = document.createRange();
  range.selectNode(content);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(range); 
}
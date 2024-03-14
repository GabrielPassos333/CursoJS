const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){ //criou só pra criarmais
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e){
  if(e.keyCode == 13){
    if(!inputTarefa.value) return; //não fazer nada se estiver vazio
  criaTarefa(inputTarefa.value);  
  }
}); //keyup e keydown

function limpaInput(){
  inputTarefa.value = ''; // para limpar
  inputTarefa.focus(); //para colocar o foco no trem
}

function criaBotaoApagar(li){
  li.innerText+=' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  //botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar)
}

function criaTarefa(textoInput){
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput()
  criaBotaoApagar(li);
  salvarTarefas(); //para manter salvo a tarefa
}

btnTarefa.addEventListener('click', function(e){
  if(!inputTarefa.value) return; //não fazer nada se estiver vazio
  criaTarefa(inputTarefa.value);  
});

document.addEventListener('click', function(e){
  const el = e.target;
  
  if(el.classList.contains('apagar')){//verificar se o botão apagar foi clicado
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas(){
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for(let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar','').trim(); //trim pra remover o espaço
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON); //só da com JSON
}

function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas); //convertendo

  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();

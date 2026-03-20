type Tarefa = {descricao: string, prioridade: number, concluida: boolean}

const tarefas: Tarefa[] = [
    {descricao: "tarefa 1", prioridade: 1, concluida: false},
    {descricao: "tarefa 2", prioridade: 2, concluida: true},
    {descricao: "tarefa 3", prioridade: 3, concluida: false}
];

function imprimirTarefa(descricao: string, indice: number, totalTarefas: number): void {
    console.log(`Tarefa concluída: ${descricao}`);
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`);
}

function executarTarefas(tarefas: Tarefa[], callback:(descricao: string, indice: number, totalTarefas: number)=>void, time: number = 1000):void{
    tarefas.sort((a, b)=>a.prioridade - b.prioridade);
    let contador = 0;
    const interval = setInterval(()=>{
        if(contador >= tarefas.length || tarefas[contador]?.descricao === "Cancelar")
            clearInterval(interval);
        else{
            const tarefa = tarefas[contador]
            if(tarefa){
                tarefa.concluida = true;
                callback(tarefa.descricao, contador, tarefas.length);
                contador++;
            }
        }
    }, time);
}
executarTarefas(tarefas, imprimirTarefa, 1500);
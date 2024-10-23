AOS.init(); // Inicializa a biblioteca AOS (Animate On Scroll) para animações ao rolar a página.

const dataDoEvento = new Date("Dec 21, 2024 19:00:00"); // Cria um objeto Date representando a data do evento.
const TimeStampDoEvento = dataDoEvento.getTime(); // Converte a data do evento em um timestamp (milissegundos desde 1 de janeiro de 1970).

const contaAsHoras = setInterval(function() { // Inicia um intervalo que executa a função a cada 1000 milissegundos (1 segundo).
    const agora = new Date(); // Cria um novo objeto Date com o horário atual.
    const timeStampAtual = agora.getTime(); // Converte o horário atual em um timestamp.

    const distanciaAteOEvento = TimeStampDoEvento - timeStampAtual; // Calcula a diferença entre o timestamp do evento e o timestamp atual.

    const diaEmMs = 1000 * 60 * 60 * 24; // Define a quantidade de milissegundos em um dia.
    const horaEmMs = 1000 * 60 * 60; // Define a quantidade de milissegundos em uma hora.
    const minutoEmMs = 1000 * 60; // Define a quantidade de milissegundos em um minuto.

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); // Calcula quantos dias faltam até o evento.
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); // Calcula as horas restantes após os dias.
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs); // Calcula os minutos restantes após as horas.
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000); // Calcula os segundos restantes após os minutos.

    console.log(diasAteOEvento); // Exibe no console a quantidade de dias restantes.
    console.log(horasAteOEvento); // Exibe no console a quantidade de horas restantes.
    console.log(minutosAteOEvento); // Exibe no console a quantidade de minutos restantes.
    console.log(segundosAteOEvento); // Exibe no console a quantidade de segundos restantes.

    // Atualiza o conteúdo do elemento com id 'contador' com o tempo restante formatado.
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    // Verifica se a distância até o evento é menor que zero (evento já ocorreu).
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras); // Para o intervalo de contagem do tempo.
        document.getElementById('contador').innerHTML = 'Evento expirado'; // Atualiza o texto do contador para 'Evento expirado'.
    }
    
}, 1000); // Define o intervalo para 1000 milissegundos (1 segundo).


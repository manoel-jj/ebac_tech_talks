AOS.init();


const dataDoEvento = new Date("Mar 27, 2023 00:00:00");
const timeStampDoEvento =dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutiEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOevento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutiEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutiEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOevento}h ${minutosAteOEvento}m ${segundosAteOEvento}s `;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000)
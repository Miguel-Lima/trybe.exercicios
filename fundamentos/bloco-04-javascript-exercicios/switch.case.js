let candidata = "lista";

switch (candidata) {
    case "aprovada":
        console.log('Participante aprovado(a)')
        break;

    case "lista":
        console.log('Participante na lista de espera')
        break;

    case "reprovada":
        console.log('Participante reprovado(a)')
        break;

    default:
        console.log('Status em progresso')
}
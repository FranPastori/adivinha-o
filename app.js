let numeroSecreto = 29;

let chute;
let tentativas;

/*if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
}
*/
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
       
    
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`0 número secreto é maior que ${chute}`)
        }
        tentativas++
    }
}
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
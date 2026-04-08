
function fatorial(n) {
    if (n < 0) {
        return "Erro: Fatorial não definido para negativos!";
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function exponenciacao(base, expoente) {
    return base ** expoente;
}


function calcularFatorial() {
    let n = parseInt(document.getElementById('numFatorial').value);
    
    if (isNaN(n)) {
        document.getElementById('resultadoFatorial').textContent = 'Digite um número válido!';
        return;
    }
    
    document.getElementById('resultadoFatorial').textContent = `${n}! = ${fatorial(n)}`;
}

function calcularExponenciacao() {
    let base = parseFloat(document.getElementById('base').value);
    let expoente = parseFloat(document.getElementById('expoente').value);
    
    if (isNaN(base) || isNaN(expoente)) {
        document.getElementById('resultadoExp').textContent = 'Digite números válidos!';
        return;
    }
    
    document.getElementById('resultadoExp').textContent = `${base}^${expoente} = ${exponenciacao(base, expoente)}`;
}


document.getElementById('btnFatorial').addEventListener('click', calcularFatorial);
document.getElementById('btnExponenciacao').addEventListener('click', calcularExponenciacao);
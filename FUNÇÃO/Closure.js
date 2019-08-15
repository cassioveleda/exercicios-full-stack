// Closure é o escopo criado quando uma função é declarada 
// Esse escopo permite a função acessar e manipular variaveis externos á função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local' 
    function dentro() {
        return x
    }
    return dentro
}

const MinhaFuncao = fora()
console.log(MinhaFuncao())

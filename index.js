const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual sua escolha pedra, papel ou tesoura?\n', resposta => {
    const opcoes = {
        pedra: 1,
        papel: 2,
        tesoura: 3
    }
    const show = {
        1: 'pedra',
        2: 'papel',
        3: 'tesoura',
        undefined: 'um valor diferente'
    }

    const escolhaJogador = opcoes[resposta]
    const escolhaComputador = Math.round(Math.random()*2 + 1)

   
    console.log('Você escolheu ' + show[escolhaJogador] + '\nA maquina escolheu: ' + show[escolhaComputador])
    if(escolhaJogador === escolhaComputador)
        console.log('Empatou!\n')
    if((escolhaJogador + 1) === escolhaComputador || (escolhaJogador - 2) === escolhaComputador)
        console.log('Você Perdeu!\n')
    if((escolhaComputador + 1) === escolhaJogador || (escolhaComputador - 2) === escolhaJogador)
        console.log('Você Ganhou!\n')
    if(escolhaJogador=== undefined)
        console.log('Sua resposta foi: ( ' + resposta +  ' ) .Resposta inváida tente Pedra, Papel ou Tesoura.')

    
    rl.close()
})
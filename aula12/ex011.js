var idade = 45
console.log(`Voce tem ${idade} anos.`)
if(idade < 16){
    console.log(`Nao vota.`)
}else if(idade < 18 || idade >65){
        console.log('Voto opcional.')
    }else{
        console.log('Voto obrigatorio.')
    }


/*if(idade >= 16 && idade < 18) - Nao tem necessidade de ter essa linha pq a primeira condicao ja analisa se e menor de 16 ou nao.*/
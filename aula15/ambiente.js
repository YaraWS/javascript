
let num = [4,9,8,7,0,3,1]

/*
for(let pos in num ){
    console.log(`This is the positio ${pos} and this is the value ${num[pos]}`)
}
*/

let pos = num.indexOf(66)

if(pos == -1){
    console.log(`This value does not exist.`)
}else{
    console.log(`The value ${num[pos]} is on the position ${pos}.`)
}
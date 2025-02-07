let numeroBinario = document.querySelector('.form-campo-binario');
let result = document.querySelector('.form-campo-result');
let botao = document.querySelector('.form-botao')


botao.addEventListener("click",aoClickar)

function aoClickar (event) {
    event.preventDefault()

    //converte para decimal com base 2 
    let valorBinario = parseInt((numeroBinario.value), 2);

    //verificar se valorBinario é um número
    if(!isNaN(valorBinario)){
        result.value = valorBinario;
    }else{
        result.value = "atenção digite 0 ou 1";
    }
    
    
}

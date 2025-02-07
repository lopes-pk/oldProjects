const buttons = Array.from(document.querySelectorAll("#button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9, #button10"));

buttons.map((item,i )=> {
    item.addEventListener('click', ()=> {
        switch(i){
            case 0:
                alert('Hello World!')
                break;
            case 1:{
                let numberOne = 17;
                let numberTwo = 23;
                alert(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`)
                break;
            }
            case 2: {
                let valor = 3;
                
                typeof(valor) === 'number' ? alert(`A variavel '${valor}' é um numero`) : alert(`A varivel '${valor}' não é um numero`)
                break
            }
            case 3: {
                let valor = 'as'
                typeof(valor) === 'string'? alert(`'${valor}' é uma string`) : alert(`'${valor}' não é uma string`)
                break
            }
            case 4: {
                let valor = false
                typeof(valor) === 'boolean'? alert(`'${valor}' é um boolean`) : alert(`'${valor}' não é um boolean`)
                break
            }
            case 5: {
                let numberOne = 23;
                let numberTwo = 12;
                alert(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`)
                break;
            }
            case 6: {
                let numberOne = 2;
                let numberTwo = 35;
                alert(`${numberOne} x ${numberTwo} = ${numberOne * numberTwo}`)
                break;
            }
            case 7: {
                let numberOne = 30;
                let numberTwo = 2;
                alert(`${numberOne} ÷ ${numberTwo} = ${numberOne / numberTwo}`)
                break;
            }
            case 8: {
                let numberOne = 31;
                
                alert(numberOne % 2 === 0 ? 'Número é par' : 'Numero é impar')
                break;
            }
            case 9: {
                let numberOne = 30;
                
                alert(numberOne % 2 === !0 ? 'Número é impar' : 'Numero é par')
                break;
            }
        }
    })
})


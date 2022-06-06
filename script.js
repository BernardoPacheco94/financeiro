let txt_salario_be = document.querySelector('input#salario_be')
let txt_salario_lu = document.querySelector('input#salario_lu')
let txt_dividir = document.querySelector('input#txt_dividir')
let salario_total = document.querySelector('div#salario_total')
let txt_porc_sl_be = document.querySelector('div#porc_sl_be')
let txt_porc_sl_lu = document.querySelector('div#porc_sl_lu')
let vl_a_pagar_be = document.querySelector('div#vl_a_pagar_be')
let vl_a_pagar_lu = document.querySelector('div#vl_a_pagar_lu')


function calcular() {

    if (txt_salario_be.value == 0 && txt_salario_lu.value == 0) {
        alert('Verifique os salários iniciais')
    } else {
        //calcula totais do salario
        let sl_total = Number(txt_salario_be.value) + Number(txt_salario_lu.value)
        let porc_be = (Number(txt_salario_be.value) * 100) / sl_total
        let porc_lu = (Number(txt_salario_lu.value) * 100) / sl_total

        //seta totais no html
        salario_total.innerHTML = `Salario total: R$ ${sl_total.toFixed(2)}`
        txt_porc_sl_be.innerHTML = `% Salario Be: ${porc_be.toFixed()}%`
        txt_porc_sl_lu.innerHTML = `% Salario Lu: ${100 - porc_be.toFixed()}%`




        //Retorna os valores na div
        vl_a_pagar_be.innerHTML = `<h2>A PAGAR</h2>Valor Be - R$: ${dividir_conta(Number(txt_dividir.value),porc_be).toFixed(2)}`
        vl_a_pagar_lu.innerHTML = `Valor Lu - R$: ${dividir_conta(Number(txt_dividir.value),porc_lu).toFixed(2)}`
        
        
    }

}


function dividir_conta(vl_total_conta, porcentagem) {
    let a_pagar = (vl_total_conta * porcentagem) / 100

    return a_pagar    
}
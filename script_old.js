let txt_salario_be = document.querySelector('input#salario_be')
let txt_salario_lu = document.querySelector('input#salario_lu')
let txt_agua = document.querySelector('input#txt_agua')
let txt_aluguel = document.querySelector('input#txt_aluguel')
let txt_internet = document.querySelector('input#txt_internet')
let salario_total = document.querySelector('div#salario_total')
let txt_porc_sl_be = document.querySelector('div#porc_sl_be')
let txt_porc_sl_lu = document.querySelector('div#porc_sl_lu')
let vl_conta = document.getElementsByTagName('td')



function calcular(){

    if (txt_salario_be.value == 0 &&txt_salario_lu.value == 0){
        alert('Verifique os salários iniciais')
    } else{
    //calcula totais do salario
    let sl_total = Number(txt_salario_be.value) + Number(txt_salario_lu.value)
    let porc_be = (Number(txt_salario_be.value)*100)/sl_total
    let porc_lu = (Number(txt_salario_lu.value)*100)/sl_total
    
    //seta totais no html
    salario_total.innerHTML = `Salario total: R$ ${sl_total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    txt_porc_sl_be.innerHTML = `% Salario Be: ${porc_be.toFixed()}%`
    txt_porc_sl_lu.innerHTML = `% Salario Lu: ${100-porc_be.toFixed()}%`

   
    //inclui os valores na tabela
    vl_conta[0].innerHTML = `${(dividir_conta(Number(txt_agua.value),porc_be)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    vl_conta[1].innerHTML = `${(dividir_conta(Number(txt_agua.value),porc_lu)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    vl_conta[2].innerHTML = `${(dividir_conta(Number(txt_aluguel.value),porc_be)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    vl_conta[3].innerHTML = `${(dividir_conta(Number(txt_aluguel.value),porc_lu)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    vl_conta[4].innerHTML = `${(dividir_conta(Number(txt_internet.value),porc_be)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    vl_conta[5].innerHTML = `${(dividir_conta(Number(txt_internet.value),porc_lu)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    vl_conta[6].innerHTML = `${(Number(txt_agua.value)+Number(txt_aluguel.value)+Number(txt_internet.value)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
}

}


function dividir_conta (vl_total_conta, porcentagem){
    let a_pagar = (vl_total_conta*porcentagem)/100

    return a_pagar
}
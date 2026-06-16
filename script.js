let chart;

function formatar(valor){

return valor.toLocaleString(
'pt-BR',
{
style:'currency',
currency:'BRL'
}
);

}

function calcular(){

const capital =
parseFloat(
document.getElementById('capital').value
);

const aporte =
parseFloat(
document.getElementById('aporte').value
);

const taxa =
parseFloat(
document.getElementById('taxa').value
) / 100;

const meses =
parseInt(
document.getElementById('meses').value
);

let saldo = capital;

let valores = [];

let labels = [];

for(let mes = 1; mes <= meses; mes++){

saldo =
(saldo + aporte)
* (1 + taxa);

valores.push(
saldo.toFixed(2)
);

labels.push(
`Mês ${mes}`
);

}

const investido =
capital + (aporte * meses);

const juros =
saldo - investido;

document.getElementById(
'investido'
).innerText =
formatar(investido);

document.getElementById(
'juros'
).innerText =
formatar(juros);

document.getElementById(
'montante'
).innerText =
formatar(saldo);

if(chart){
chart.destroy();
}

const ctx =
document.getElementById(
'grafico'
);

chart = new Chart(ctx,{

type:'line',

data:{

labels:labels,

datasets:[{

label:'Patrimônio',

data:valores,

borderWidth:3,

tension:0.3,

fill:false

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:true
}

}

}

});

}

calcular();



function menu(productos, opt){
    let menu ='PROD  PREC\n';
    for (const i in productos) {
        menu +=`  ${i} -- ${productos[i]}\n`;
    }
    menu += 'Seleccione un opcion:'
    while((opt != 'A') && (opt != 'B') && (opt != 'C')){
        opt = prompt(menu);
    }
    return opt;
}

function saldoFunction(saldo, costoProd){
    while(costoProd > saldo){
        let saldoTemp =Number(prompt(`Ingrese monedas de 100$, 50$ o 10$ \n Saldo actual: ${saldo}$ \n Precio a pagar: ${costoProd}$`))
        if((saldoTemp == 100) || (saldoTemp == 50) || (saldoTemp == 10)){
            saldo += saldoTemp
        }else{
            alert('Ingrese un valor valido')
        }
    }
    return saldo;
}


function cambioFunction(saldo, costoProd, cambio){
    while(saldo > costoProd){
        if(saldo - 100 >= costoProd){
            saldo -= 100;
            cambio += '100$\n';
        }
        else if(saldo - 50 >= costoProd){
            saldo -= 50;
            cambio += '50$\n';
        }
        else{
            saldo -= 10;
            cambio += '10$\n';
        }
    }
    if (cambio == 'Su cambio es:\n'){
        cambio += '0$'
    }
    return cambio;
}


let productos = {'A':270,'B':340,'C':390};

do{

    let opt, saldo = 0, cambio ='Su cambio es:\n';

    console.log(opt)
    opt = menu(productos,opt);
    saldo = saldoFunction(saldo, productos[opt]);
    cambio = cambioFunction(saldo, productos[opt], cambio);
    alert(cambio);
}
while(confirm('Desea comprar otro poducto ?'));
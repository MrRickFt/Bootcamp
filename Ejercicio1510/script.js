function mostrar(){
    var x = document.getElementsByClassName("prueba");
    for(var i=0; i<x.length; i++){
        document.getElementsByClassName("prueba")[i].style.display = "none";
    }
    
}


//INVOCAR CALCULADORA
var btcal = document.getElementById("btn_calculadora");
console.log(btcal.innerText);
btcal.addEventListener("click", function(){
    mostrar();
    
    
    document.getElementById('calc').style.display = "block";
    
})

//INVOCAR CONTAR CARÁCTERES
var btc = document.getElementById("btn_cc");
console.log(btc.innerText);
btc.addEventListener("click", function(){
    mostrar();
    
    
    document.getElementById('contar').style.display = "block";
    
})

//INVOCAR MIN/MAYUS
var minMay = document.getElementById("btn_mM");
console.log(minMay.innerText);
minMay.addEventListener("click", function(){
    mostrar();
    
    
    document.getElementById('mimMay').style.display = "block";
    
})

//INVOCAR SUMATORIA DE #'S
var sumt = document.getElementById("btn_sn");
console.log(sumt.innerText);
sumt.addEventListener("click", function(){
    mostrar();
    
    
    document.getElementById('sumatoria').style.display = "block";
    
})


//CONTAR LETRAS
function contar_letras(){
    var cont_let = document.getElementById("txt_count");
    cont_let = cont_let.value.length;
    
    return cont_let;
}


        var bt = document.getElementById("btn_count");
        bt.addEventListener("click", function(){
            var cont = contar_letras();
            var mostrar = document.getElementById("lbl_count");
            mostrar.value = ("Total caracteres: ")+cont;
        })


//MAYUSCULAS / MINUSCULAS

function mimMay(){
    var m = document.getElementById("txt_min").value;
        console.log(m);
    
        let cmin = 0;
        let cmay = 0;

        for(let i = 0; i < m.length; ++i) {
            if(/[a-z]/.test(m[i])) {
                cmin++;
            } else {
                cmay++;
            }
        }

        if (cmin > cmay) {
            m = m.toUpperCase();
            return (m);
        } else {
            m = m.toLowerCase();
            return (m);
        }
    
        
    }
    
 
        var minmayus = document.getElementById("btn_min");
        minmayus.addEventListener("click", function(){
            var conv = mimMay();
            var rx = document.getElementById("lbl_min");
            rx.value = (conv);
        })


//SUMAR NUMEROS
function sumarNum(){
    var su = document.getElementById("txt_sum").value;
    su =  parseInt(su);
    
    var resultado = 0;
    for(var i=1; i<=su; i++) {
        resultado += i;
        
      }
      
      return resultado;
     
      
}

var sumnum = document.getElementById("btn_sum");
        sumnum.addEventListener("click", function(){
            var res = sumarNum();
            var  cont= document.getElementById("lbl_sum");
            cont.value = ("Total sumatoria: "+res);
        })
    

    







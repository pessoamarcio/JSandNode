//precisa dar uma arrumadinha

function promo(){

    var cidade = window.prompt("Sua cidade");
    
    var idade = parseInt(window.prompt("Sua idade"));
    
    if(cidade == "rj" && idade >= 60){
    
    document.write("temos promoção" );
    
    }else{
    
    document.write("não temos promoção" );
    
    }
    
    }
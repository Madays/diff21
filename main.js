function diff21() {
    var in_n = parseFloat(document.getElementById("in_n").value);
    var diff;
    if (in_n<21){
        diff=21-in_n;
    document.getElementById("resultado").innerHTML="Es el doble de la diferencia absoluta : " + diff;                
    } else if(in_n>21){
        diff=2*(in_n-21);        document.getElementById("resultado").innerHTML="La diferencia absoluta es : " + diff;   
    }        
    }   


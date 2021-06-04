

var contadorcaras = 0;


//Cargar documento
$(document).ready(function () {

    
    $.getJSON("http://api.icndb.com/jokes/random", function (dato, status, xhr) { //nombre del documento de donde viene la información
        console.log(dato.value.joke);

        $("#acudit").html(dato.value.joke);
    });

    //Función al hacer click en el botón
    $("#botonacudit").click(function () {

        $.getJSON("http://api.icndb.com/jokes/random", function (dato, status, xhr) { //nombre del documento de donde viene la información

            $("#acudit").html(dato.value.joke);
            $("#smile").removeClass("nosmile");
            $(".n1").addClass("smile");
            let icono = $("#smile").html();
            
            if(contadorcaras == 1){
                $("#smile").html("&#128527;");
            }else if(contadorcaras == 2){
                $("#smile").html("&#128556;");
            }else if(contadorcaras == 3){
                $("#smile").html("&#128518;");
            
            }else if(contadorcaras == 4){
                $("#smile").html("&#128517;");
            }else if(contadorcaras == 5){
                $("#smile").html("&#128518;");
            }else if(contadorcaras == 6){
                $("#smile").html("&#128514;");
            }else if(contadorcaras > 6 ){  
                $("#smile").html(icono+"&#128514;");  
            }else{
                $("#smile").html("&#128578;");  
                /*$("#smile").html("&#128512;"); */
            }
            contadorcaras = contadorcaras + 1;
        });
       
       
    });
    
});


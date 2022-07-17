function btncerrarRespuesta(){
document.getElementById("respuesta-id").style.display="none";

document.getElementById("menu").style.display="block";
document.getElementById("inventario").style.display="block";
}
function btnCargar() {// Funcionalidad del boton carga 
    var x = document.getElementById("perfil");
    let y = document.getElementById("inventario");
    let z = document.getElementById("cargar");
    if (z.style.display === "none") {
        z.style.display = "block";
        y.style.display = "none";
        x.style.display = "none";

    } else {
        z.style.display = "none";
    }
}
function btnPerfil(){
    var x = document.getElementById("perfil");
    let y = document.getElementById("inventario");
    let z = document.getElementById("cargar");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";

    } else {
        x.style.display = "none";
    }
}
function btnInventario(){
    var x = document.getElementById("perfil");
    let y = document.getElementById("inventario");
    let z = document.getElementById("cargar");
    if (y.style.display === "none") {
        y.style.display = "block";
        z.style.display = "none";
        x.style.display = "none";
    }

}
function consultaID(dato){
    let id = dato;
    $.ajax({

        url: 'includes/respuesta-id.php', //rutade pedido
        type: 'POST', //TIPO DE METODO
        data: { id }, // valora a enviar;
        success:
            function (response) {
                const consultas = JSON.parse(response); // convertimos el string que viene de la base de datos en JSON
                let template = '';
                consultas.forEach(consultas => { // SEPARA LAS CONSULTAS 
                    template += `
                    <button class="btn btn-warning" name="cerrarRespuesta" id="btn-cerrarRespuesta" onclick="btncerrarRespuesta()">x</button>
                    
                        <!-- FOTO --> 
                        <div class="img col-md-3 "> 
                            <img class="img-fluid img-rounded" src="" alt= "" />
                        </div>
                
                
                        <!-- DETALLES -->
                        <div class="cont pr-5 col-md-8 ">
                            <div >
                                <!-- TITULO -->
                                <h1 class="align-top">${consultas.NAME}</h1> 
                                <!-- DEscripcion -->
                                <P>${consultas.DESCRIPTION} </P>
                            </div>   
                        </div>

                        <div class=" pr-0 col-md-1 ">
                            <h1>${consultas.GAMBLERS}</h1>
                            <H1>${consultas.TIME}</H1>
                        </div>
                    
                    `
                        });
                    

                /** controlamos los divs en los que vamos a publicar 
                var y = document.getElementById("inventario-sec");
                y.style.display = "none";// ocultamos el pordefecto
                var x = document.getElementById("inventario");
                x.style.display = "block";// abilitamos el correspondiente al input
                $('#respuesta-id').html(ser(id));
                */
                $('#respuesta-id').html(template);
                document.getElementById('menu').style.display = "none";
                document.getElementById('inventario').style.display = "none";
                document.getElementById('respuesta-id').style.display = "block";


                
                



            }
    });

}

function se(search,url) { // funcion buscador recibe dosparametros el que se enviay donde se envia
    $.ajax({

        url: url, //rutade pedido
        type: 'POST', //TIPO DE METODO
        data: { search }, // valora a enviar;
        success:
            function (response) {
                const consultas = JSON.parse(response); // convertimos el string que viene de la base de datos en JSON
                let template = '';
                consultas.forEach(consultas => { // SEPARA LAS CONSULTAS 
                    template += `
                    <button class="row bg-white rounded border m-1" onclick="consultaID(${consultas.ID})">
                        <!-- FOTO --> 
                        <div class="img col-md-3 "> 
                            <img class="img-fluid img-rounded" src="" alt= "" />
                        </div>
                
                
                        <!-- DETALLES -->
                        <div class="cont pr-5 col-md-8 ">
                            <div >
                                <!-- TITULO -->
                                <h1 class="align-top">${consultas.NAME}</h1> 
                                <!-- DEscripcion -->
                                <P>${consultas.DESCRIPTION} </P>
                            </div>   
                        </div>

                        <div class=" pr-0 col-md-1 ">
                            <h1>${consultas.GAMBLERS}</h1>
                            <H1>${consultas.TIME}</H1>
                        </div>
                    </button>
                    `
                        });
                    

                /** controlamos los divs en los que vamos a publicar 
                var y = document.getElementById("inventario-sec");
                y.style.display = "none";// ocultamos el pordefecto
                var x = document.getElementById("inventario");
                x.style.display = "block";// abilitamos el correspondiente al input
                $('#respuesta-id').html(ser(id));
                */
                $('#inventario').html(template);
               


            }
    });



}


$(document).ready(//es ejecutado al cargar el documento
    function () {//menu admin
        let menu = `
            <nav class="navbar navbar-dark bg-primary">
                        <div class="conteiner col-sm-4 col-md-4 col-xs-4">
                        <a href="index.html" class=" navbar-brand"> Ludoteca</a> 
                        </div>

                        <div class="input-group col-sm-4 col-md-4 col-xs-4  rounded">
                            <input type="search" name="search" id="search"  class="form-control  rounded " placeholder="Buscar.." />
                        </div>

                        <div class="col-sm-4 col-md-4 col-xs-4">
                        <button class="btn btn-warning" name="inventario" id="btn-inventario" onclick="btnInventario()">Inventario</button>
                        <button class="btn btn-warning" name="perfil" id="btn-perfil" onclick="btnPerfil()">perfil</button>
                        <button class="btn btn-warning" name="update" id="btn-cargar" onclick="btnCargar()">+</button>
                        </div>
            </nav>
                    
`;  //  ``  `` `` 

        $('#menu').html(menu);
        let sear = "";
        let url= 'includes/serch.php';
         se(sear,url);
         





    });

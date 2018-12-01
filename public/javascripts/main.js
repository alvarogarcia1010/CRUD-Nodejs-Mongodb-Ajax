$(document).ready(function(){
    console.log("Estoy lista para que trabajes");
    getBuscadores();

    $("#save-new").click(function(){
        createBuscador();
    });
});

function getBuscadores(){
    var rowBuscador = "";
    $.ajax({
        url: "api/Buscadoresweb",
        type: "GET",
        datatype: "json",
        error: function(){
            console.log("Error en la peticion");
        },
        success: function(response){
            response.buscadores.forEach(buscador => {
                rowBuscador += `<tr>
                                    <form class="form">
                                    <th scope="row">${buscador._id}</th>
                                    <td>
                                        <p class="mb-0">${buscador.nombre}</p>
                                        <div class="form-group mx-sm-3 mb-2  d-none">
                                            <label for="nombre" class="sr-only">Password</label>
                                            <input type="text" class="form-control form-nombre" name="nombre" placeholder="Nombre">
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0">${buscador.version}</p>
                                        <div class="form-group mx-sm-3 mb-2  d-none">
                                            <label for="version" class="sr-only">Version Actual</label>
                                            <input type="text" class="form-control form-version" name="version" placeholder="Version Actual">
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0">${buscador.company}</p>
                                        <div class="form-group mx-sm-3 mb-2 d-none">
                                            <label for="company" class="sr-only">Compañia</label>
                                            <input type="text" class="form-control form-company" name="company" placeholder="Nombre">
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <button type="button" class="btn btn-primary  mx-2 edit"><i class="fas fa-edit font-2"></i></button>
                                        <button type="button" class="btn btn-danger  mx-2 delete"><i class="fas fa-trash-alt font-2"></i></button>
                                        <button type="button" class="btn btn-success d-none mx-2 update"><i class="fas fa-check-circle font-2"></i></button>
                                        <button type="button" class="btn btn-danger d-none mx-2 cancel"><i class="fas fa-times-circle font-2"></i></button>
                                    </td>
                                    </form>
                                </tr>`
            });

            $("tbody").html(rowBuscador);
        }
    });
}

function createBuscador(){
    $.ajax({
        url: "api/Buscadoresweb",
        type: "POST",
        dataType: "json",
        data: {
            nombre: $("#nombre").val(),
            version: $("#version").val(),
            company: $("#company").val()
        },

        error: function(){
            console.log("Hubo un error en la peticion")
        },

        success: function(response){
            if(response.success){
                var row = createRow(response.buscador);
                $("#nombre").val("");
                $("#version").val("");
                $("#company").val("");
                $("tbody").append(row);
            }else{
                console.log(response.message);
            }
        }
    })
};

function createRow (data){
    var row = `<tr>
                    <form class="form">
                    <th scope="row">${data._id}</th>
                    <td>
                        <p class="mb-0">${data.nombre}</p>
                        <div class="form-group mx-sm-3 mb-2  d-none">
                            <label for="nombre" class="sr-only">Password</label>
                            <input type="text" class="form-control form-nombre" name="nombre" placeholder="Nombre">
                        </div>
                    </td>
                    <td>
                        <p class="mb-0">${data.version}</p>
                        <div class="form-group mx-sm-3 mb-2  d-none">
                            <label for="version" class="sr-only">Version Actual</label>
                            <input type="text" class="form-control form-version" name="version" placeholder="Version Actual">
                        </div>
                    </td>
                    <td>
                        <p class="mb-0">${data.company}</p>
                        <div class="form-group mx-sm-3 mb-2 d-none">
                            <label for="company" class="sr-only">Compañia</label>
                            <input type="text" class="form-control form-company" name="company" placeholder="Nombre">
                        </div>
                    </td>
                    <td class="text-center">
                        <button type="button" class="btn btn-primary  mx-2 edit"><i class="fas fa-edit font-2"></i></button>
                        <button type="button" class="btn btn-danger  mx-2 delete"><i class="fas fa-trash-alt font-2"></i></button>
                        <button type="button" class="btn btn-success d-none mx-2 update"><i class="fas fa-check-circle font-2"></i></button>
                        <button type="button" class="btn btn-danger d-none mx-2 cancel"><i class="fas fa-times-circle font-2"></i></button>
                    </td>
                    </form>
                </tr>`

    return row;
}
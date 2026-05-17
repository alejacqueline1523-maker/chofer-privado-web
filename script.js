const URL =
    "https://script.google.com/macros/s/AKfycbzyC7i8mKRCRhI_u0ca22mqYooGX2Rtl36FfCfuU7tnq2bX2yCLm9wgh0vomnuCXz84/exec";





function mostrarFormulario(tipo) {

    if (tipo === "equipo") {
        document.getElementById("formEquipo").classList.remove("oculto");
    }

    if (tipo === "cliente") {
        document.getElementById("formCliente").classList.remove("oculto");
    }

}







function enviarEquipo() {

    function doPost(e) {

        var data = JSON.parse(e.postData.contents);





        if (data.tipo === "chofer") {

            var hojaChoferes =
                SpreadsheetApp
                    .getActiveSpreadsheet()
                    .getSheetByName("Choferes");



            hojaChoferes.appendRow([

                new Date(),

                data.nombre,

                data.telefono,

                data.nacionalidad,

                data.idiomas,

                data.licencia,

                data.edad,

                data.experiencia

            ]);

        }








        if (data.tipo === "cliente") {

            var hojaSolicitudes =
                SpreadsheetApp
                    .getActiveSpreadsheet()
                    .getSheetByName("Solicitudes");



            hojaSolicitudes.appendRow([

                new Date(),

                data.nombre,

                data.telefono

            ]);

        }






        return ContentService
            .createTextOutput("Correcto")
            .setMimeType(ContentService.MimeType.TEXT);

    }





    fetch(URL, {

        method: "POST",

        body: JSON.stringify(datos)

    })

        .then(response => {



            let numero = "526642877406";

            let mensaje =
                `Hola, acabo de registrarme como chofer privado.

Mi nombre es ${datos.nombre}

Mi teléfono es ${datos.telefono}`;




            let whatsapp =
                `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;



            window.location.href = whatsapp;

        })

        .catch(error => {

            alert("Error al enviar");

            console.error(error);

        });

}









function enviarCliente() {

    let datos = {

        tipo: "cliente",

        nombre: document.getElementById("nombreCliente").value,

        telefono: document.getElementById("telefonoCliente").value

    };






    fetch(URL, {

        method: "POST",

        body: JSON.stringify(datos)

    })

        .then(response => {

            let numero = "526642877406";

            let mensaje =
                `Hola, quiero solicitar un chofer privado.

Mi nombre es ${datos.nombre}

Mi teléfono es ${datos.telefono}`;





            let whatsapp =
                `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;



            window.open(whatsapp, "_blank");

        })

        .catch(error => {

            console.error(error);

        });

}
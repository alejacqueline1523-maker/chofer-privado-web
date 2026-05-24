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

    let datos = {

        tipo: "chofer",

        nombre: document.getElementById("nombreEquipo").value,

        telefono: document.getElementById("telefonoEquipo").value,

        nacionalidad: document.getElementById("nacionalidad").value,

        idiomas: document.getElementById("idiomas").value,

        licencia: document.getElementById("licencia").value,

        edad: document.getElementById("edad").value,

        experiencia: document.getElementById("experiencia").value

    };





    fetch(URL, {

        method: "POST",

        body: JSON.stringify(datos)

    })

        .then(response => {

           



            let numero = "526981008100";

            let mensaje =
                `Hola, acabo de registrarme como chofer privado.

Mi nombre es ${datos.nombre}

Mi teléfono es ${datos.telefono}

Me gustaría tener una primera entrevista`;




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

            let numero = "526981008100";

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

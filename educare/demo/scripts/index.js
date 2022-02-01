const API_KEY = '';

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById('boton')
    
    let mensajePositivo = document.getElementById('app-presentacion-positivo')
    let mensajeNegativo = document.getElementById('app-presentacion-negativo')
    let mensajeNeutral = document.getElementById('app-presentacion-neutral')
    
    let materiaEspañol, materiaMatematicas, materiaIngles, materiaQuimica, materiaFisica, materiaEduFisica, materiaTecno, materiaArtes
    
    let resEspañol, resMatematicas, resIngles, resQuimica, resFisica, resEduFisica, resTecno, resArtes

    function mostrarDatos(callback) {
        document.getElementById('app-respuesta-definitiva').style.display = 'block';

        if(resEspañol === 'positive'){
            mensajePositivo.innerHTML += "Español "
        }
        else if(resEspañol === 'negative'){
            mensajeNegativo.innerHTML += "Español "
        }
        else if(resEspañol === 'neutral'){
            mensajeNeutral.innerHTML += "Español "
        }

        if(resMatematicas === 'positive'){
            mensajePositivo.innerHTML += "Matematicas "
        }
        else if(resMatematicas === 'negative'){
            mensajeNegativo.innerHTML += "Matematicas "
        }
        else if(resMatematicas === 'neutral'){
            mensajeNeutral.innerHTML += "Matematicas "
        }

        if(resIngles === 'positive'){
            mensajePositivo.innerHTML += "Ingles "
        }
        else if(resIngles === 'negative'){
            mensajeNegativo.innerHTML += "Ingles "
        }
        else if(resIngles === 'neutral'){
            mensajeNeutral.innerHTML += "Ingles "
        }

        if(resQuimica === 'positive'){
            mensajePositivo.innerHTML += "Quimica "
        }
        else if(resQuimica === 'negative'){
            mensajeNegativo.innerHTML += "Quimica "
        }
        else {
            mensajeNeutral.innerHTML += "Quimica "
        }

        if(resFisica === 'positive'){
            mensajePositivo.innerHTML += "Fisica "
        }
        else if(resFisica === 'negative'){
            mensajeNegativo.innerHTML += "Fisica "
        }
        else if(resFisica === 'neutral'){
            mensajeNeutral.innerHTML += "Fisica "
        }

        if(resEduFisica === 'positive'){
            mensajePositivo.innerHTML += "Educacion Fisica "
        }
        else if(resEduFisica === 'negative'){
            mensajeNegativo.innerHTML += "Educacion Fisica "
        }
        else if(resEduFisica === 'neutral'){
            mensajeNeutral.innerHTML += "Educacion Fisica "
        }

        if(resTecno === 'positive'){
            mensajePositivo.innerHTML += "Tecnologia "
        }
        else if(resTecno === 'negative'){
            mensajeNegativo.innerHTML += "Tecnologia "
        }
        else if(resTecno === 'neutral'){
            mensajeNeutral.innerHTML += "Tecnologia "
        }

        if(resArtes === 'positive'){
            mensajePositivo.innerHTML += "Artes "
        }
        else if(resQuimica === 'negative'){
            mensajeNegativo.innerHTML += "Artes "
        }
        else if(resArtes === 'neutral'){
            mensajeNeutral.innerHTML += "Artes "
        }

    }

    boton.addEventListener('click', () => {
    
        nombre = document.getElementById("Nombre").value
        materiaEspañol = document.getElementById("opinionEspañol").value
        materiaMatematicas = document.getElementById("opinionMatematicas").value
        materiaIngles = document.getElementById("opinionIngles").value
        materiaQuimica = document.getElementById("opinionQuimica").value
        materiaFisica = document.getElementById("opinionFisica").value
        materiaEduFisica = document.getElementById("opinionEduFisica").value
        materiaTecno = document.getElementById("opinionTecno").value
        materiaArtes = document.getElementById("opinionArtes").value
    
        API_KEY === '' ? alert("You need an API KEY") : axios({
            method:'POST',
            url:'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/sentiment',
            headers:{
                'Ocp-Apim-Subscription-Key': API_KEY,
                'Content-Type': 'application/json'
            },
            data:{
                "documents": [
                    {
                        "language": "es",
                        "id": "1",
                        "text": materiaEspañol
                    },
                    {
                        "language": "es",
                        "id": "2",
                        "text": materiaMatematicas
                    },
                    {
                        "language": "es",
                        "id": "3",
                        "text": materiaIngles
                    },
                    {
                        "language": "es",
                        "id": "4",
                        "text": materiaQuimica
                    },
                    {
                        "language": "es",
                        "id": "5",
                        "text": materiaFisica
                    },
                    {
                        "language": "es",
                        "id": "6",
                        "text": materiaEduFisica
                    },
                    {
                        "language": "es",
                        "id": "7",
                        "text": materiaTecno
                    },
                    {
                        "language": "es",
                        "id": "8",
                        "text": materiaArtes
                    }
                ]
            }
        }).then(res => {

            resEspañol = res.data.documents[0].sentiment
            resMatematicas = res.data.documents[1].sentiment
            resIngles = res.data.documents[2].sentiment
            resQuimica = res.data.documents[3].sentiment
            resFisica = res.data.documents[4].sentiment
            resEduFisica = res.data.documents[5].sentiment
            resTecno = res.data.documents[6].sentiment
            resArtes = res.data.documents[7].sentiment
          
            mostrarDatos()

        })
        .catch(error => {
            throw error
        })
            
    })
})
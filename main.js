alert("Hola mi supercreador")

function iniciarCariluma(){
    let botonArquitectura = document.getElementById('boton-Arquitectura')
    botonArquitectura.addEventListener('click', seleccionarArquitectura)  
}

function seleccionarArquitectura(){
    let inputLayout = document.getElementById('Layout')
    let inputFlujograma = document.getElementById('Flujograma')
    let inputProcedimiento = document.getElementById('Procedimiento')
    let inputInstructivo = document.getElementById('Instructivo')
    let inputIndicadores = document.getElementById('Indicadores')
    let inputReglas = document.getElementById('Reglas')
   
    if(inputLayout.checked){
        alert('Seleccionaste Layout')
    } else if(inputFlujograma.checked){
        alert('Seleccionaste a Flujograma')
    } else if(inputProcedimiento.checked){
        alert('Seleccionaste a Procedimiento')
    } else if(inputInstructivo.checked){
        alert('Seleccionaste a Instructivo')
    } else if(inputIndicadores.checked){
        alert('Seleccionaste a Indicadores')
    } else if(inputReglas.checked){
        alert('Seleccionaste a Reglas')
    } else{
        alert('No seleccionaste una opción')
    }
}

window.addEventListener('load', iniciarCariluma)
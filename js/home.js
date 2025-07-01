$( document).ready(function() {

    $('#btnEnviar').click(function() {

        if($('#rdbSim').is(':checked')){
            $(Swal.fire({
                title: "obg meu deus",
                imageUrl: "img/sim.jpg",
                imageWidth: 150,
                imageHeight: 100,
               
                
                customClass: {
                title: "titulo-grande",
                
            }}));
        }else{
            $(Swal.fire({
                title: "ah nao",
                imageUrl: "img/no.png",
                imageWidth: 150,
                imageHeight: 150,
                

                customClass: {
                    title: "titulo-grande",
                    
                }
            }));
        }
    })
})
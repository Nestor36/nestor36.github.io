


function encriptar() {

    var texto = document.getElementById("inputTexto").value.toLowerCase();
    if(texto){
        var txtCifrado = texto.replace(/e/igm,"lml");
        var txtCifrado = txtCifrado.replace(/o/igm,"`►");
        var txtCifrado = txtCifrado.replace(/i/igm,"╚╗☼");
        var txtCifrado = txtCifrado.replace(/a/igm,"#");
        var txtCifrado = txtCifrado.replace(/u/igm,"-");
        var txtCifrado = txtCifrado.replace(/é/igm,"omp");
        var txtCifrado = txtCifrado.replace(/ó/igm,"añ");
        var txtCifrado = txtCifrado.replace(/s/igm,"Ü");
        var txtCifrado = txtCifrado.replace(/h/igm,"♦");
        var txtCifrado = txtCifrado.replace(/á/igm,"¤");


        if (document.getElementById("imgDer").style.display = "none"){
            document.getElementById("imgDer").style.display = "";
            imgDer.src = "https://pa1.narvii.com/7241/c18637280c5307f681bd279b11e292429afa5fc5r1-248-500_hq.gif";    
            imgDer.style = "width: 300px;";
        }
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
    }
    else{
        document.getElementById("imgDer").style.display = "none";
        document.getElementById("imgDer").style.display = "";
        imgDer.src = "https://thumbs.gfycat.com/BackSnappyAfricanwilddog-max-1mb.gif"; 
        imgDer.style = "";   
        document.getElementById("texto").style.display = "";
        document.getElementById("copiar").style.display = "none";

    }
    
}


function desencriptar() {

    
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    if(texto){
        var txtCifrado = texto.replace(/lml/igm,"e");
        var txtCifrado = txtCifrado.replace(/`►/igm,"o");
        var txtCifrado = txtCifrado.replace(/╚╗☼/igm,"i");
        var txtCifrado = txtCifrado.replace(/#/igm,"a");
        var txtCifrado = txtCifrado.replace(/-/igm,"u");
        var txtCifrado = txtCifrado.replace(/omp/igm,"é");
        var txtCifrado = txtCifrado.replace(/añ/igm,"ó");
        var txtCifrado = txtCifrado.replace(/Ü/igm,"s");
        var txtCifrado = txtCifrado.replace(/♦/igm,"h");
        var txtCifrado = txtCifrado.replace(/¤/igm,"á");


        if (document.getElementById("imgDer").style.display = "none"){
            document.getElementById("imgDer").style.display = "";
            imgDer.src = "https://64.media.tumblr.com/e17dde85b9a2a389544bddcd3f14a02c/4d9049bb7e85482d-32/s500x750/208a32831703f7c4f3ea4aa258e196d161d81400.gifv";    
            imgDer.style = "width: 500px; height: 605px;"
        }

        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
    }
    else{
        document.getElementById("imgDer").style.display = "none";
        document.getElementById("imgDer").style.display = "";
        imgDer.src = "https://thumbs.gfycat.com/BackSnappyAfricanwilddog-max-1mb.gif";
        imgDer.style = "";
        document.getElementById("texto").style.display = "";
        document.getElementById("copiar").style.display = "none";

    }
}

function copiar(){
    document.getElementById("texto2").select()
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copió!")    

}

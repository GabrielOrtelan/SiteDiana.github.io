function scrollHistoria() {
    let scroll = document.getElementById("secHistoria");
    scroll.scrollIntoView();
}

function scrollHabilidade() {
    let scroll = document.getElementById("secHabilidades");
    scroll.scrollIntoView();
}


function abrirPassiva() {
    descP.style.display = "block";
    descQ.style.display = "none";
    descW.style.display = "none";
    descE.style.display = "none";
    descR.style.display = "none"
    habilidadeP.style.display = "block";
    habilidadeQ.style.display = "none";
    habilidadeW.style.display = "none";
    habilidadeE.style.display = "none";
    habilidadeR.style.display = "none";

}

function abrirQ() {
    descP.style.display = "none";
    descQ.style.display = "block";
    descW.style.display = "none";
    descE.style.display = "none";
    descR.style.display = "none"
    habilidadeP.style.display = "none";
    habilidadeQ.style.display = "block";
    habilidadeW.style.display = "none";
    habilidadeE.style.display = "none";
    habilidadeR.style.display = "none";

}

function abrirW() {
    descP.style.display = "none";
    descQ.style.display = "none";
    descW.style.display = "block";
    descE.style.display = "none";
    descR.style.display = "none"
    habilidadeP.style.display = "none";
    habilidadeQ.style.display = "none";
    habilidadeW.style.display = "block";
    habilidadeE.style.display = "none";
    habilidadeR.style.display = "none";

}

function abrirE() {
    descP.style.display = "none";
    descQ.style.display = "none";
    descW.style.display = "none"
    descE.style.display = "block";
    descR.style.display = "none"
    habilidadeP.style.display = "none";
    habilidadeQ.style.display = "none";
    habilidadeW.style.display = "none";
    habilidadeE.style.display = "block";
    habilidadeR.style.display = "none";

}

function abrirR() {
    descP.style.display = "none";
    descQ.style.display = "none";
    descW.style.display = "none"
    descE.style.display = "none";
    descR.style.display = "block";
    habilidadeP.style.display = "none";
    habilidadeQ.style.display = "none";
    habilidadeW.style.display = "none";
    habilidadeE.style.display = "none";
    habilidadeR.style.display = "block";

}
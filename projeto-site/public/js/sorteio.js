function ganhar(){
    var sorteio = (Math.random() * 5 + 1).toFixed(0)
    console.log(sorteio);
    if(sorteio == 1){
        alert('Parabens você ganhou Diana Valquiria Sombria');
        diana0.style.display = 'none';
        diana1.style.display = 'block';
        diana2.style.display = 'none';
        diana3.style.display = 'none';
        diana4.style.display = 'none';
        diana5.style.display = 'none';
        diana6.style.display = 'none';
        btn.style.display = 'none';
    } else if (sorteio == 2 ){
        alert('Parabens você ganhou Diana Deusa Lunar');
        diana0.style.display = 'none';
        diana1.style.display = 'none';
        diana2.style.display = 'block';
        diana3.style.display = 'none';
        diana4.style.display = 'none';
        diana5.style.display = 'none';
        diana6.style.display = 'none';
        btn.style.display = 'none';

    }   else if (sorteio == 3 ){
        alert('Parabens você ganhou Diana Infernal');
        diana0.style.display = 'none';
        diana1.style.display = 'none';
        diana2.style.display = 'none';
        diana3.style.display = 'block';
        diana4.style.display = 'none';
        diana5.style.display = 'none';
        diana6.style.display = 'none';
        btn.style.display = 'none';

    } else if (sorteio == 4 ){
        alert('Parabens você ganhou Diana Lua Sangrenta');
        diana0.style.display = 'none';
        diana1.style.display = 'none';
        diana2.style.display = 'none';
        diana3.style.display = 'none';
        diana4.style.display = 'block';
        diana5.style.display = 'none';
        diana6.style.display = 'none';
        btn.style.display = 'none';

    } else if (sorteio == 5){
        alert('Parabens você ganhou Diana Águas Sombria');
        diana0.style.display = 'none';
        diana1.style.display = 'none';
        diana2.style.display = 'none';
        diana3.style.display = 'none';
        diana4.style.display = 'none';
        diana5.style.display = 'block';
        diana6.style.display = 'none';
        btn.style.display = 'none';
    }   else{
        alert('Parabens você ganhou Diana Caçadora de Dragões');
        diana0.style.display = 'none';
        diana1.style.display = 'none';
        diana2.style.display = 'none';
        diana3.style.display = 'none';
        diana4.style.display = 'none';
        diana5.style.display = 'none';
        diana6.style.display = 'block';
        btn.style.display = 'none';
    }
}
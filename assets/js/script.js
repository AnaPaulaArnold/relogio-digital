const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(()=>{
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hora<10){
        hora = '0'+ hora;
    }
    horas.textContent = hora;
    
    if(min<10){
        min = '0'+ min;
    }
    minutos.textContent = min;

    
    if(sec<10){
        sec = '0'+ sec;
    }
    segundos.textContent = sec;
    
    
})


document.addEventListener('click', function(event) {

    const capaSinAfectarEventoClick = document.querySelector('.formtarea');
    const btn_mas = document.querySelector('.btn_mas');

    if(!capaSinAfectarEventoClick.classList.contains('oculto')){
        if (!capaSinAfectarEventoClick.contains(event.target) && !btn_mas.contains(event.target)) {
            capaSinAfectarEventoClick.classList.add('oculto');
        }
    }

});
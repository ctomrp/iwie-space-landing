window.addEventListener('load', function() {
    /* quitar el setTimeout en prod */
    setTimeout(() => {
        this.document.querySelector(".loader").style.display = 'none';        
    }, 3000);
});
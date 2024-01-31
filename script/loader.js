window.addEventListener('load', function () {
    this.document.querySelector(".body").style.display = 'none';

    setTimeout(() => {
        this.document.querySelector(".loader").style.display = 'none';
        this.document.querySelector(".body").style.display = 'block';
    }, 3000);
});
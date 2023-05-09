const form = document.getElementById('formulario');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const sale = new FormData(form);
    fetch('http://127.0.0.1:8000/api/sales', {
        method: 'POST',
        body: sale
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    location.reload();
});

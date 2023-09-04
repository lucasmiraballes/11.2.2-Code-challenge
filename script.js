document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.getElementById('formulario');
    
    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); 
    
        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const birthDate = document.getElementById('birthDate').value;
        
        const data = {
            name: name,
            lastname: lastname,
            birthDate: birthDate
        };
        
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })

        .catch(error => {
            console.error('Error:', error);
        });

    });
});
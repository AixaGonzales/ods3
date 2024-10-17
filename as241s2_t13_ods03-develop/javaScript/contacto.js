//sp13_us3_preguntasfrecuentes//
              
//fondo_static_animacion//
const animatedBackground = document.querySelector('.animated-background');

function changeGradient() {
    //colores de la paleta//
    const colors = [
        'linear-gradient(270deg, #fffff, #feb47b)',
        'linear-gradient(270deg, #2CC295, #2575fc)',
        'linear-gradient(270deg, #0eb67b, #O32221)',
        'linear-gradient(270deg, #, #O32221)',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    animatedBackground.style.background = randomColor;
}

// el tiempode cambio es 4s//
setInterval(changeGradient, 4000);
// es el campo donde estan los identificadores//
const emailInput = document.querySelector('#gmail');
const messageInput = document.querySelector('#mensaje');
//cuando la persona de sumib se enviara el formulario//
form.addEventListener('submit', (e) => {
  e.preventDefault(); //recaragar la pagina despues de enviarla //
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Por favor complete todos los campos');//verificar que los campos no esten vacios//
  } else if (!validateEmail(emailInput.value)) {
    alert('por favor ingresa un correo valido');
  } else {
    alert('Formulario enviado con éxito.');
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}


  
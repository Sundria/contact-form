document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()

    let valido = true;

    const campos = document.querySelectorAll('.required');
    
    campos.forEach((campo) => {
        const spanErro = campo.nextElementSibling;

        if (campo.value.trim() === "") {
            spanErro.style.opacity = '1';
            valido = false;
        } else {
            spanErro.style.opacity = '0';
        }
    })

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let emailErro = emailInput.nextElementSibling;

    if (emailValue === "") {
        emailErro.style.opacity = '1';
        valido = false;
    } else if (!emailRegex.test(emailValue)) {
        emailErro.textContent = "Please enter a valid email address";
        emailErro.style.opacity = '1';
        valido = false;
    } else {
        emailErro.style.opacity = '0';
    }

    const radioInput = document.querySelector('input[name="opcao"]:checked');
    const primeiroRadio = document.querySelector('.main-rbtn');
    const radioErro = primeiroRadio.nextElementSibling;
    
    if (!radioInput) {
        radioErro.style.opacity = '1'
        valido = false;
    }else{
        radioErro.style.opacity = '0'
    }

    const inputCheckbox = document.querySelector('input[type="checkbox"]');
    const checkboxErro = document.querySelector('.checkbox').nextElementSibling;
    
    if (!inputCheckbox.checked) {
        checkboxErro.style.opacity = '1'
        valido = false;
    }else{
        checkboxErro.style.opacity = '0'
    }

    if (valido) {
        setTimeout(() => {
            document.querySelector('.checked').style.opacity = '1'
            setTimeout(() => {
                document.querySelector('.checked').style.opacity = '0'
            }, 4000);
        }, 500);
        e.target.reset();
    }
});
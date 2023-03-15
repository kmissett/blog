if (document.getElementById('contact')) {

    const contactForm = document.querySelector('.site-contact')
    const formAction = 'https://formsapi.jabwn.com/key/mViLhZuNOEYNclRNB4cJ'
    const formMethod = 'post'
    const submittedName = contactForm.querySelector('#name')
    const email = contactForm.querySelector('#email')
    const message = contactForm.querySelector('#message')
    const submitButton = contactForm.querySelector('.submit')
    
    const fields = [submittedName, email, message]
    fields.forEach(field => field.addEventListener('change', validateInput))
    setInterval(enableSubmit, 1000)
    
    function validateInput() {
        const re = /\S+@\S+\.\S+/
        if (this.value.trim() === "") {
            this.classList.add('is-invalid')
            this.parentElement.children[2].innerText = "This is a required field."; return
        }
        if (this.type == "email" && !re.test(email.value)) {
            this.classList.add('is-invalid')
            this.parentElement.children[2].innerText = "There seems to be something wrong with the email you entered."; return
        }
        this.classList.remove('is-invalid')
        this.parentElement.children[2].innerText = "";return
    }
    
    function enableSubmit() {
        const inputsFilled = (
            submittedName.value.trim() !== "" && 
            email.value.trim() !== "" && 
            message.value.trim() !== ""
        )
        const inputsValid = !(
            submittedName.classList.contains('is-invalid') || 
            email.classList.contains('is-invalid') ||
            message.classList.contains('is-invalid')
        )
        
        if (inputsFilled && inputsValid) {
            contactForm.action = formAction
            contactForm.method = formMethod
            submitButton.setAttribute('aria-disabled', 'false')
            return
                }
        submitButton.setAttribute('aria-disabled', 'true')
    }
    
    const preventSubmit = (e) => { if (submitButton.getAttribute('aria-disabled') == "true") e.preventDefault()}
    submitButton.addEventListener('click', preventSubmit)
    
    }
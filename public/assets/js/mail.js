function sendMail(){

    var templateParams = {
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    const serviceID = 'service_u58ttru';
    const templateID = 'template_ywt7evr';
     
    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            document.getElementById('email').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";
           console.log('SUCCESS!', response.status, response.text);
           alert("Your message has been sent successfully");
        }, function(error) {
           console.log('FAILED...', error);
        });
}
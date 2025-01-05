document.getElementById('subscribeForm').onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('responseMessage');

    if (email) {
        responseMessage.textContent = `Thank you for subscribing, ${email}!`;
        responseMessage.style.color = "#2ecc71";
        document.getElementById('subscribeForm').reset();
    } else {
        responseMessage.textContent = "Please enter a valid email.";
        responseMessage.style.color = "#e63946";
    }
};

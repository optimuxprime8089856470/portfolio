(function () {
    emailjs.init("GNjna9ervArSGoIOH");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_pwp11n3",
        "template_q8tq4us",
        this
    ).then(function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    }, function (error) {
        alert("Failed to send message");
        console.log(error);
    });
});
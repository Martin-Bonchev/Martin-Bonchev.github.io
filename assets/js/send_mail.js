function sendMail() {
    const a =`mailto:mpbonchev@gmail.com
        ?cc=${document.getElementById("emailCC").value}
        &subject=${document.getElementById("emailSubject").value}
        &body=${document.getElementById("emailName").value},%0D%0A${document.getElementById("emailMessage").value.split("\n").join("%0D%0A")}
    `;
    window.open(a);
}
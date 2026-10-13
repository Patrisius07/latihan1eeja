const form = document.getElementById("formkontak");

form.addEventListener("submit", function (event) {


    event.preventDefault();

    const nomorWhatsApp = "6281339635914";

    const nama = document.getElementById("Nama").value;
    const email = document.getElementById("Email").value;
    const telepon = document.getElementById("No.hp").value;
    const bidangMinat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    const isiPesan = 
`Halo, saya menghubungi melalui website CV.
Nama Lengkap : ${nama}
Email        : ${email}
NO. Telepon  : ${telepon}
Bidang Minat : ${bidangMinat}
Pesan :
${pesan}`;

    const pesanEncoded = encodeURIComponent(isiPesan);

    const urlWhatsApp =
        `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

    window.open(urlWhatsApp, "_blank");

});

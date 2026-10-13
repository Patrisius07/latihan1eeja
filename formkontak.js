const form = document.getElementById("formkontak");

form.addEventListener("submit", function (event) {

    // Mencegah form berpindah ke halaman lain
    event.preventDefault();

    // ==================== NOMOR WHATSAPP TUJUAN ====================
    const nomorWhatsApp = "6281339635914";

    // ==================== MENGAMBIL DATA DIRI FORM =================
    const nama = document.getElementById("Nama").value;
    const email = document.getElementById("Email").value;
    const telepon = document.getElementById("No.hp").value;
    const bidangMinat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    // ==================== MEMBUAT ISI PESAN WHATSAPP ===============
    const isiPesan = 
`Halo, saya menghubungi melalui website CV.
Nama Lengkap : ${nama}
Email        : ${email}
NO. Telepon  : ${telepon}
Bidang Minat : ${bidangMinat}
Pesan :
${pesan}`;

    // ==================== MENGUBAH PESAN MENJADI FORMAT URL =========
    const pesanEncoded = encodeURIComponent(isiPesan);

    // ==================== MEMBUAT LINK WHATSAPP =====================
    const urlWhatsApp =
        `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

    window.open(urlWhatsApp, "_blank");

});
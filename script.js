let submitBtn = document.getElementById("submitBtn");

// bikin suatu fungsi yang melakukan pengecekan terhadap input-input yang dimasukkan user
function HandleClick(event) {
    event.preventDefault()
    //1. ambil value dari masing masing input
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //2. Setelah kita mengambil value, kita mau beritahu user, klo input kosong dikasih peringatan
    // 2. A. Ketika input firstname kosong, tolong masukkan teks "First name is required"
    if (!firstName) {
        document.getElementById("errorFirstName").innerText = "First name is required";
        document.getElementById("firstName").classList.add("input-alert")
    }

    if (firstName && lastName && email && password) {
        // ganti semua element di dalam div.form-section dengan element HTML baru (pada kasus ini adalah ucapan terima tengkyuuu)

        document.querySelector(".form-section").innerHTML = `
            <h2>Tyy bet! ${firstName} ${lastName}</h2>
            <p>${email} adalah Contoh orang yang selamat dari kiamat tahun 2012 </p>
        
        `
    }

}

submitBtn.addEventListener("click", HandleClick)

// Dapatkan elemen-elemen HTML
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

// Data simulasi pengguna dari database
// Dalam proyek nyata, kamu akan melakukan panggilan ke server untuk memvalidasi data ini
const validEmail = "user@example.com";
const validPassword = "password123";

// Tambahkan event listener untuk submit form
loginForm.addEventListener('submit', function (event) {
    // Mencegah form untuk dikirimkan secara default
    event.preventDefault();

    // Dapatkan nilai dari input
    const email = emailInput.value;
    const password = passwordInput.value;

    // Lakukan validasi
    if (email === validEmail && password === validPassword) {
        // Jika email dan password cocok, arahkan ke halaman lain
        window.location.href = "ticket.html"; // Ganti dengan URL halaman tiket kamu
    } else {
        // Jika tidak cocok, tampilkan pesan error
        errorMessage.style.display = 'block'; // Tampilkan pesan error
        errorMessage.textContent = 'Email atau password salah.'; // Ganti teks pesan
    }
});
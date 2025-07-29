document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan semua elemen dengan kelas 'btn-new-ticket'
    const newTicketButtons = document.querySelectorAll('.btn-new-ticket');

    // Iterasi melalui setiap tombol dan tambahkan event listener
    newTicketButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Mencegah perilaku default jika tombol adalah tautan atau memiliki perilaku lain
            event.preventDefault();
            // Arahkan pengguna ke halaman new-ticket.html
            window.location.href = 'new-ticket.html';
        });
    });

    // Skrip ini sekarang minimal karena fungsionalitas modal telah dihapus.
    // Anda dapat menambahkan JavaScript umum di seluruh halaman di sini jika diperlukan.

    // Contoh: Jika Anda menggunakan editor teks kaya seperti CKEditor,
    // Anda akan menginisialisasikannya di sini setelah DOM dimuat.
    /*
    ClassicEditor
        .create( document.querySelector( '#initialResponse' ) )
        .catch( error => {
            console.error( error );
        } );
    ClassicEditor
        .create( document.querySelector( '#internalNote' ) )
        .catch( error => {
            console.error( error );
        } );
    */

            const mockUsers = ["fairuz", "amanda", "joko"];
            const textarea = document.getElementById("dropdownTextarea");
            const message = document.getElementById("validationMessage");
        
            textarea.addEventListener("input", function () {
              const val = textarea.value.trim();
        
              if (val.length === 0 || val.length === 2) {
                message.textContent = "Please enter 3 or more characters";
              } else if (val.length === 1) {
                message.textContent = "Please enter 2 or more characters";
              } else {
                const found = mockUsers.some(user => user.toLowerCase().includes(val.toLowerCase()));
                if (!found) {
                  message.textContent = "The results could not be loaded.";
                } else {
                  message.textContent = "";
                }
              }
            });
    
});

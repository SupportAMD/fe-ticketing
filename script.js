document.addEventListener('DOMContentLoaded', function () {
    // Dapatkan semua elemen dengan kelas 'btn-new-ticket'
    const newTicketButtons = document.querySelectorAll('.btn-new-ticket');

    // Iterasi melalui setiap tombol dan tambahkan event listener
    newTicketButtons.forEach(button => {
        button.addEventListener('click', function (event) {
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
    // Get elements
    const userSearchInput = document.getElementById('userSearchInput');
    const contactSearchInput = document.getElementById('contactSearchInput');
    const userValidationMessage = document.getElementById('userValidationMessage');
    const contactValidationMessage = document.getElementById('contactValidationMessage');
    const userValidIcon = document.getElementById('userValidIcon');
    const contactValidIcon = document.getElementById('contactValidIcon');
    const openUserModalBtn = document.getElementById('openUserModalBtn');
    const openContactModalBtn = document.getElementById('openContactModalBtn');

    // Regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Show/hide validation messages
    function showValidationMessage(targetElement, message, isError = true) {
        targetElement.textContent = message;
        targetElement.style.display = message ? 'block' : 'none';
        targetElement.classList.toggle('text-danger', isError);
        targetElement.classList.toggle('text-success', !isError);
    }

    // Show/hide centang icon
    function showValidIcon(iconElement, isValid) {
        iconElement.classList.toggle('d-none', !isValid);
    }

    // Validation logic
    function validateEmailInput(input, messageBox, icon) {
        const value = input.value.trim();
        const isValid = emailPattern.test(value);

        if (!isValid) {
            showValidationMessage(messageBox, 'Invalid email format', true);
            showValidIcon(icon, false);
            return false;
        } else {
            showValidationMessage(messageBox, '', true); // hide message
            showValidIcon(icon, true);
            return true;
        }
    }

    // Real-time validation
    userSearchInput.addEventListener('input', () => {
        validateEmailInput(userSearchInput, userValidationMessage, userValidIcon);
    });
    contactSearchInput.addEventListener('input', () => {
        validateEmailInput(contactSearchInput, contactValidationMessage, contactValidIcon);
    });

    // On load check
    validateEmailInput(userSearchInput, userValidationMessage, userValidIcon);
    validateEmailInput(contactSearchInput, contactValidationMessage, contactValidIcon);

    // Submit blocking
    document.getElementById('ticketForm').addEventListener('submit', function (e) {
        const userOk = validateEmailInput(userSearchInput, userValidationMessage, userValidIcon);
        const contactOk = validateEmailInput(contactSearchInput, contactValidationMessage, contactValidIcon);

        if (!userOk || !contactOk) {
            e.preventDefault();
        }
    });

    // Modal simulation
    openUserModalBtn.addEventListener('click', () => {
        alert('Modal for adding new user would open.');
    });
    openContactModalBtn.addEventListener('click', () => {
        alert('Modal for adding new contact would open.');
    });

    const addNewUserBtn = document.getElementById('addNewUserBtn');
    const modal = document.getElementById('userModal');
    const overlay = document.getElementById('modalOverlay');
    const closeUserModal = document.getElementById('closeUserModal');
    const closeUserModal2 = document.getElementById('closeUserModal2');

    addNewUserBtn.addEventListener('click', function () {
        modal.classList.add('show');
        overlay.classList.add('show');
    });

    closeUserModal.addEventListener('click', closeModal);
    closeUserModal2.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    function closeModal() {
        modal.classList.remove('show');
        overlay.classList.remove('show');
    }

});


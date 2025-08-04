const openBtn = document.getElementById('addNewUserBtn');
const closeBtns = document.querySelectorAll('#closeUserModal, #closeUserModal2');
const modal = document.getElementById('userModal');
const overlay = document.getElementById('modalOverlay');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });
});

const createUserEmailInput = document.getElementById('createUserEmail');
const createUserEmailValidation = document.getElementById('createUserEmailValidation');
const createUserEmailValidIcon = document.getElementById('createUserEmailValidIcon');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateCreateUserEmail() {
  const value = createUserEmailInput.value.trim();

  if (value === '' || !emailPattern.test(value)) {
    createUserEmailValidation.textContent = 'Invalid email format';
    createUserEmailValidation.style.display = 'block';
    createUserEmailValidIcon.classList.add('d-none');
    return false;
  } else {
    createUserEmailValidation.style.display = 'none';
    createUserEmailValidIcon.classList.remove('d-none');
    return true;
  }
}

createUserEmailInput.addEventListener('input', validateCreateUserEmail);
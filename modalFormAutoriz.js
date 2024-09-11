
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalForm = document.getElementById('modalForm');
    const closeBtn = document.querySelector('.close');

    modalForm.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
   

function openRegistrationModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("registrationModal").style.display = "block";
}

function closeRegistrationModal() {
    document.getElementById("registrationModal").style.display = "none";
    document.getElementById("modal").style.display = "block";
}
function closeRegistration() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal").style.display = "block";
}

function openLoginModal() {
    document.getElementById("registrationModal").style.display = "none";
    document.getElementById("modal").style.display = "block";
}
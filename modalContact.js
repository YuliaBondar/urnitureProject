const modal = document.getElementById('modalContact');
const modalFormContact = document.getElementById('modalFormContact');

modalFormContact.addEventListener('click', () => {
    modal.style.display = 'block';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

function closeModal() {
    document.getElementById("modalContact").style.display = "none";
}

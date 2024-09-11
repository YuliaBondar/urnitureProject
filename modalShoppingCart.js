document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('cartModal');
    const cartBtn = document.getElementById('shopping-cart');
    const closeBtn = document.querySelector('.closes');

    cartBtn.addEventListener('click', function() {
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
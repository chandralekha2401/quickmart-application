document.addEventListener("DOMContentLoaded", function() {
document.getElementById('load-more-btn').addEventListener('click', function () {
    // Redirect to the new HTML page (e.g., "product2.html")
    window.location.href = 'product2.html'; 
});
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('load-back-btn').addEventListener('click', function () {
    // Redirect to the new HTML page (e.g., "product2.html")
    window.location.href = 'product.html'; 
});
});
const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thanks for buying Our Products!');
        });
    });

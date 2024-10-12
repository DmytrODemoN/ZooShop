const searchInput = document.getElementById("search-input");
const productItems = document.querySelectorAll(".product");

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();

    productItems.forEach(item => {
        const productName = item.querySelector(".product-title").textContent.toLowerCase();

        // Check if the product name includes the search term
        if (productName.includes(searchTerm)) {
            item.style.display = ""; // Show the item
        } else {
            item.style.display = "none"; // Hide the item
        }
    });
});

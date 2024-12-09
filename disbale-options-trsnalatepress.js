<script>
document.addEventListener("DOMContentLoaded", function () {
    // Get all the language switcher links
    const languageLinks = document.querySelectorAll(".trp-language-switcher a");

    languageLinks.forEach((link) => {
        // Check for the title attribute to identify French and Dutch
        const title = link.getAttribute("title");
        if (title === "French" || title === "Dutch") {
            // Remove the current text completely
            link.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = ""; // Clear the existing text
                }
            });

            // Add "Coming Soon" text after the flag
            const comingSoonText = document.createTextNode(" Coming Soon");
            link.appendChild(comingSoonText);

            // Optionally disable the link
            link.setAttribute("href", "#");
            link.style.pointerEvents = "none"; // Prevent clicks
            link.style.cursor = "not-allowed"; // Change cursor to indicate disabled
        }
    });
});


</script>

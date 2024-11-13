document.addEventListener("DOMContentLoaded", () => {
    const states = document.querySelectorAll(".state");

    states.forEach(state => {
        state.addEventListener("click", () => {
            const stateId = state.id;
            window.location.href = `${stateId}.html`; // Redirect to the state-specific page
        });

        // Hover effect for visual feedback
        state.addEventListener("mouseenter", () => {
            state.style.fill = "#a9a9a9"; // Change color when hovering
        });

        state.addEventListener("mouseleave", () => {
            state.style.fill = ""; // Reset color when mouse leaves
        });
    });
});

document.getElementById('IN-MH').addEventListener('click', function() {
    window.location.href = 'MH.html';  // This will trigger the route and load MH.ejs
});

function redirectToPage() {
    const selectedValue = document.getElementById("areas").value;
    if (selectedValue) {
        window.location.href = `${selectedValue}.html`;
    }
};

  

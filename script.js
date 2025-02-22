document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // Button Click Effect
    document.querySelector(".cta-button").addEventListener("click", function () {
        alert("Explore the teams now!");
    });

    // Team Selection
    const teamCards = document.querySelectorAll(".team-card");
    teamCards.forEach((card) => {
        card.addEventListener("click", function () {
            let selectedTeam = this.querySelector("p").innerText;
            alert(`You selected ${selectedTeam}!`);
        });
    });
});

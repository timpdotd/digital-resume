/*
    HIDE/SHOW SIDEBAR
*/
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
    
    if (window.innerWidth < 450) { // Adjust the screen width threshold as needed
        sidebar.style.width = "100%";
    } else {
        sidebar.style.width = "250px";
    }
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.width = "0";
}

/*
    AUTOMATIC UPDATE OF COPYRIGHT YEAR
*/
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear(); // Get the current year
    document.getElementById("copyright-year").textContent = currentYear;
});
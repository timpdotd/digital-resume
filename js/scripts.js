function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
    
    if (window.innerWidth < 400) { // Adjust the screen width threshold as needed
        sidebar.style.width = "100%";
    } else {
        sidebar.style.width = "250px";
    }
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.width = "0";
}

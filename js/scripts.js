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
    const copyrightYearElements = document.querySelectorAll(".copyright-year");

    copyrightYearElements.forEach(function (element) {
        element.textContent = currentYear;
    });
});

$(function(){
    $(".project").slice(0, 4).show(); // select the first ten
    $("#load-more").click(function(e){ // click event for load more
        e.preventDefault();
        $(".project:hidden").show(); // select next 10 hidden divs and show them
        $("#load-more").hide();
    });
});
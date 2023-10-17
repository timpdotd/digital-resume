function showSidebar(){
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = 'flex';
    sidebar.style.width = "250px";
}   

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.width = "0";

}   
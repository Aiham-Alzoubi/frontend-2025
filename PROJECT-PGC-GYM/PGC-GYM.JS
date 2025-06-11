document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector("menu").classList.toggle("active");
});


function showList(){
    var navList = document.getElementsByClassName('nav')[0];
    if (navList.style.display === 'none'){
    navList.style.display = 'block';}
    else{
    navList.style.display = 'none';}
}

// Navbar Sticky Effect Code
window.onscroll = function() {
    myFunction()
};
function myFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("home").className = "sticky";
    } else {
        document.getElementById("home").className = "";
    }
}

// Hamburger Code
document.querySelector(".hamburger").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle("active");
});

// Wow js code
wow = new WOW({
    boxClass: "wow",
    animatedClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
});
wow.init();


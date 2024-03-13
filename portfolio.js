//portfolio-item Start
let portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(portfolioItem =>{
    portfolioItem.addEventListener('mouseover', ()=>{
        portfolioItem.childNodes[1].classList.add('img-darken');
    })

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})
//portfolio-item End
//mobile Nav start
window.onresize = function() {
    if (window.innerWidth > 768) {
        document.getElementById("mobileNav").style.display = "none"
        document.getElementById("bars").style.display = "none"
    } else {
        document.getElementById("bars").style.display = "inline"
    }
};
let navLink = document.getElementById("navLink");
function showMenu() {
    document.getElementById("bars").style.display="none"
    document.getElementById("mobileNav").style.display="inline"
}
function hideMenu() {
        document.getElementById("mobileNav").style.display="none"
        document.getElementById("bars").style.display="inline"
}

// mobile Nav ends
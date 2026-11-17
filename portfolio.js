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
// Navigation for Carousel starts
document.addEventListener("DOMContentLoaded", () => {
    const portfolio = document.querySelector(".portfolio-wrapper");
    const track = document.querySelector(".portfolio-track");
    const slides = document.querySelectorAll(".portfolio-item")
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");
    const dotsContainer = document.querySelector(".carousel-dots");

    // Stop if the portofolio elements are not found
    if(!portfolio || !track || slides.length === 0) return;
    
    let currentIndex = 0;
    // Touch variables
    let startX = 0;
    let endX = 0;
    const isMobile = () => window.innerWidth <= 768;

    // Create navigation dots based on the number of projects
    slides.forEach((slide, index) => {
        const dot = document.createElement("button");
        dot.classList.add("carousel-dot");
        dot.setAttribute("aria-label", `Go to project ${index + 1}`)
        dot.setAttribute("type", "button");

        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll(".carousel-dot");

    // create a function UpdateCarousel to update the carousel based on the current index
    function updateCarousel() {
        if (isMobile()) {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }else {
            //Restore desktop grid
            track.style.transform = "none";
        }
        // Update active indicator dot
        dots.forEach((dot, index) => {
            dot.classList.toggle(
                "active",
                index === currentIndex
            );
        });
        // Disable buttoins at the beginning and end
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === slides.length - 1;
    }

    // Next project
    nextBtn.addEventListener("click", () => {
        if(currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    // Previous project
    prevBtn.addEventListener("click", () => {
        if(currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    // Swipe functionality
    portfolio.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    }, {passive: true});

    portfolio.addEventListener("touchend", (event) => {
        endX = event.changedTouches[0].clientX;

        const swipeDistance = startX - endX;

        // Ignore small movements
        if (Math.abs(swipeDistance) < 50) return;
        if (swipeDistance > 0 && currentIndex < slides.length - 1) {
            // Swipe left: next project
            currentIndex++;
        } else if (swipeDistance < 0 && currentIndex > 0) {
            // Swipe right: previous project
            currentIndex--;
        }
        updateCarousel();
    }, {passive: true});

    // Recalculate when screen size changes
    window.addEventListener("resize", updateCarousel);
    // Initial setup
    updateCarousel();
});
// Navigation for Carousel ends
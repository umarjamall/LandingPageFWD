/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const nav_var = document.getElementById("navbar__list");
const sec_list = document.querySelectorAll("section");
const frag = document.createDocumentFragment();
const links = document.querySelectorAll('li a');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

buildNav();

// Add class 'active' to section when near top of viewport

turnActive();

// Scroll to anchor ID using scrollTO event

scrolling();

/**
 * End Main Functions
 * Begin Events
 *
 *
 */

// Build menu
function buildNav() {
    sec_list.forEach((sec) => {
        // Define our variables
        const item = document.createElement("li");
        const anch = document.createElement("a");
        const anch_link = sec.getAttribute("id");
        const anch_text = sec.getAttribute("data-nav");

        // Using the variables in creating the ully completed li

        anch.setAttribute("href", "#" + anch_link);
        anch.classList.add("menu__link");
        anch.textContent = anch_text;
        item.appendChild(anch);

        frag.appendChild(item);
    });
    nav_var.appendChild(frag);
};

// Scroll to section on link click

function scrolling() {
    nav_var.addEventListener('click', function scrollToSection(e) {
        e.preventDefault();
        for (const sec of sec_list) {
            if (e.target.getAttribute("href").substring(1) === sec.id) {
                sec.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
            }
        }
    });
};

// Set sections as active

function turnActive() {
    window.addEventListener("scroll", (e) => {
        const sections = document.querySelectorAll("section");

        sections.forEach((sec) => {
            const top_bound = sec.getBoundingClientRect().top;

            if (top_bound >= 0 && top_bound <= 500) {
                sec.classList.add("your-active-class");
            } else {
                sec.classList.remove("your-active-class");
            }
        });
    });
};
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonials = new Swiper(".testimonial__container", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactInfo = document.getElementById("contact-info"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactInfo.value === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    contactMessage.textContent = "Please fill all fields ✉️";
  } else {
    emailjs
      .sendForm(
        "service_r23g6fe",
        "template_p0ave3f",
        "#contact-form",
        "qHtq0OxnlGzVQVbr-"
      )
      .then(() => {
        contactMessage.classList.add("color-blue");
        contactMessage.textContent = "Message sent ✅";
        contactName.value = "";
        contactEmail.value = "";
        contactInfo.value = "";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        contactMessage.classList.add("color-red");
        contactMessage.textContent =
          "Error sending email. Please try again later.";
      });
  }
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector(`.nav__menu a[href*="#${sectionId}"`);
              
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUpButton = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll')
                        : scrollUpButton.classList.remove('show-scroll');        
}
window.addEventListener('scroll', scrollUp);    

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");


const getCurrentTheme = () => document.body.classList.contains(darkTheme)? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? "ri-moon-line" : "ri-sun-line";

if(selectedTheme){
    document.body.classList[selectedTheme === "dark"? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "ri-moon-line"? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >=50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
    // reset: true,
    // easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
})

sr.reveal(`.home__data, .projects__container, .testimonial__container`)
sr.reveal(`.home__info div`,{delay: 100, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`,{ origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`,{ origin: 'right'})
sr.reveal(`.qualification__content, .services__card`,{ interval: 100})
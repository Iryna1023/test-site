document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseover', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.style.display = 'block';
      });
      dropdown.addEventListener('mouseout', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.style.display = 'none';
      });
    });
  });
  
//scroll
const header = document.querySelector('header');
const logo = document.querySelector('.custom-logo');
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('nav ul');

function checkMobileView() {
    return window.innerWidth <= 768;
}

function updateHeaderOnScroll() {
    if (checkMobileView()) {
        header.style.height = '52.73px';
        logo.style.width = '120px';
        logo.style.height = '35.16px';
        burgerMenu.style.fontSize = '20px';
        burgerMenu.style.transform = 'translateY(-30px)';
    } else {
        if (window.scrollY > 50) {
            header.style.height = '52.73px';
            logo.style.width = '120px';
            logo.style.height = '35.16px';
            burgerMenu.style.fontSize = '20px';
            burgerMenu.style.transform = 'translateY(-30px)';
        } else {
            header.style.height = '125.73px';
            logo.style.width = '180px';
            logo.style.height = '52.73px';
            burgerMenu.style.fontSize = '30px';
            burgerMenu.style.transform = 'translateY(0)';
        }
    }
}

window.addEventListener('load', function() {
    updateHeaderOnScroll();
});

window.addEventListener('scroll', updateHeaderOnScroll);

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


  
  // Search
  const searchIconBtn = document.querySelector('.search-icon-btn');
  const searchInputContainer = document.querySelector('.search-input-container');

  searchIconBtn.addEventListener('click', () => {
  if (searchInputContainer.style.display === 'none' || searchInputContainer.style.display === '') {
    searchInputContainer.style.display = 'block';
  } else {
    searchInputContainer.style.display = 'none';
  }
});

  //swiper
  const swiper = new Swiper('.swiper-container', {
    loop: false,
    slidesPerView: 1, 
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //burger
  let acc = document.getElementsByClassName("dropdown");
  let i;
  
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function(event) {
          event.preventDefault();
          this.classList.toggle("active");
          
          let panel = this.querySelector(".dropdown-menu");
  
          if (this.classList.contains("active")) {
              panel.style.display = "block";
          } else {
              panel.style.display = "none";
          }
      });
  }
  

 
const initializeTestimonials = () => {
  new Swiper(".testimonials .swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
};

const initializeNavigation = () => {
  const header = document.querySelector(".header");
  const navigation = document.querySelector(".header__list");
  const openButton = document.querySelector(".header__burger");
  const closeButton = document.querySelector(".header__close-button");

  if (!header || !navigation || !openButton || !closeButton) {
    return;
  }

  const setNavigationState = (isOpen) => {
    header.classList.toggle("header--menu-open", isOpen);
    openButton.setAttribute("aria-expanded", String(isOpen));
  };

  openButton.addEventListener("click", () => setNavigationState(true));
  closeButton.addEventListener("click", () => setNavigationState(false));

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setNavigationState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavigationState(false);
    }
  });
};

const initializeAccordion = () => {
  const accordionItems = document.querySelectorAll(".process__item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".process__button");

    if (!button) {
      return;
    }

    const toggleItem = () => {
      const isOpen = item.classList.toggle("process__item--active");
      button.setAttribute("aria-expanded", String(isOpen));
    };

    button.addEventListener("click", toggleItem);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initializeTestimonials();
  initializeNavigation();
  initializeAccordion();
});

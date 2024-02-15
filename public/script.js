(function () {
  const body = document.body;

  const btnTheme = document.querySelector("#theme-toggle");
  const btnHamburger = document.querySelector(".fa-bars");
  const navListItem = document.querySelectorAll(".nav__list-item");
  const isSystemThemeDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const getBodyTheme = localStorage.getItem("portfolio-theme");
  const getBtnTheme = localStorage.getItem("portfolio-btn-theme");
  const navUl = document.querySelector(".nav__list");

  const addThemeClass = (bodyClass, btnClass) => {
    body.classList.add(bodyClass);
    btnTheme.children[0].classList.add(btnClass);
  };

  addThemeClass(getBodyTheme, getBtnTheme);

  const isDark = () => body.classList.contains("dark");

  const setTheme = (bodyClass, btnClass) => {
    body.classList.remove(localStorage.getItem("portfolio-theme"));
    btnTheme.children[0].classList.remove(localStorage.getItem("portfolio-btn-theme"));

    addThemeClass(bodyClass, btnClass);

    localStorage.setItem("portfolio-theme", bodyClass);
    localStorage.setItem("portfolio-btn-theme", btnClass);
  };

  // isSystemThemeDark ? setTheme("dark", "fa-sun") : setTheme("light", "fa-moon");

  btnTheme.addEventListener("click", () => (isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun")));

  const closeNav = () => {
    navUl.classList.remove("display-nav-list");
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
  };

  btnHamburger.addEventListener("click", () => {
    if (btnHamburger.classList.contains("fa-bars")) {
      btnHamburger.classList.remove("fa-bars");
      btnHamburger.classList.add("fa-times");
      navUl.classList.add("display-nav-list");
    } else {
      closeNav();
    }
  });

  navUl.addEventListener("click", () => {
    closeNav();
  });

  document.addEventListener("scroll", () => {
    const btnScrollTop = document.querySelector(".scroll-top");

    if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      btnScrollTop.style.display = "block";
    } else {
      btnScrollTop.style.display = "none";
    }
  });
})();

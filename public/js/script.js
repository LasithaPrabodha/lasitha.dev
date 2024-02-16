(function () {
  const body = document.body;

  const btnTheme = document.querySelector("#theme-toggle");
  const btnHamburger = document.querySelector(".fa-bars");
  const navUl = document.querySelector(".nav__list");

  function getBodyTheme() {
    return localStorage.getItem("portfolio-theme") || "light";
  }
  function getBtnTheme() {
    return localStorage.getItem("portfolio-btn-theme") || "fa-moon";
  }

  function addThemeClass(bodyClass, btnClass) {
    body.classList.add(bodyClass);
    btnTheme.children[0].classList.add(btnClass);
  }

  addThemeClass(getBodyTheme(), getBtnTheme());

  function isDark() {
    return body.classList.contains("dark");
  }

  function setTheme(bodyClass, btnClass) {
    body.classList.remove(getBodyTheme());
    btnTheme.children[0].classList.remove(getBtnTheme());

    addThemeClass(bodyClass, btnClass);

    localStorage.setItem("portfolio-theme", bodyClass);
    localStorage.setItem("portfolio-btn-theme", btnClass);
  }

  function closeNav() {
    navUl.classList.remove("display-nav-list");
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    body.classList.remove("nav-open");
  }

  function openNav() {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
    body.classList.add("nav-open");
  }

  btnTheme.addEventListener("click", () => {
    if (isDark()) {
      setTheme("light", "fa-moon");
    } else {
      setTheme("dark", "fa-sun");
    }
  });

  btnHamburger.addEventListener("click", () => {
    if (btnHamburger.classList.contains("fa-bars")) {
      openNav();
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

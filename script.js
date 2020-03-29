window.onload = function() {
  // HEADER

  const HAMBURGER = document.querySelector(".hamburger");
  const navBar = document.querySelector(".navigation_bar");
  const wrap = document.querySelectorAll("section");
  console.log(wrap);
  HAMBURGER.addEventListener("click", event => {
    if (navBar.classList.contains("navigation_bar_showed")) {
      HAMBURGER.classList.add("hamburger-back");
      navBar.classList.remove("navigation_bar_showed");
      wrap.forEach(e => e.classList.remove("blur"));
    } else {
      HAMBURGER.classList.remove("hamburger-back");
      HAMBURGER.classList.add("hamburger-transformed");
      wrap.forEach(e => e.classList.add("blur"));
      navBar.classList.add("navigation_bar_showed");
    }
    if (navBar.classList.contains("navigation_bar_showed")) {
      navBar.classList.add("links_burger");
    } else {
      navBar.classList.remove("links_burger");
    }
    header.classList.remove("smaller");
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(e) {
        HAMBURGER.classList.add("hamburger-back");
        navBar.classList.remove("navigation_bar_showed");
      });
    }
  });
  // });

  const header = document.querySelector("header");
  const navigation = document.querySelector(".navigation");
  const links = document.querySelectorAll(".nav_links");
  const anchors = document.querySelectorAll(".anchor");
  const header_link = document.querySelector("[href*=header]");
  const services = document.querySelector("[href*=services]");
  const portfolio = document.querySelector("[href*=portfolio]");
  const about = document.querySelector("[href*=about]");
  const contacts = document.querySelector("[href*=contact]");
  const slider2 = document.querySelector(".slider_2");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
      e.preventDefault();
      anchors[i].scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
      if (i >= 1) {
        header.classList.add("smaller");
      } else {
        header.classList.remove("smaller");
      }
    });
  }
  document.addEventListener("scroll", onScroll);
  function onScroll(event) {
    const curPos = window.scrollY;
    anchors.forEach(el => {
      if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
        links.forEach(a => {
          a.classList.remove("active");
          if (curPos >= 0 && curPos <= 599) {
            if (curPos >= 20) {
              header.classList.add("smaller");
            } else if (curPos >= 0 && curPos < 20) {
              header.classList.remove("smaller");
            }
            header_link.classList.add("active");
          } else if (curPos >= 600 && curPos <= 1099) {
            services.classList.add("active");
            header.classList.add("smaller");
          } else if (curPos >= 1100 && curPos <= 1969) {
            portfolio.classList.add("active");
          } else if (curPos >= 1970 && curPos <= 2395) {
            about.classList.add("active");
          } else if (curPos > 2396) {
            contacts.classList.add("active");
          }
        });
      }
    });
  }

  // SLIDER

  const btn_prev = document.querySelector(".left_button");
  const btn_next = document.querySelector(".right_button");
  const slider = document.querySelectorAll(".images_slider");
  const sliderBackground = document.querySelector(".slider");
  let currentItem = 0;
  let isEnabled = true;

  function changeCurrentItem(n) {
    currentItem = (n + slider.length) % slider.length;
  }
  function hideItem(direction) {
    isEnabled = false;
    slider[currentItem].classList.add(direction);
    slider[currentItem].addEventListener("animationend", function() {
      this.classList.remove("showed", direction);
    });
  }
  function showItem(direction) {
    slider[currentItem].classList.add("next", direction);
    slider[currentItem].addEventListener("animationend", function() {
      this.classList.remove("next", direction);
      this.classList.add("showed");
      isEnabled = true;
    });
  }
  function previousItem(n) {
    hideItem("to-right");
    changeCurrentItem(n - 1);
    showItem("from-left");
  }
  function nextItem(n) {
    hideItem("to-left");
    changeCurrentItem(n + 1);
    showItem("from-right");
  }
  btn_prev.addEventListener("click", function() {
    if (isEnabled) {
      previousItem(currentItem);
    }
    if (slider2.classList.contains("showed")) {
      sliderBackground.classList.remove("blue");
    } else {
      sliderBackground.classList.add("blue");
    }
  });
  btn_next.addEventListener("click", function() {
    if (isEnabled) {
      nextItem(currentItem);
    }
    if (slider2.classList.contains("showed")) {
      sliderBackground.classList.remove("blue");
    } else {
      sliderBackground.classList.add("blue");
    }
  });

  // BLOCKED SCREEN

  const verticalPhone = document.querySelector(".iphone_vertical_container");
  const verticalScreen = document.querySelector(".vertical_screen");
  const horizontalScreen = document.querySelector(".horizontal_screen");
  const horizontalPhone = document.querySelector(
    ".iphone_horizontal_container"
  );
  console.log(verticalScreen);
  console.log(horizontalScreen);
  console.log(horizontalPhone);
  console.log(verticalPhone);

  verticalPhone.onclick = function() {
    if (verticalScreen.classList.contains("blocked_screen")) {
      verticalScreen.classList.remove("blocked_screen");
    } else {
      verticalScreen.classList.add("blocked_screen");
    }
  };
  horizontalPhone.onclick = function() {
    if (horizontalScreen.classList.contains("blocked_screen")) {
      horizontalScreen.classList.remove("blocked_screen");
    } else {
      horizontalScreen.classList.add("blocked_screen");
    }
  };

  // PORTFOLIO

  const tabsNav = document.querySelector(".tags");
  const tabs = document.querySelectorAll(".tag");
  const gallery = document.querySelector(".portfolio__images").children;

  tabsNav.addEventListener("click", event => {
    tabs.forEach(el => el.classList.remove("tag-bordered"));
    if (event.target.tagName == "SPAN") {
      event.target.classList.add("tag-bordered");
    }
  });

  let array = Array.from(gallery);
  for (let n of tabs) {
    n.addEventListener("click", event => {
      array.sort(function() {
        return Math.random() - 0.5;
      });
      array.forEach(n =>
        document.querySelector(".portfolio__images").append(n)
      );
    });
  }
  let images = document.querySelectorAll(".image_portfolio img");
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(event) {
      images.forEach(function(item) {
        if (event.target !== item) {
          item.classList.remove("active-item");
        }
      });

      if (event.target.classList.contains("active-item")) {
        event.target.classList.remove("active-item");
      } else event.target.classList.add("active-item");
    });
  }

  // POP-UP MESSAGE

  const closeButton = document.querySelector(".close_button");
  const message = document.querySelector(".message");
  const wrapper = document.querySelector(".main_wrapper");
  const subjectRes = document.querySelector(".subject_result");
  const descriptionRes = document.querySelector(".description_result");
  const description = document.querySelector(".textarea_description");
  const subjectInput = document.getElementById("subject");
  const form = document.querySelector("form");

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (form.checkValidity()) {
      subjectRes.textContent = subjectInput.value
        ? subjectInput.value
        : "No subject";
      descriptionRes.textContent = description.value
        ? description.value
        : "No description ";
      message.classList.remove("hidden-message");
      wrapper.style.opacity = "0.8";
      document.body.style.overflow = "hidden";
    }
    form.reset();
    return false;
  });
  function closePopUp() {
    form.reset();
    message.classList.add("hidden-message");
    wrapper.style.opacity = "";
    document.body.style.overflow = "";
  }
  closeButton.addEventListener("click", closePopUp);
};

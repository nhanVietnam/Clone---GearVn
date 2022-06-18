// require("./bootstrap");
// require("font-awesome/css/font-awesome.min.css");

const swiper_s1 = new Swiper(".s1", {
  // Optional parameters
  //   modules: [Autoplay],
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
});

const swiper_s2 = new Swiper(".s2", {
  // Optional parameters
  //   modules: [Navigation, Autoplay],
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper_s3 = new Swiper(".s3", {
  // Optional parameters
  //   modules: [Navigation],
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 599px
    599: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
  },
});

const swiper_s4 = new Swiper(".s4", {
  // Optional parameters
  //   modules: [Navigation],
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 599px
    599: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});

const loginBox = document.querySelector(".mid-user");
loginBox.addEventListener("mouseover", (e) => {
  e.currentTarget.querySelector(".mid-dropdown").classList.toggle("toggle");
});
loginBox.addEventListener("mouseout", (e) => {
  e.currentTarget.querySelector(".mid-dropdown").classList.remove("toggle");
});

const btnLogin = document.querySelector(".mid-btn-login");
const btnRegister = document.querySelector(".mid-btn-register");

btnLogin.addEventListener("click", function () {
  const template = `
        <div class="modal-login">
            <div class="modal-content">
                <img class="modal-close" src="/images/close-outline.svg"/>
                <h2>Xin chào,</h2>
                <p>Đăng nhập hoặc <span class="modal-register-button">Tạo tài khoản</span></p>
                    <form action="" method="POST">
                        <input type="email" name="email" placeholder="Nhập Email"/>
                        <input type="password" name="password" placeholder="Nhập Mật khẩu"/>
                    </form>
                <a href="#" class="text-muted">Quên mật khẩu</a>
                <button class="submit-btn" type="submit">Đăng nhập</button>
                <p class="modal-divide"><span>Hoặc tiếp tục bằng:</span></p>
                <div class="modal-social">
                    <a href="#">
                        <img src="./images/facebook.png" alt="">
                    </a>
                    <a href="#">
                        <img src="./images/google.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    `;
  document.body.insertAdjacentHTML("beforeend", template);
});

btnRegister.addEventListener("click", function () {
  const template = `
        <div class="modal-register">
            <div class="modal-content">
                <img class="modal-close" src="/images/close-outline.svg"/>
                <h2 modal-title>Xin chào</h2>
                <p><span class="modal-login-button">Đăng nhập<span> hoặc Tạo tài khoản</p>
                <form method="post" action="/register">
                    <input type="text" name="username" placeholder="Nhập họ tên"/>
                    <input type="number" name="phone" placeholder="Nhập số điện thoại"/>
                    <input type="email" name="email" placeholder="Nhập Email"/>
                    <input type="password" name="password" placeholder="Nhập mật khẩu"/>
                    <input type="password" name="password-confirm" placeholder="Nhập lại mật khẩu"/>
                </form>
            </div>
        </div>
    `;
  document.body.insertAdjacentHTML("beforeend", template);
});

document.body.addEventListener("click", function (event) {
  if (event.target.matches(".modal-close")) {
    const modal = event.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  } else if (
    event.target.matches(".modal-login") ||
    event.target.matches(".modal-register")
  ) {
    event.target.parentNode.removeChild(event.target);
  }
});

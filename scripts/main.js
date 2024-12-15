// عند تحميل الصفحة، عرض العناصر بالتأخير
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 2000);
};

// تأثير التمرير (ظهور العناصر أثناء التمرير)
window.addEventListener("scroll", () => {
  const services = document.querySelectorAll(".service");
  const triggerBottom = window.innerHeight * 0.8;

  services.forEach(service => {
    const serviceTop = service.getBoundingClientRect().top;

    if (serviceTop < triggerBottom) {
      service.classList.add("show");
    } else {
      service.classList.remove("show");
    }
  });
});

// القائمة الجانبية (فتح وإغلاق)
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// تأثير التمرير السلس
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

// عرض نافذة منبثقة عند النقر على الخدمة
document.querySelectorAll(".service").forEach(service => {
  service.addEventListener("click", () => {
    const popupId = `popup-${service.dataset.service}`;
    document.getElementById(popupId).classList.add("active");
  });
});

// إغلاق النافذة المنبثقة
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.remove("active");
  });
});

// عداد زمني لتعداد المشاريع
let started = false;

window.addEventListener("scroll", () => {
  const serviceSection = document.querySelector(".services");
  const triggerBottom = window.innerHeight * 0.8;

  if (serviceSection.getBoundingClientRect().top < triggerBottom && !started) {
    started = true;
    document.querySelectorAll(".counter").forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }
});


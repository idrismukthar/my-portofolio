// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill all fields!");
        return;
      }

      emailjs
        .send("default_service", "YOUR_TEMPLATE_ID_HERE", {
          from_name: name,
          from_email: email,
          message: message,
        })
        .then(
          () => {
            alert(`Thanks ${name}! Your message has been sent.`);
            contactForm.reset();
          },
          (error) => {
            alert("Oops! Something went wrong. Please try again later.");
            console.log("EmailJS Error:", error);
          }
        );
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // FAQ dropdown logic
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Toggle active class on the clicked item
      item.classList.toggle("active");

      // Optional: Close other items if you want only one open at a time
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });

  // (Optional) Smooth scroll logic, if you're using anchor links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// تعريف العناصر من الـ DOM
const contactForm = document.getElementById("contact-form");

// إضافة حدث إرسال النموذج
contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على بيانات المدخلات
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // التأكد من أن الحقول ليست فارغة
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // يمكنك إرسال البيانات إلى الخادم هنا إذا لزم الأمر
        contactForm.reset(); // إعادة تعيين النموذج
    } else {
        alert("Please fill in all fields.");
    }
});
// تسجيل الـ Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").then(
            (registration) => {
                console.log("Service Worker registered:", registration);
            },
            (err) => {
                console.log("Service Worker registration failed:", err);
            }
        );
    });
}
// تعريف العناصر من الـ DOM
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        // استدعاء EmailJS لإرسال البريد
        emailjs.send("service_Alazab.co", "template_hbb46pi", {
            from_name: name,
            from_email: email,
            message: message,
        })
        .then(() => {
            alert("Message sent successfully!");
            contactForm.reset(); // إعادة تعيين النموذج
        })
        .catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        });
    } else {
        alert("Please fill in all fields.");
    }
});

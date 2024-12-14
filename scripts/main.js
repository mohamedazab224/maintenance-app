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

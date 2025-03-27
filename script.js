document.getElementById("learnMore").addEventListener("click", function() {
    alert("لطفي للمعلوميات توفر لكم أفضل الخدمات الرقمية!");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
});
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("registerName").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        document.getElementById("authForms").style.display = "none";
        document.getElementById("welcomeMessage").innerText = "مرحبًا، " + localStorage.getItem("userName");
        document.getElementById("logoutBtn").style.display = "block";
        alert("تم تسجيل الدخول بنجاح!");
    } else {
        alert("خطأ في البريد الإلكتروني أو كلمة المرور!");
    }
});

document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    document.getElementById("authForms").style.display = "block";
    document.getElementById("welcomeMessage").innerText = "";
    document.getElementById("logoutBtn").style.display = "none";
    alert("تم تسجيل الخروج بنجاح!");
});
function bookService(serviceName) {
    document.getElementById("selectedService").innerText = "الخدمة المختارة: " + serviceName;
    document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

function submitBooking() {
    let name = document.getElementById("clientName").value;
    let email = document.getElementById("clientEmail").value;
    let service = document.getElementById("selectedService").innerText.replace("الخدمة المختارة: ", "");

    if (name && email) {
        alert(`تم إرسال طلب حجز خدمة "${service}" بنجاح! سيتم التواصل معك عبر البريد الإلكتروني.`);
        closeModal();
    } else {
        alert("يرجى ملء جميع الحقول!");
    }
}

// إغلاق النموذج عند الضغط خارج المربع
window.onclick = function(event) {
    let modal = document.getElementById("bookingModal");
    if (event.target == modal) {
        closeModal();
    }
};
function submitBooking() {
    let name = document.getElementById("clientName").value;
    let email = document.getElementById("clientEmail").value;
    let service = document.getElementById("selectedService").innerText.replace("الخدمة المختارة: ", "");

    if (name && email) {
        let subject = encodeURIComponent("طلب حجز خدمة - " + service);
        let body = encodeURIComponent(`الاسم: ${name}\nالبريد الإلكتروني: ${email}\nالخدمة المطلوبة: ${service}`);
        window.location.href = `mailto:lotfitoumi421@gmail.com?subject=${subject}&body=${body}`;
        
        closeModal();
    } else {
        alert("يرجى ملء جميع الحقول!");
    }
}
function bookService(serviceName) {
    document.getElementById("selectedService").innerText = "الخدمة المختارة: " + serviceName;
    document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

function submitBooking() {
    let name = document.getElementById("clientName").value;
    let email = document.getElementById("clientEmail").value;
    let service = document.getElementById("selectedService").innerText.replace("الخدمة المختارة: ", "");

    if (name && email) {
        let subject = encodeURIComponent("طلب حجز خدمة - " + service);
        let body = encodeURIComponent(`الاسم: ${name}\nالبريد الإلكتروني: ${email}\nالخدمة المطلوبة: ${service}`);
        window.location.href = `mailto:lotfitoumi421@gmail.com?subject=${subject}&body=${body}`;
        
        closeModal();
    } else {
        alert("يرجى ملء جميع الحقول!");
    }
}

// إغلاق النموذج عند الضغط خارج المربع
window.onclick = function(event) {
    let modal = document.getElementById("bookingModal");
    if (event.target == modal) {
        closeModal();
    }
};

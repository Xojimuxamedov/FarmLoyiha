const data = {
  pathFixedTitle: [
    "Xalqaro GMP sertifikatiga mos korxona qurish",
    "Xom ashyo va materiallarni yetkazib berish",
    "Jihozlar va infratuzilmani tashkil etish",
    "Dori vositalarini davlat roʻyxatidan oʻtkazish",
  ],
  pathFixedText: [
    "Bundan maqsad, xalqaro GMP sertifikati asosida ishlab chiqarish jarayonlarini tashkil etish va ishlab chiqarishning barcha bosqichlarida sifatni nazorat qilishni amalga oshirish. GMP (Good Manufacturing Practice) sertifikati ishlab chiqarish jarayonlarining barcha jihatlarini, shu jumladan xom ashyo tanlovini, jihozlar va texnologik jarayonlarni, shuningdek, xodimlar malakasini belgilangan standartlarga muvofiqligini ta’minlashni nazarda tutadi. Bu sertifikat orqali korxona o‘z mahsulotlarini eng yuqori sifatda ishlab chiqarish imkoniyatiga ega bo‘ladi va xalqaro bozorda raqobatbardosh bo‘lishi mumkin. Shuningdek, GMP sertifikati yordamida ishlab chiqarish jarayonlarini samarali boshqarish, sifatni yaxshilash va sarf-xarajatlarni kamaytirish imkoniyatlari yaratiladi. Har bir ishlab chiqarish bosqichida sifat nazorati o‘rnatilishi, mahsulotlar uchun xavfsizligi va samaradorligi ta’minlanadi.",
    "Xom ashyo va materiallarni yetkazib berish orqali samarali ishlab chiqarishni ta’minlash juda muhim ahamiyatga ega. Ishlab chiqarish jarayonining asosiy qismlaridan biri bu sifatli va ishonchli xom ashyolarni o‘z vaqtida yetkazib berishdir. Ishlab chiqarishning samaradorligi xom ashyolarni to‘g‘ri va vaqtida yetkazib berish orqali ta’minlanadi. Xom ashyolarni tanlashda ularning sifatini, mahsulotning texnik va sifat talablariga javob berishini, shuningdek, yetkazib berishning o‘z vaqtida amalga oshirilishini hisobga olish kerak. Xom ashyolarni optimal boshqarish va izchil ta’minlash ishlab chiqarish jarayonini soddalashtiradi va o‘z vaqtida mahsulotlarni tayyorlashga imkon beradi. Bu jarayonlarning boshqarilishini mukammallashtirish orqali ishlab chiqarishning samaradorligini oshirish, mahsulot sifatini yaxshilash va xarajatlarni kamaytirish mumkin.",
    "Jihozlar va infratuzilmani tashkil etish orqali ishlab chiqarishning barqarorligini ta’minlash juda muhim. Ishlab chiqarish jarayonlarining samarali ishlashi uchun zarur bo‘lgan jihozlar va infratuzilma bir butun tizim sifatida ishlashi kerak. Jihozlar va uskunalar ishlab chiqarishning samarali va ishonchli bo‘lishini ta’minlaydi. Bularni boshqarish, ularni sozlash va muntazam ravishda texnik xizmat ko‘rsatish ishlab chiqarishning barqarorligini ta’minlashda katta rol o‘ynaydi. Infratuzilma, shu jumladan energiya manbai, suv ta’minoti, chiqindilarni qayta ishlash tizimlari va ishlab chiqarish maydonlari ham barqaror ishlab chiqarish jarayonini ta’minlaydi. Jihozlar va texnik infratuzilmani to‘g‘ri tashkil etish orqali ishlab chiqarishning samaradorligi, xavfsizligi va sifatini oshirish mumkin. Ularning doimiy holatini nazorat qilish, texnik xizmat va ta’mirlash ishlarini vaqtida amalga oshirish ham muhim.",
    "Dori vositalarini davlat ro‘yxatidan o‘tkazish jarayonlarini boshqarish dori vositalarining xavfsizligi va samaradorligini ta’minlashda muhim rol o‘ynaydi. Dori vositalarini ro‘yxatga olish jarayoni ishlab chiqaruvchidan bozorga chiqishdan oldin mahsulotning barcha jihatlarini, jumladan, sifat nazorati, klinik sinovlar, xavfsizlikni va samaradorlikni tekshirishni talab qiladi. Ro‘yxatga olish jarayoni barcha qonuniy talablarga javob berishini va dori vositasining bozor uchun zarur xavfsizlik va samaradorlik standartlariga javob berishini ta’minlaydi. Davlat ro‘yxatidan o‘tkazish jarayoni dori vositasining qaysi tartibda va qanday shartlarda ishlab chiqarilishi va tarqatilishi mumkinligini belgilaydi. Dori vositasining ro‘yxatdan o‘tishi uning xalqaro bozorga kirishi va bemorlar uchun xavfsiz foydalanishni ta’minlash uchun zarurdir. Bu jarayonni to‘g‘ri va o‘z vaqtida amalga oshirish mahsulotning muvaffaqiyatli tarqatilishini va bozorga chiqishini ta’minlaydi.",
  ],
  img: [
    "./img/Clip-path-group-2.svg",
    "./img/Clip-path-group-1.svg",
    "./img/Clip-path-group.svg",
    "./img/Clip-path-group-3.svg",
  ],
};

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function showSlide(index) {
  const carouselInner = document.querySelector(".carousel-inner");
  const offset = -index * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Avtomatik aylanish
setInterval(nextSlide, 5000);

const contactBox = document.getElementById("contactBox");
const contactButton = document.querySelector(".contact-short-link");

// "Bog‘lanish" tugmasini bosganda ochish
contactButton.addEventListener("click", () => {
  contactBox.style.display = "block";
  document.body.style.overflow = "hidden";
});

// Ekranning istalgan joyiga bosganda yopish
window.addEventListener("click", (e) => {
  if (e.target === contactBox) {
    contactBox.style.display = "none";
    document.body.style.overflow = "";
  }
});

const infoButtons = document.querySelectorAll(".path-item");
const infoBox = document.querySelector(".pathFixed-out");
const pathFixedTitle = document.querySelector(".pathFixed-title");
const pathFixedText = document.querySelector(".pathFixed-text");
const pathFixedImg = document.querySelector(".pathFixed-up");

infoButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    // console.log(`Bosilgan element index: ${index}`);
    infoBox.style.display = "block";
    document.body.style.overflow = "hidden";

    pathFixedTitle.innerHTML = data.pathFixedTitle[index];
    pathFixedText.innerHTML = data.pathFixedText[index];
    pathFixedImg.style.backgroundImage = `url(${data.img[index]})`;

    console.log(pathFixedImg.style.backgroundImage);
    // console.log(`url(${data.img[index]})`);
  });
});

window.addEventListener("click", (e) => {
  if (e.target === infoBox) {
    infoBox.style.display = "none";
    document.body.style.overflow = "";
  }
});

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
    "./img/Flux_Dev_A_modern_pharmaceutical_facility_under_construction_d_1.jpg",
    "./img/Flux_Dev_A_logistics_truck_arrives_at_a_modern_pharmaceutical__3.jpg",
    "./img/Flux_Dev_Inside_a_sterile_welllit_cleanroom_technicians_in_ful_2.jpg",
    "./img/Clip path group.jpg",
  ],
};

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;
const carouselInner = document.querySelector(".carousel-inner");

let slideInterval = setInterval(nextSlide, 5000); // Avtomatik aylanish intervali

function showSlide(index) {
  const offset = -index * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

// Intervalni yangilash funksiyasi
function resetInterval() {
  clearInterval(slideInterval); // Eski intervalni to‘xtatish
  slideInterval = setInterval(nextSlide, 5000); // Yangi intervalni boshlash
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
  resetInterval(); // Har safar o'tkazishda vaqtni yangilash
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
  resetInterval(); // Har safar o'tkazishda vaqtni yangilash
}

// Funksiyalarni global qilish (HTML da `onclick` ishlashi uchun)
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;

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

let hamburger = document.querySelector(".headerup-second-hamburgerMenu");
let nav = document.querySelector(".headerup-second-navbar")

hamburger.addEventListener("click", () => {
  nav.classList.toggle("headerup-second-navbar-active")
  hamburger.classList.toggle("active")
});



// data

// AIzaSyDrGZ6slE-EuG78m_KKjlBUNI2oz50So2A

const SPREADSHEET_ID = "1n9vdGQx7uvnJKqgvNrE4cf-l0mBDCaL8_KEPp6cn1FU";
const API_KEY = "AIzaSyDrGZ6slE-EuG78m_KKjlBUNI2oz50So2A";
const SHEET_NAME = "Sheet1"; // Sahifa nomi (o'zgartirishingiz mumkin)

const newsImg = document.querySelectorAll(".news-item-img");
const newsTitle = document.querySelectorAll(".news-item-title");
const newsText = document.querySelectorAll(".news-item-subtitle");
const newsDate = document.querySelectorAll(".news-item-date");
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

let formattedData;
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const values = data.values;
    if (!values || values.length < 2) {
      console.error("Yetarli ma'lumot yo'q!");
      return;
    }

    const headers = values[0]; // Birinchi qatorni array nomi sifatida olish
    const lastFourRows = values.slice(-4); // Oxirgi 4 ta qatorni olish

    formattedData = lastFourRows.map((row) => {
      let obj = {};
      row.forEach((value, index) => {
        obj[headers[index]] = value || ""; // Agar qiymat bo‘sh bo‘lsa, uni "" qilish
      });
      return obj;
    });
    console.log(newsImg);

    formattedData.reverse().forEach((e, i) => {
      newsImg[i].src = e.img;
      newsTitle[i].innerHTML = e.title;
      newsText[i].innerHTML = e.text;
      newsDate[i].innerHTML = e.date;
    });
  })
  .catch((error) => console.error("Xatolik:", error));


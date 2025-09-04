// Script untuk tab jadwal
    const tabs = document.querySelectorAll('.tab');
    const tables = document.querySelectorAll('.jadwal-table');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tables.forEach(table => table.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.day).classList.add('active');
      });
    });

    // Script untuk navbar mobile
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
    
    //scrip reveal untuk animasi scrol
    window.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  
  const texts = ["Kelas 8D", "8D Hebat 💪"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[count];
  
  if (isDeleting) {
    // hapus huruf
    index--;
  } else {
    // tambah huruf
    index++;
  }
  
  document.getElementById("typing").textContent = currentText.slice(0, index);
  
  // kalau sudah selesai ngetik
  if (!isDeleting && index === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1500); // jeda sebelum hapus
    return;
  }
  
  // kalau sudah selesai hapus
  if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length; // lanjut ke kata berikutnya
  }
  
  setTimeout(type, isDeleting ? 80 : 150); // kecepatan hapus/ketik
}

type();

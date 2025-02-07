function changeCategory() {
    const selectedCategory = document.getElementById('avatar-select').value.toLowerCase();
    document.querySelectorAll('.clothing-options > div').forEach(div => {
        div.style.display = 'none';
    });
    document.querySelector(`.${selectedCategory}`).style.display = 'flex';
}

function selectLayer(layerId, src) {
    const layer = document.getElementById(layerId);
    layer.src = src;
}

function downloadAvatar() {
    const avatar = document.getElementById('avatar');
    const originalWidth = avatar.style.width; // Зберігаємо початковий розмір
    const originalHeight = avatar.style.height;
  
    // Збільшуємо розмір елемента до 900x900 пікселів
    avatar.style.width = '900px';
    avatar.style.height = '900px';
  
    // Використовуємо html2canvas для створення зображення
    html2canvas(avatar, {
      scale: 1, // Масштабування 1:1
      logging: true,
      useCORS: true, // Дозволяє завантажувати зображення з інших джерел
    }).then((canvas) => {
      // Повертаємо початковий розмір елемента
      avatar.style.width = originalWidth;
      avatar.style.height = originalHeight;
  
      // Створюємо посилання для скачування
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png'); // Формат зображення
      link.download = 'avatar.png'; // Назва файлу
      link.click(); // Запускаємо скачування
    });
  }

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});
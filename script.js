// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// Для создания элементов интерфейса используйте HTML.
// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

// Массив URL изображений
const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
];

// Переменные для хранения текущего индекса и элементов интерфейса
let currentIndex = 0;
const currentImage = document.getElementById("current-image");
const indicatorsContainer = document.querySelector(".indicators");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Функция для обновления текущего изображения и активного индикатора
function updateImage() {
  // Устанавливаем текущий URL изображения
  currentImage.src = images[currentIndex];
  // Обновляем активный индикатор
  document.querySelectorAll(".indicators div").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

// Функция для перехода к следующему изображению
function nextImage() {
  // Увеличиваем индекс с проверкой цикличности
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

// Функция для перехода к предыдущему изображению
function prevImage() {
  // Уменьшаем индекс с проверкой цикличности
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

// Функция для перехода к выбранному изображению по индикатору
function goToImage(index) {
  currentIndex = index;
  updateImage();
}

// Создание навигационных точек (индикаторов)
images.forEach((image, index) => {
  const indicator = document.createElement("div");
  indicator.addEventListener("click", () => goToImage(index));
  indicatorsContainer.appendChild(indicator);
});

// Привязка событий к кнопкам
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

// Инициализация слайдера с первым изображением
updateImage();

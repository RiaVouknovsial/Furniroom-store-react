import React, { useEffect, useRef } from 'react';
import './Main.css';

// Імпортуємо зображення
import photo1 from '../../images/Photo1.jpg';
import photo2 from '../../images/Photo2.jpg';
import photo3 from '../../images/Photo3.jpg';

function Main() {
    const slides = [photo1, photo2, photo3]; // Масив зображень
    const carouselRef = useRef(null); // Ссилка на контейнер слайдів

    useEffect(() => {
        const carousel = carouselRef.current;

        let scrollAmount = 0; // Зміщення контейнера
        const singleSlideWidth = carousel.firstElementChild.offsetWidth; // Ширина одного слайда
        let isPaused = false; // Флаг для зупинки
        let timeout; // Змінна для таймера зупинки

        const moveCarousel = () => {
            if (!isPaused) {
                scrollAmount += 1;

                // Якщо пройдено повний слайд
                if (scrollAmount >= singleSlideWidth) {
                    scrollAmount = 0;
                    carousel.appendChild(carousel.firstElementChild); // Переміщуємо перший слайд в кінець
                    isPaused = true; // Зупиняємо рух
                    carousel.style.transition = 'none'; // Вимикаємо перехід для плавного зміщення

                    // Пауза на 2 секунди
                    timeout = setTimeout(() => {
                        isPaused = false; // Знімаємо паузу
                        carousel.style.transition = 'transform 1s linear'; // Вмикаємо плавний перехід
                    }, 2000); // 2 секунди
                }

                // Рухаємо карусель
                carousel.style.transform = `translateX(-${scrollAmount}px)`;
            }
        };

        const interval = setInterval(moveCarousel, 10); // Маленький інтервал для руху

        return () => {
            clearInterval(interval); // Очистка інтервалу
            clearTimeout(timeout); // Очистка таймера
        };
    }, []);

    return (
        <div className="carousel-background">
            <div className="carousel-slides" ref={carouselRef}>
                {/* Генеруємо слайди */}
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide} alt={`Slide ${index + 1}`} className="carousel-photo" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;

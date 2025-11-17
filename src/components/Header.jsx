import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/src/assets/lottie/n4Ca9ap4u7.json';

import Button from './Button';

function LottieComponent() {
  const options = {
    loop: true, // Анимация будет повторяться
    autoplay: true, // Автоматический старт анимации
    animationData: animationData, // Ваш JSON-файл с анимацией
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Обрезка или сохранение пропорций
    },
  };

  return (
    <div className="w-[full] h-[400px]">
      <Lottie options={options} className="w-full h-full object-cover" />
    </div>
  );
}

export default function Header() {
  return (
    <header
      id="header"
      className="max-w-6xl m-auto px-4 sm:px-6 flex-col-reverse flex sm:grid sm:grid-cols-2 sm:py-20 pb-10 mt-[60px] sm:mt-[70px] scroll-m-[60px] sm:scroll-m-[70px]">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-900 pb-3 sm:pb-6">
          Привет, я Анастасия — фронтенд-разработчик
        </h1>
        <p className="text-sm sm:text-base md:text-lg pb-4 sm:pb-8">
          Создаю быстрые и интерактивные сайты, которые стабильно работают во
          всех браузерах и на любых устройствах.
        </p>
        <p className="text-sm sm:text-base md:text-lg font-semibold pb-2 sm:pb-4">
          Готовы обсудить проект?{' '}
        </p>
        {/* <a href="#Контакты"> */}
        <Button
          isActive={true}
          onClick={() =>
            document
              .getElementById('Контакты')
              .scrollIntoView({ behavior: 'smooth' })
          }>
          Свяжитесь со мной
        </Button>
        {/* </a> */}
      </div>
      <div className="-mt-10 -ml-4 -mr-6 sm:-ml-0 sm:-mr-0">
        <LottieComponent />
      </div>
    </header>
  );
}

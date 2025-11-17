import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const clients = [
  {
    name: 'заказчик',
    text: 'Cпасибо Анастасии за проделанную работу! Она выполнила задачу качественно, аккуратно и в срок. Всегда на связи, все пожелания и доработки учтены и сделаны качественно. Цена за работу более чем адекватная. Рекомендую этого специалиста как ответственного и порядочного исполнителя. Обязательно обращусь снова, если понадобится помощь в подобных задачах. Спасибо большое!',
    link: 'https://www.fl.ru/users/anachebotova/opinions/?sort=1&period=&author=0#op_head',
  },
  {
    name: 'Максим Вихрев',
    text: 'Всё прекрасно, работой очень доволен: адаптивность, производительность, чистота кода – всё на высоте. Спасибо за результат!',
    link: 'https://freelance.habr.com/freelancers/anastasia-chebotova/opinions',
  },
  {
    name: 'заказчик',
    text: 'С Анастасией было просто работать в течении всего проекта. С новыми задачами с которыми сталкивалась, решала без усложнений. На этапе оценки техническое задание изучила не посредственно, в ходе работы было видно, что предмет задачи хорошо понимает. Терпелива, спокойна, аккуратная в коде. Время работы чувствует хорошо, сроки не затягивает. В целом было приятно работать с ответственным и заинтересованным человеком.',
    link: 'https://www.fl.ru/users/anachebotova/opinions/?sort=1&period=&author=0#op_head',
  },
];

function Card({ name, text, link }) {
  return (
    <div className="pb-4 max-w-2xl m-auto">
      <div>
        <h2 className="pb-2 text-base sm:text-lg md:text-xl font-medium ">
          {name}
        </h2>
        <p className="pb-2 text-sm sm:text-base md:text-lg">{text}</p>
      </div>
      <a
        href={`${link}`}
        target="_blank"
        className="flex justify-end"
        aria-label="Ссылка на отзыв">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-sky-800 hover:text-sky-600">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </div>
  );
}

export default function Testi() {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  //   useEffect(() => {
  //     if (swiperRef.current) {
  //       swiperRef.current.swiper.params.navigation.prevEl = prevButtonRef.current;
  //       swiperRef.current.swiper.params.navigation.nextEl = nextButtonRef.current;
  //       swiperRef.current.swiper.update();
  //     }
  //   }, []);

  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevButtonRef.current;
      swiper.params.navigation.nextEl = nextButtonRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef.current, prevButtonRef.current, nextButtonRef.current]);

  return (
    <section
      id="Отзывы"
      className="scroll-mt-[90px] max-w-6xl m-auto px-4 sm:px-6 sm:pb-20 pb-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center pb-6 sm:pb-10 text-sky-900">
        Отзывы
      </h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        loop={true}
        onSwiper={(swiper) => console.log('slide change')}
        onSlideChange={() => console.log('slide change')}>
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <Card name={client.name} text={client.text} link={client.link} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 justify-end sm:gap-4">
        <button
          aria-label="Предидущий отзыв"
          ref={prevButtonRef}
          className="cursor-pointer p-2 sm:p-4 border border-sky-800 rounded-full hover:bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-sky-800">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          aria-label="Следующий отзыв"
          ref={nextButtonRef}
          className="cursor-pointer p-2 sm:p-4 border border-sky-800 rounded-full hover:bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-sky-800">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

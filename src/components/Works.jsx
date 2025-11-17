import { useState } from 'react';
import Button from './Button';

const projects = [
  {
    image: 'norrcollective.png',
    title: 'NorrCollective',
    text: 'Многостраничный адаптивный интернет магазин, со страницами категорий и товаров, модальным окном регистрации, корзиной с сохранением в localStorage и многоступенчатым чекаутом',
    tags: ['React', 'Tailwind', 'Next.js', 'TypeScript', 'Framer Motion'],
    categories: ['Многостраничные'],
    code: 'https://github.com/anastasiacheb/NorrCollective',
    site: 'https://norrcollective.vercel.app',
  },
  {
    image: 'arkitect.png',
    title: 'Arkitect',
    text: 'Многостраничный адаптивный сайт с параллакс-эффектами, скролл-анимациями, страницами проектов и кастомной страницей 404.',
    tags: ['React', 'Tailwind', 'Next.js', 'Framer Motion'],
    categories: ['Многостраничные'],
    code: 'https://github.com/anastasiacheb/arkitect',
    site: 'https://arkitect.vercel.app',
  },
  {
    image: 'quitchen.png',
    title: 'Quitchen',
    text: 'Многостраничный адаптивный PWA c анимированными переходами между страницами.',
    tags: [
      'React',
      'Tailwind',
      'React Router',
      'Vite',
      'Framer Motion',
      'Vite PWA',
    ],
    categories: ['Многостраничные'],
    code: 'https://github.com/anastasiacheb/quitchen',
    site: 'https://quitchen.vercel.app',
  },
  {
    image: 'neuros.png',
    title: 'Neuros',
    text: 'Адаптивный двухстраничный лендинг с редактированием контента через headless CMS. Темная тема меняется по системным настройкам.',
    tags: ['React', 'Tailwind', 'Next.js', 'TypeScript', 'Sanity'],
    categories: ['Одностраничные'],
    code: 'https://github.com/anastasiacheb/neuros_',
    site: 'https://neuros-three.vercel.app',
  },
  {
    image: 'sigma.png',
    title: 'Sigma',
    text: 'Одностраничный адаптивный лендинг',
    tags: ['React', 'Tailwind', 'Next.js'],
    categories: ['Одностраничные'],
    code: 'https://github.com/anastasiacheb/sigma',
    site: 'https://sigma-gray-five.vercel.app',
  },
  {
    image: 'MWM.png',
    title: 'MWM',
    text: 'Многостраничный адаптивный сайт',
    tags: ['HTML', 'Tailwind', 'JavaScript', 'Swiper'],
    categories: ['Одностраничные'],
    code: 'https://github.com/anastasiacheb/mwm',
    site: 'https://mwm-jet.vercel.app',
  },
  {
    image: 'sphere.png',
    title: 'Sphere Career',
    text: 'Одностраничный адаптивный лендинг с аккордеоном и слайдером.',
    tags: ['HTML', 'Tailwind', 'JavaScript', 'Swiper'],
    categories: ['Одностраничные'],
    code: 'https://github.com/anastasiacheb/sphere',
    site: 'https://anastasiacheb.github.io/sphere/',
  },

  {
    image: 'hurix.png',
    title: 'Hurix',
    text: 'Одностраничный лендинг с адаптивным дизайном, эффектами появления при скролле и автоматическим бесконечным слайдером.',
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Vite', 'Swiper'],
    categories: ['Одностраничные'],
    code: 'https://github.com/anastasiacheb/hurix',
    site: 'https://anastasiacheb.github.io/hurix/',
  },
  // {
  //   image: 'petal.png',
  //   title: 'Petal perfection',
  //   text: 'Адаптивный интернет-магазин с анимацией при скролле, страницами товаров и категорий. Возможность добавлять разное количество товаров в корзину, с сохранением данных в local storage.',
  //   tags: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
  //   categories: ['Многостраничные', 'Интернет магазины'],
  //   code: 'https://github.com/anastasiacheb/petal_perfection',
  //   site: 'https://anastasiacheb.github.io/petal_perfection/',
  // },
  // {
  //   image: 'cowork.png',
  //   title: 'Cowork',
  //   text: 'Многостраничный адаптивный сайт с эффектом появления при скролле, аккордеоном и фильтрацией статей по тегам. Включает кнопку для возврата наверх.',
  //   tags: ['HTML', 'CSS', 'JavaScript'],
  //   categories: ['Многостраничные'],
  //   code: 'https://github.com/anastasiacheb/cowork',
  //   site: 'https://anastasiacheb.github.io/cowork/',
  // },
  // {
  //   image: 'positivus.png',
  //   title: 'Positivus',
  //   text: 'Одностраничный адаптивный лендинг с аккордеоном и слайдером.',
  //   tags: ['HTML', 'CSS', 'JavaScript'],
  //   categories: ['Одностраничные'],
  //   code: 'https://github.com/anastasiacheb/positivus',
  //   site: 'https://anastasiacheb.github.io/positivus/',
  // },
  // {
  //   image: 'zebb.png',
  //   title: 'Zebb',
  //   text: 'Одностраничный лендинг с адаптивным дизайном и бесконечным слайдером.',
  //   tags: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
  //   categories: ['Одностраничные'],
  //   code: 'https://github.com/anastasiacheb/zebb',
  //   site: 'https://anastasiacheb.github.io/zebb/',
  // },
];

function Card({ image, title, text, tags, code, site }) {
  return (
    <div className="border border-slate-300 rounded-2xl flex flex-col gap-2 pb-4 justify-between">
      <div className="flex flex-col gap-2">
        <img
          className="rounded-2xl"
          src={`/assets/images/${image}`}
          alt="image"
        />
        <h2 className="text-base sm:text-lg md:text-xl font-medium px-4 pt-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg px-4">{text}</p>
        <div className="flex gap-1 flex-wrap px-4">
          {tags.map((tag) => (
            <p key={tag} className="text-sm bg-sky-200 w-fit px-2 rounded-full">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-4 px-4 items-center justify-end">
        <a
          href={code}
          target="_blank"
          className="cursor-pointer"
          aria-label="Ссылка на GitHub">
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
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </a>
        <a
          href={site}
          target="_blank"
          className="cursor-pointer"
          aria-label="Ссылка на сайт">
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
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Works() {
  const [activeTag, setActiveTag] = useState('Все');

  const tags = [
    'Все',
    'Одностраничные',
    'Многостраничные',
    'Интернет магазины',
  ];

  const filteredProjects =
    activeTag === 'Все'
      ? projects
      : projects.filter((project) => project.categories.includes(activeTag));

  return (
    <section
      id="Работы"
      className="scroll-mt-[90px] max-w-6xl m-auto px-4 sm:px-6 sm:pb-20 pb-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center pb-6 sm:pb-10 text-sky-900">
        Мои работы
      </h2>
      {/* <div className="flex gap-4 justify-center items-center flex-wrap pb-4 sm:pb-8">
        {tags.map((tag) => (
          <Button
            key={tag}
            tag={tag}
            isActive={activeTag === tag}
            onClick={() => setActiveTag(tag)}>
            {tag}
          </Button>
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.title}
            image={project.image}
            title={project.title}
            text={project.text}
            tags={project.tags}
            code={project.code}
            site={project.site}
          />
        ))}
      </div>
    </section>
  );
}

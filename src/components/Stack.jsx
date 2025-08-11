export default function Stack() {
  return (
    <section
      id="Навыки"
      className="scroll-mt-[90px] max-w-6xl m-auto px-4 sm:pb-20 pb-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center pb-6 sm:pb-10 text-sky-900">
        Навыки и подход к работе
      </h2>
      <div className="pb-4 sm:pb-8">
        {/* <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-center text-sky-800">
          Стек
        </h3> */}
        <div className="flex gap-6 justify-center flex-wrap">
          <div className="flex flex-col gap-1 items-center">
            <img
              src="/assets/icons/icons8-html-48.svg"
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
            <p className="text-sm sm:text-base md:text-lg">HTML</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <img
              src="/assets/icons/icons8-css3-48.svg"
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
            <p className="text-sm sm:text-base md:text-lg">CSS</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <img
              src="/assets/icons/icons8-sass-48.svg"
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
            <p className="text-sm sm:text-base md:text-lg">SCSS</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <img
              src="/assets/icons/icons8-tailwindcss-48.svg"
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
            <p className="text-sm sm:text-base md:text-lg">Tailwind</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <img
              src="/assets/icons/icons8-javascript-48.svg"
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
            <p className="text-sm sm:text-base md:text-lg">JavaScript</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <img
              src="/assets/icons/icons8-react-native.svg"
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
            <p className="text-sm sm:text-base md:text-lg">React</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <img
              src="/assets/icons/icons8-vite-48.svg"
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
            <p className="text-sm sm:text-base md:text-lg">Vite</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <img
              src="/assets/icons/icons8-typescript.svg"
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
            <p className="text-sm sm:text-base md:text-lg">TypeScript</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <img
              src="/assets/icons/icons8-next.svg"
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
            <p className="text-sm sm:text-base md:text-lg">Next.js</p>
          </div>
        </div>
      </div>
      <div>
        {/* <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-center text-sky-900">
          Принципы работы
        </h3> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 border border-neutralBorder rounded-2xl sm:p-6 flex flex-col gap-2">
            <img
              src="/assets/icons/quality.svg"
              alt="icon"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(22%) sepia(82%) saturate(1058%) hue-rotate(171deg) brightness(102%) contrast(95%)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center">
              Качество кода
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Строгое внимание к структуре, читаемости и поддерживаемости кода.
            </p>
          </div>
          <div className="p-4 border border-neutralBorder rounded-2xl sm:p-6 flex flex-col gap-2">
            <img
              src="/assets/icons/fast.svg"
              alt="icon"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(22%) sepia(82%) saturate(1058%) hue-rotate(171deg) brightness(102%) contrast(95%)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center">
              Производительность
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Оптимизация кода и ресурсов для быстрой загрузки сайта и
              комфортного пользовательского опыта.
            </p>
          </div>
          <div className="p-4 border border-neutralBorder rounded-2xl sm:p-6 flex flex-col gap-2">
            <img
              src="/assets/icons/browsers.svg"
              alt="icon"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(22%) sepia(82%) saturate(1058%) hue-rotate(171deg) brightness(102%) contrast(95%)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center">
              Кроссбраузерность
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Обеспечение корректной работы сайта во всех популярных браузерах.
            </p>
          </div>
          <div className="p-4 border border-neutralBorder rounded-2xl sm:p-6 flex flex-col gap-2">
            <img
              src="/assets/icons/adaptive.svg"
              alt="icon"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(22%) sepia(82%) saturate(1058%) hue-rotate(171deg) brightness(102%) contrast(95%)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center">
              Адаптивность
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Создание интерфейсов, которые отлично выглядят и работают на всех
              устройствах и экранах.
            </p>
          </div>
          <div className="p-4 border border-neutralBorder rounded-2xl sm:p-6 flex flex-col gap-2">
            <img
              src="/assets/icons/actual.svg"
              alt="icon"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(22%) sepia(82%) saturate(1058%) hue-rotate(171deg) brightness(102%) contrast(95%)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center">
              Актуальность технологий
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Постоянное обновление знаний о новых веб-технологиях и внедрение
              их в проекты.
            </p>
          </div>
          <div className="p-4 border border-neutralBorder rounded-2xl sm:p-6 flex flex-col gap-2">
            <img
              src="/assets/icons/SEO.svg"
              alt="icon"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(22%) sepia(82%) saturate(1058%) hue-rotate(171deg) brightness(102%) contrast(95%)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center">
              SEO-оптимизация
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Разработка с учетом SEO-стандартов для улучшения видимости вашего
              сайта в поисковых системах.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

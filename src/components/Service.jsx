export default function Service() {
  return (
    <section
      id="Услуги"
      className="max-w-6xl m-auto px-4 sm:px-6 sm:pb-20 pb-10 scroll-mt-[90px]">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center pb-6 sm:pb-10 text-sky-900">
        Услуги
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-3">
        <div className="pb-4 border-b border-primary sm:pb-6 lg:pb-0 lg:border-b-0 lg:pr-6 lg:border-r">
          <h3 className="text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center pb-2 sm:pb-4">
            <img
              src="/assets/icons/front.svg"
              alt="icon"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(15%) sepia(9%) saturate(6151%) hue-rotate(168deg) brightness(100%) contrast(98%)',
              }}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            Верстка по дизайну
          </h3>
          <p className="text-sm sm:text-base md:text-lg">
            Выполняю адаптивную верстку с точным соответствием макету,
            гарантирую скорость загрузки от 90-95, а также работу во всех
            популярных браузерах и на всех устройствах.
          </p>
        </div>
        <div className="py-4 border-b border-primary sm:py-6 lg:py-0 lg:px-6 lg:border-b-0 lg:border-r">
          <h3 className="text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center pb-2 sm:pb-4">
            <img
              src="/assets/icons/api.svg"
              alt="icon"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(15%) sepia(9%) saturate(6151%) hue-rotate(168deg) brightness(100%) contrast(98%)',
              }}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            Разработка функционала
          </h3>
          <p className="text-sm sm:text-base md:text-lg">
            Реализую логику калькулятов, корзин, checkout-процессов, форм с
            валидацией, добавляю сортировку и фильтрацию данных.
          </p>
        </div>
        <div className="pt-4 sm:pt-6 lg:pt-0 lg:pl-6">
          <h3 className="text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center pb-2 sm:pb-4">
            <img
              src="/assets/icons/publish.svg"
              alt="icon"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(15%) sepia(9%) saturate(6151%) hue-rotate(168deg) brightness(100%) contrast(98%)',
              }}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            Интеграции и настройка
          </h3>
          <p className="text-sm sm:text-base md:text-lg">
            Настраиваю сбор данных из форм, подключаю CMS (Sanity или
            Wordpress), backend и внешние API, аналитику, публикую сайт на
            хостинге.
          </p>
        </div>
      </div>
    </section>
  );
}

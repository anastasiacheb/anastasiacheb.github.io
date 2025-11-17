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
          <div className="flex flex-col gap-1 items-center">
            <svg
              className="w-14 h-14 sm:w-20 sm:h-20"
              width="172"
              height="138"
              viewBox="0 0 172 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M166.467 91.1548L160.09 80.3741L129.251 98.6238L163.508 56.2524L168.687 53.3048L167.407 51.4375L169.756 48.5251L158.951 39.776L153.995 45.9062L54.1503 102.652L91.0726 59.5289L159.832 22.912L153.303 10.6398L115.852 30.5807L134.29 9.04267L123.72 0L82.2178 48.4898L40.9856 70.4389L72.5527 29.9113L92.3292 19.9174L86.058 7.50424L28.4198 36.6522L44.1447 16.453L33.1643 7.91527L0 50.545L0.516727 50.956L6.70567 63.2047L43.487 44.6144L9.97042 87.6434L15.4547 91.9181L18.7195 98.0484L57.4386 77.4381L14.8088 127.243L25.3664 136.274L27.4921 133.796L130.344 75.1598L96.1929 117.402L96.7566 117.86L96.6979 117.884L103.779 129.85L149.192 102.981L131.706 130.391L143.426 137.86L171.271 94.2199L166.467 91.1548Z"
                fill="#0B0B0B"
              />
            </svg>
            <p className="text-sm sm:text-base md:text-lg">Sanity</p>
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
              Чистая структура, понятные и поддерживаемый код
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
              Оптимизация кода и ресурсов для быстрой загрузки сайта (pagespeed
              от 90-95).
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
              Корректная работа во всех популярных браузерах
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
              Удобство использования на любых устройствах
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
              Использование современного и обновляемого стека.
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
              Разработка с соблюдением всех SEO-стандартов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

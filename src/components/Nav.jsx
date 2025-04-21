import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
      document.body.style.height = '100%';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.height = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.height = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();

    if (isMenuOpen) {
      document.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      document.removeEventListener('touchmove', preventScroll);
    }

    return () => {
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [isMenuOpen]);

  return (
    <nav className="border-b border-slate-300 fixed w-full bg-slate-50 top-0 z-50">
      <div className="max-w-6xl m-auto px-4 sm:px-6 flex items-center justify-between py-4 relative z-50 bg-slate-50">
        <Link
          smooth
          to="#header"
          className="text-lg sm:text-xl md:text-2xl font-bold text-sky-900">
          &lt;AC /&gt;
        </Link>
        <div className="gap-8 hidden sm:flex">
          <Link
            smooth
            to="#Услуги"
            className="text-sm sm:text-base md:text-lg hover:border-sky-900 border-slate-50 border-b-2 py-1">
            Услуги
          </Link>
          <Link
            smooth
            to="#Навыки"
            className="text-sm sm:text-base md:text-lg hover:border-sky-900 border-slate-50 border-b-2 py-1">
            Навыки
          </Link>
          <Link
            smooth
            to="#Работы"
            className="text-sm sm:text-base md:text-lg hover:border-sky-900 border-slate-50 border-b-2 py-1">
            Работы
          </Link>
          <Link
            smooth
            to="#Отзывы"
            className="text-sm sm:text-base md:text-lg hover:border-sky-900 border-slate-50 border-b-2 py-1">
            Отзывы
          </Link>
          <Link
            smooth
            to="#Контакты"
            className="text-sm sm:text-base md:text-lg hover:border-sky-900 border-slate-50 border-b-2 py-1">
            Контакты
          </Link>
        </div>
        <button
          aria-label="Открыть или закрыть мобильное меню"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer sm:hidden">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-sky-900">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        // style={{
        //   transform: isMenuOpen ? 'translateY(61px)' : 'translateY(-100dvh)',
        // }}
        className={`transition-all ease-linear duration-300 gap-8 flex sm:hidden absolute flex-col bg-slate-50  w-full h-[calc(100dvh-61px)] p-6 ${isMenuOpen ? 'top-[61px]' : '-top-[100dvh]'}`}>
        <a
          onClick={() => setIsMenuOpen(false)}
          href="#Услуги"
          className="text-2xl font-semibold">
          Услуги
        </a>
        <a
          onClick={() => setIsMenuOpen(false)}
          href="#Навыки"
          className="text-2xl font-semibold">
          Навыки
        </a>
        <a
          onClick={() => setIsMenuOpen(false)}
          href="#Работы"
          className="text-2xl font-semibold">
          Работы
        </a>
        <a
          onClick={() => setIsMenuOpen(false)}
          href="#Отзывы"
          className="text-2xl font-semibold">
          Отзывы
        </a>
        <a
          onClick={() => setIsMenuOpen(false)}
          href="#Контакты"
          className="text-2xl font-semibold">
          Контакты
        </a>
      </div>
    </nav>
  );
}

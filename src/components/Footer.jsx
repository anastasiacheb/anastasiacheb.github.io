import Button from './Button';

export default function Footer() {
  return (
    <footer
      id="Контакты"
      className="max-w-6xl m-auto px-4 sm:px-6 flex justify-between items-end sm:pb-20 pb-10">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-sky-900 pb-3 sm:pb-6">
          Свяжитесь со мной
        </h2>
        <p className="text-sm sm:text-base md:text-lg pb-4 sm:pb-8 max-w-xl">
          Готовы обсудить проект или есть вопросы? <br /> Напишите мне в
          Telegram, и я с радостью помогу вам реализовать идеи!
        </p>
        <p className="text-sm sm:text-base md:text-lg font-semibold pb-2 sm:pb-4">
          @nascheb
        </p>
        <Button
          isActive={true}
          onClick={() => window.open('https://t.me/nascheb', '_blank')}>
          Написать в Telegram
        </Button>
      </div>
      <div className="hidden md:block">
        <img src="/src/assets/images/frame.png" alt="icon" className="w-3xs" />
      </div>
    </footer>
  );
}

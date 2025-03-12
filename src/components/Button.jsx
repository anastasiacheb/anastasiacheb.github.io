export default function Button({ children, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`transition-colors font-medium rounded-r-full w-fit rounded-l-full cursor-pointer text-sm sm:text-base md:text-lg px-6 py-3 rounded-lg border-sky-800 hover:border-sky-700 border  ${isActive ? 'bg-sky-800 text-slate-50 hover:bg-sky-700 ' : ' text-sky-800 hover:bg-slate-100'}`}>
      {children}
    </button>
  );
}

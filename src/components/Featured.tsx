export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/d392ce76-af05-44c6-b254-bca8dd6165e0/files/bbfe977f-c74a-4ad7-90b3-429c3bf8484b.jpg"
          alt="Атомный ледокол Ленин в Мурманске"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600" id="history">От эксперимента к индустрии</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          1957 год: атомоход «Ленин» вышел в море и доказал, что ядерная энергия может служить миру. С тех пор Россия построила крупнейший атомный ледокольный флот на планете.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl font-bold text-neutral-900">1957</span>
            <p className="text-neutral-600 pt-1">«Ленин» — первый в мире атомный надводный корабль</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl font-bold text-neutral-900">1977</span>
            <p className="text-neutral-600 pt-1">«Арктика» достигает Северного полюса — впервые в истории</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl font-bold text-neutral-900">2022</span>
            <p className="text-neutral-600 pt-1">«Сибирь» и «Урал» проекта 22220 — самые мощные ледоколы в мире</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать историю
        </button>
      </div>
    </div>
  );
}
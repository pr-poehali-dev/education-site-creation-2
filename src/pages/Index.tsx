import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "profile" | "exams";

const HSELogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
      <span className="text-[#0050A0] font-black text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Л
      </span>
    </div>
    <span className="text-white font-bold text-base tracking-wide" style={{ fontFamily: "Montserrat, sans-serif" }}>
      ЛИЦЕЙ НИУ ВШЭ
    </span>
  </div>
);

export default function Index() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
      {/* NAVBAR */}
      <nav className="bg-[#0050A0] shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => setPage("home")} className="cursor-pointer">
            <HSELogo />
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage("home")}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Главная
            </button>
            <button
              onClick={() => setPage("profile")}
              className="bg-[#F5A623] hover:bg-[#e09510] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-lg"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Биннатов Эмин
            </button>
          </div>
        </div>
      </nav>

      {/* PAGES */}
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "profile" && <ProfilePage setPage={setPage} />}
      {page === "exams" && <ExamsPage setPage={setPage} />}
    </div>
  );
}

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      {/* HERO */}
      <div className="relative bg-[#0050A0] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <h1
            className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Добро пожаловать в<br />
            <span className="text-[#F5A623]">Лицей НИУ ВШЭ</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
            Качество образования для вашего будущего. Начните свой путь к успеху вместе с нами.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setPage("profile")}
              className="bg-[#F5A623] hover:bg-[#e09510] text-white font-bold px-8 py-3 rounded-full text-base transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Биннатов Эмин
            </button>
            <button
              onClick={() => setPage("profile")}
              className="border-2 border-white text-white hover:bg-white hover:text-[#0050A0] font-bold px-8 py-3 rounded-full text-base transition-all"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Достижения
            </button>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: "GraduationCap",
            title: "Лицейская программа",
            desc: "Углублённые курсы по математике, физике, информатике и гуманитарным наукам.",
          },
          {
            icon: "ClipboardList",
            title: "Вступительные экзамены",
            desc: "Результаты вступительных испытаний и подача заявления.",
            action: () => setPage("exams"),
          },
          {
            icon: "Trophy",
            title: "Достижения",
            desc: "Олимпиады, конкурсы и академические успехи лицеистов.",
          },
        ].map((card, i) => (
          <div
            key={i}
            onClick={card.action}
            className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md hover:-translate-y-1 ${card.action ? "cursor-pointer" : ""}`}
          >
            <div className="w-12 h-12 bg-[#E8F0FB] rounded-xl flex items-center justify-center mb-4">
              <Icon name={card.icon} size={22} className="text-[#0050A0]" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {card.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            {card.action && (
              <button className="mt-4 text-[#0050A0] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Посмотреть результаты <Icon name="ArrowRight" size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfilePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* PROFILE HEADER */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="h-20 bg-[#0050A0]" />
        <div className="px-6 pb-6 -mt-8">
          <div className="w-16 h-16 bg-white rounded-xl border-2 border-gray-200 flex items-center justify-center shadow-sm mb-4">
            <span className="text-[#0050A0] font-black text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }}>Б</span>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Биннатов Эмин
              </h2>
              <p className="text-sm text-gray-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                Статус: Абитуриент
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">ID: 20240401</span>
              <span className="bg-[#F5A623] text-white text-xs px-3 py-1.5 rounded-full font-semibold">ПРИЁМНАЯ КОМИССИЯ 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* MENU GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            icon: "CheckCircle",
            label: "Вступительные экзамены",
            sub: "Посмотрите свои баллы по предметам и текущий прогресс вступительных испытаний.",
            link: "Посмотреть результаты",
            action: () => setPage("exams"),
            accent: true,
          },
          {
            icon: "Home",
            label: "Главная",
            sub: "Раздел лицея",
            action: () => setPage("home"),
          },
          {
            icon: "User",
            label: "Личный кабинет",
            sub: "Раздел лицея",
          },
          {
            icon: "BookOpen",
            label: "Обучающемуся",
            sub: "Материалы и расписание",
          },
          {
            icon: "Star",
            label: "Мои результаты",
            sub: "Оценки и достижения",
          },
          {
            icon: "FileText",
            label: "Документы",
            sub: "Заявления и справки",
          },
        ].map((item, i) => (
          <div
            key={i}
            onClick={item.action}
            className={`bg-white rounded-2xl border p-5 transition-all hover:shadow-md hover:-translate-y-0.5 ${item.action ? "cursor-pointer" : ""} ${item.accent ? "border-[#0050A0]/20 shadow-sm" : "border-gray-100"}`}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${item.accent ? "bg-[#0050A0]" : "bg-[#E8F0FB]"}`}>
              <Icon name={item.icon} size={20} className={item.accent ? "text-white" : "text-[#0050A0]"} />
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {item.label}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed">{item.sub}</p>
            {item.link && (
              <button className="mt-3 text-[#0050A0] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                {item.link} <Icon name="ArrowRight" size={12} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExamsPage({ setPage }: { setPage: (p: Page) => void }) {
  const subjects = [
    { name: "Математика (углублённый уровень)", score: 9, max: 10, date: "21.04.2026" },
    { name: "Русский язык", score: 8, max: 10, date: "23.04.2026" },
    { name: "Иностранный (английский) язык", score: 7, max: 10, date: "24.04.2026" },
    { name: "Информатика (углублённый уровень)", score: 8, max: 10, date: "25.04.2026" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <button
        onClick={() => setPage("profile")}
        className="flex items-center gap-2 text-[#0050A0] text-sm font-medium mb-8 hover:gap-3 transition-all"
      >
        <Icon name="ArrowLeft" size={16} />
        Назад в личный кабинет
      </button>

      <div className="space-y-4">
        {subjects.map((subj, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="GraduationCap" size={22} className="text-gray-800" />
              </div>
              <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Вступительные экзамены для поступления в 9 класс
              </h2>
            </div>

            {/* Body */}
            <div className="flex divide-x divide-gray-100">
              {/* Left */}
              <div className="flex-1 px-6 py-5 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="BookOpen" size={18} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Предмет</p>
                    <p className="text-base font-semibold text-gray-900">{subj.name}</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="CalendarDays" size={18} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Дата</p>
                    <p className="text-base font-semibold text-gray-900">{subj.date}</p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="w-52 flex-shrink-0 bg-gray-50 px-6 py-5 flex flex-col justify-center gap-5">
                <div>
                  <p className="text-xs text-gray-400 mb-1 font-medium">Ваш результат</p>
                  <p className="text-2xl font-black text-gray-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {subj.score} <span className="font-bold">баллов</span>{" "}
                    <span className="text-lg font-normal text-gray-500">из {subj.max}</span>
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-400 mb-1 font-medium">Итог</p>
                  <p className="text-xl font-bold text-green-500">зачет</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
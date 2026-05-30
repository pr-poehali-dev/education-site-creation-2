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
    { name: "Математика (углублённый уровень)", score: 9, max: 10, icon: "Calculator" },
    { name: "Русский язык", score: 8, max: 10, icon: "BookOpen" },
    { name: "Английский язык", score: 7, max: 10, icon: "Globe" },
    { name: "Информатика", score: 8, max: 10, icon: "Monitor" },
  ];

  const getColor = (score: number) => {
    if (score >= 90) return { bg: "bg-green-50", border: "border-green-200", bar: "bg-green-500", text: "text-green-700" };
    if (score >= 75) return { bg: "bg-blue-50", border: "border-blue-200", bar: "bg-blue-500", text: "text-blue-700" };
    return { bg: "bg-orange-50", border: "border-orange-200", bar: "bg-orange-500", text: "text-orange-700" };
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <button
        onClick={() => setPage("profile")}
        className="flex items-center gap-2 text-[#0050A0] text-sm font-medium mb-8 hover:gap-3 transition-all"
      >
        <Icon name="ArrowLeft" size={16} />
        Назад в личный кабинет
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#0050A0] rounded-xl flex items-center justify-center">
            <Icon name="ClipboardList" size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Вступительные экзамены
            </h1>
            <p className="text-sm text-gray-400">Приёмная кампания 2024 · Биннатов Эмин</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {subjects.map((subj, i) => {
          const c = getColor(subj.score);
          return (
            <div
              key={i}
              className={`${c.bg} ${c.border} border rounded-2xl p-5 transition-all hover:shadow-sm`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm`}>
                    <Icon name={subj.icon} size={18} className={c.text} />
                  </div>
                  <span className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {subj.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className={`text-2xl font-black ${c.text}`} style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {subj.score}
                  </span>
                  <span className="text-gray-400 text-sm font-medium"> / {subj.max}</span>
                </div>
              </div>
              <div className="w-full bg-white/70 rounded-full h-2.5">
                <div
                  className={`${c.bar} h-2.5 rounded-full transition-all duration-700`}
                  style={{ width: `${(subj.score / subj.max) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
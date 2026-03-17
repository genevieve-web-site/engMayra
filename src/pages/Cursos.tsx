import imageCourse1 from "../assets/cursoDepo/10-01.jpg";
import imageCourse2 from "../assets/cursoDepo/woman-working-as-engineer.jpg";

//imagens depoimento
import depoimento1 from "../assets/cursoDepo/depo1.jpg";
import depoimento2 from "../assets/cursoDepo/depo2.jpg";
import depoimento3 from "../assets/cursoDepo/depo3.jpg";
import depoimento4 from "../assets/cursoDepo/depo4.jpg";
import depoimento5 from "../assets/cursoDepo/depo5.jpeg";

import {
  ArrowLeft,
  BookOpen,
  Video,
  ArrowUpRight,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Cursos = () => {
  const navigate = useNavigate();

  const cursos = [
    {
      title: "Planejamento de Obras na Prática",
      description:
        "Saia da teoria e aprenda a metodologia de planejamento visual que gera previsibilidade e lucro real no canteiro.",
      modulos: [
        "Introdução",
        "O longo prazo",
        "O médio prazo",
        " O curto prazo",
        "Planejamento de fase",
        "Melhoria contínua",
        "Casos de obra",
        "Materiais de apoio",
        "Encerramento",
      ],
      image: imageCourse1,
      detailsLink: "/cursos_plan",

      buyLink:
        "https://mnengenharia25.hotmart.host/planejamento-de-obras-na-pratica-8fe32d2c-f454-44f4-b108-554178ffdf52",
      type: "Curso Completo",
      isInternal: true,
    },
    {
      title: "E-book: Guia do Planejamento",
      description:
        "O guia definitivo para engenheiros que desejam organizar seu primeiro canteiro com excelência.",
      modulos: [
        "Checklist de Início de Obra",
        "Modelos de Cronograma",
        "Dicas de Gestão de Equipe",
        "Materiais Padrão",
      ],
      image: imageCourse2,

      detailsLink: "/ebook",
      buyLink: "https://pay.kiwify.com.br/4TQvqGe",
      type: "Material Digital",
      isInternal: true,
    },
  ];

  // Array com 12 depoimentos de exemplo
  const [depoimentos, setDepoimentos] = useState([
    {
      id: 1,
      nome: "Carlos V.",
      cargo: "Engenheiro Civil",
      image: depoimento1,
    },
    {
      id: 2,
      nome: "Fernanda L.",
      cargo: "Arquiteta",
      image: depoimento2,
    },
    {
      id: 3,
      nome: "Ricardo S.",
      cargo: "Gestor de Obras",
      image: depoimento3,
    },
    {
      id: 4,
      nome: "Ana Paula",
      cargo: "Estudante de Engenharia",
      image: depoimento4,
    },
    {
      id: 5,
      nome: "João M.",
      cargo: "Técnico em Edificações",
      image: depoimento5,
    },
  ]);

  const avancarDepoimento = () => {
    setDepoimentos((prev) => [...prev.slice(1), prev[0]]);
  };

  const voltarDepoimento = () => {
    setDepoimentos((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <main className="bg-white min-h-screen font-['Poppins',_sans-serif] overflow-x-hidden">
      {/* Botão Voltar */}
      <div className="p-6 max-w-[1100px] mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft size={16} /> Voltar para Início
        </Link>
      </div>

      {/* Container Escuro Principal com bordas alternadas */}
      <section className="w-full bg-[#0a0212] rounded-tl-[80px] rounded-br-[80px] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <header className="text-center mb-16 space-y-4">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm font-sans">
              Capacitação Profissional
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tighter">
              Eleve o nível do seu <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                Gerenciamento{" "}
              </span>
              Adquira meus cursos e materiais exclusivos
            </h1>

            {/* Linha de Brilho Neon */}
            <div className="relative w-full max-w-[400px] h-[2px] mx-auto mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-[8px] opacity-70 animate-pulse"></div>
            </div>
          </header>

          {/* Cards de Cursos (Tamanho 980x390) */}
          <div className="flex flex-col gap-12">
            {cursos.map((item, index) => {
              const handleCardClick = () => {
                if (item.isInternal) {
                  navigate(item.detailsLink);
                }
              };

              const cardContent = (
                <>
                  {/* Lado Esquerdo: Módulos e Texto */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-between z-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-pink-500 text-[10px] font-bold uppercase tracking-widest">
                        {index === 0 ? (
                          <Video size={14} />
                        ) : (
                          <BookOpen size={14} />
                        )}
                        {item.type}
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-pink-400 transition-colors">
                        {item.title}
                      </h3>

                      <div className="pt-4">
                        <Link
                          to={item.detailsLink}
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors group-hover:border-pink-500 group-hover:bg-pink-500/20"
                        >
                          Conferir detalhes <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm md:text-base mt-6 max-w-[400px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Lado Direito: Imagem com Gradiente */}
                  <div className="w-full md:w-[42%] h-64 md:h-full shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a0d2b] via-transparent to-transparent z-10 hidden md:block" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                    />

                    <a
                      href={item.buyLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="absolute bottom-6 right-6 bg-white text-black font-bold px-4 py-2 rounded-full flex items-center gap-2 text-sm z-20 shadow-xl group-hover:bg-pink-500 group-hover:text-white transition-colors"
                    >
                      Comprar agora <ArrowUpRight size={16} />
                    </a>
                  </div>
                </>
              );

              return (
                <div
                  key={index}
                  onClick={handleCardClick}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleCardClick();
                    }
                  }}
                  className="group relative flex flex-col md:flex-row bg-[#1a0d2b] border border-[#2d1b4d] rounded-tl-[40px] rounded-br-[40px] overflow-hidden w-full max-w-[980px] min-h-[450px] md:h-[390px] mx-auto transition-all duration-500 hover:border-pink-500/50 cursor-pointer"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* ========================================= */}
          {/* CARROSSEL DE DEPOIMENTOS COM LOOP        */}
          {/* ========================================= */}
          <div className="mt-32 mb-10 w-full overflow-hidden relative">
            <header className="text-center mb-10">
              <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm font-sans mb-3">
                Comunidade
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                O que dizem os nossos alunos
              </h3>
            </header>

            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0a0212] to-transparent z-10 pointer-events-none mt-20"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0a0212] to-transparent z-10 pointer-events-none mt-20"></div>

            <div className="relative py-4">
              <button
                type="button"
                onClick={voltarDepoimento}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                aria-label="Voltar depoimentos"
              >
                <ArrowLeft size={18} />
              </button>

              <div className="flex w-max animate-[scroll_50s_linear_infinite] hover:[animation-play-state:paused] py-4">
                {[...depoimentos, ...depoimentos].map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="relative w-[300px] h-[340px] shrink-0 border border-[#2d1b4d] rounded-3xl mx-3 overflow-hidden hover:border-pink-500/40 transition-colors shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.nome}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#030006]/90 via-[#030006]/55 to-[#030006]/20" />

                    <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                      <div className="mt-auto pt-4">
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                          {item.nome}
                        </h4>
                        <span className="text-pink-400 text-xs font-semibold uppercase tracking-widest">
                          {item.cargo}
                        </span>
                        <div className="flex text-orange-400 mt-3">
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={avancarDepoimento}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                aria-label="Avançar depoimentos"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>
          {/* ========================================= */}
        </div>

        {/* Seção de Suporte */}
        <div className="mt-14 max-w-2xl mx-auto rounded-[28px] border border-white/10 px-6 py-8 text-center space-y-3 bg-[#1a0d2b]/50">
          <h3 className="text-xl font-bold text-gray-50 uppercase tracking-tight">
            Suporte e informações
          </h3>
          <p className="text-gray-400 text-base">
            E-mail:{" "}
            <span className="font-semibold text-white">
              suporte@exemplo.com.br
            </span>
          </p>
          <p className="text-gray-400 text-base">
            WhatsApp:{" "}
            <span className="font-semibold text-white">+55 47 99621-2925</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Cursos;

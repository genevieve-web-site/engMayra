import imageCourse1 from "../assets/cursoDepo/capa_cursos.jpeg";
import imageCourse2 from "../assets/cursoDepo/helice.jpeg";

import depoimento1 from "../assets/depoimentos/4.jpeg";
import depoimento2 from "../assets/depoimentos/8.jpeg";
import depoimento3 from "../assets/depoimentos/depo1.jpeg";
import depoimento4 from "../assets/depoimentos/depo2.jpeg";
import depoimento5 from "../assets/depoimentos/65.jpeg";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Video,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Cursos = () => {
  const navigate = useNavigate();

  const cursos = [
    {
      title: "Planejamento de Obras na Prática",
      description:
        "Aprenda a dominar as estratégias e ferramentas necessárias para planejar obras de forma objetiva e atual. Mão na massa com exemplos reais e materiais de apoio.",
      image: imageCourse1,
      detailsLink: "/cursos_plan",
      type: "Curso Completo",
      isInternal: true,
    },
    {
      title: "E-book: Hélice na prática",
      description:
        "O guia definitivo para engenheiros que desejam organizar seu primeiro estaqueamento com excelência.",
      image: imageCourse2,
      detailsLink: "/ebook",
      type: "Material Digital",
      isInternal: true,
    },
  ];

  const depoimentos = [
    {
      id: 1,
      nome: "Bruno Santos ",
      cargo: "Engenheiro Civil",
      image: depoimento1,
    },
    {
      id: 2,
      nome: "Kelf Almeida.",
      cargo: "Engenheiro Civil",
      image: depoimento2,
    },
    {
      id: 3,
      nome: "Wesley Moreira. ",
      cargo: "Engenheiro Civil.",
      image: depoimento3,
    },
    {
      id: 4,
      nome: "Gabriel Martins",
      cargo: "Engenheiro Civil",
      image: depoimento4,
    },
    {
      id: 5,
      nome: "Rodrigo Ramos",
      cargo: "Engenheiro Civil",
      image: depoimento5,
    },
  ];

  const [depoIndex, setDepoIndex] = useState(0);

  // Lógica de loop infinito para as setas
  const avancarDepoimento = () =>
    setDepoIndex((prev) => (prev + 1) % depoimentos.length);

  const voltarDepoimento = () =>
    setDepoIndex(
      (prev) => (prev - 1 + depoimentos.length) % depoimentos.length,
    );

  return (
    <main
      id="cursos"
      className="bg-white min-h-screen font-['Poppins',_sans-serif] overflow-x-hidden"
    >
      {/* Botão Voltar */}
      <div className="p-6 max-w-[800px] mx-auto">
        <Link
          to="/#"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest"
        >
          <ArrowLeft size={14} /> Voltar para Início
        </Link>
      </div>

      <section className="w-full bg-[#0a0212] rounded-tl-[60px] rounded-br-[60px] py-16 px-6">
        <div className="max-w-[850px] mx-auto">
          <header className="text-center mb-12 space-y-3">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              Capacitação Profissional
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tighter">
              Eleve o nível do seu <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                Gerenciamento
              </span>
            </h1>
            <div className="relative w-full max-w-[250px] h-[1px] mx-auto mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            </div>
          </header>

          {/* Cards de Cursos */}
          <div className="flex flex-col gap-8">
            {cursos.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.detailsLink)}
                className="group relative flex flex-col md:flex-row bg-[#1a0d2b] border border-[#2d1b4d] rounded-tl-[30px] rounded-br-[30px] overflow-hidden w-full max-w-[800px] md:h-[280px] mx-auto transition-all duration-500 hover:border-pink-500/40 cursor-pointer shadow-xl"
              >
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center z-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-pink-500 text-[9px] font-bold uppercase tracking-widest">
                      {index === 0 ? (
                        <Video size={12} />
                      ) : (
                        <BookOpen size={12} />
                      )}
                      {item.type}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm line-clamp-3">
                      {item.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all group-hover:bg-pink-500">
                        Detalhes <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[35%] h-48 md:h-full shrink-0 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a0d2b] via-transparent to-transparent md:block hidden" />
                </div>
              </div>
            ))}
          </div>

          {/* Carrossel de Depoimentos */}
          <div className="mt-24 mb-10 w-full relative">
            <header className="text-center mb-8">
              <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">
                Comunidade
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Feedback dos Alunos
              </h3>
            </header>

            {/* Botões de Navegação */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                type="button"
                onClick={voltarDepoimento}
                className="w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white hover:bg-black/70 transition-colors flex items-center justify-center active:scale-90"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={avancarDepoimento}
                className="w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white hover:bg-black/70 transition-colors flex items-center justify-center active:scale-90"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative flex justify-center items-center min-h-[350px]">
              {/* Exibição centralizada do depoimento ativo */}
              <div
                key={depoIndex}
                className="flex flex-col items-center animate-[fadeIn_0.5s_ease-in-out]"
              >
                <figure className="flex flex-col items-center">
                  {/* Container para manter as imagens menores e proporcionais */}
                  <div className="h-[200px] md:h-[240px] w-auto max-w-[300px] flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl">
                    <img
                      src={depoimentos[depoIndex].image}
                      alt={depoimentos[depoIndex].nome}
                      className="max-h-full max-w-full object-contain rounded-lg"
                    />
                  </div>

                  <figcaption className="mt-6 text-center">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                      {depoimentos[depoIndex].nome}
                    </h4>
                    <span className="text-pink-400 text-[9px] font-semibold uppercase">
                      {depoimentos[depoIndex].cargo}
                    </span>
                    <div className="flex justify-center text-orange-400 mt-2 scale-75">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Suporte */}
          <div className="mt-12 max-w-md mx-auto rounded-2xl border border-white/5 px-6 py-6 text-center bg-[#1a0d2b]/30">
            <h3 className="text-sm font-bold text-gray-50 uppercase tracking-widest mb-3">
              Suporte
            </h3>
            <p className="text-gray-400 text-xs mb-2">
              WhatsApp:{" "}
              <a
                href="https://wa.me/5547996212925"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-pink-500 transition-colors"
              >
                +55 47 99621-2925
              </a>
            </p>
            <p className="text-gray-400 text-[11px] mb-2">
              E-mail:{" "}
              <span className="text-white">mnengenharia25@gmail.com</span>
            </p>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              © 2026 Mayra Alves
            </p>
          </div>
        </div>
      </section>

      {/* Estilo para a animação de Fade */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <footer className="w-full flex justify-center mt-8 mb-8">
        <a
          href="https://www.genevieve.com.br/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 text-[10px] tracking-widest hover:text-gray-400 transition-colors"
        >
          Desenvolvido por Genevieve Website Constructions
        </a>
      </footer>
    </main>
  );
};

export default Cursos;

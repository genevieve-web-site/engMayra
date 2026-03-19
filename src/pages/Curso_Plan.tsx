import { ArrowLeft, PlusCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import capa1 from "../assets/cursoDepo/1.jpeg";
import capa2 from "../assets/cursoDepo/3.jpeg";
import capa3 from "../assets/cursoDepo/TRES.jpeg";
import capa4 from "../assets/cursoDepo/5.jpeg";
import capa5 from "../assets/cursoDepo/6.jpeg";
import capa6 from "../assets/cursoDepo/7.jpeg";
import capa7 from "../assets/cursoDepo/8.jpeg";
import capa8 from "../assets/cursoDepo/capa.jpeg";

const Curso_Plan = () => {
  const modulosCurso = [
    {
      numero: "01",
      titulo: "INTRODUÇÃO E MENTALIDADE",
      imagem: capa1,
      aulas: [
        "Boas-vindas e alinhamento do curso",
        "Introdução ao curso",
        "A importância do Planejamento",
        "Interface do Planejamento",
        "Conversa Sincera Antes de Você Adquirir o Curso",
      ],
    },
    {
      numero: "02",
      titulo: "LONGO PRAZO",
      imagem: capa2,
      aulas: [
        "Conceito",
        "Ferramentas",
        "Como Elaborar?",
        "Trenzinho do Planejamento",
        "Erros Comuns",
      ],
    },
    {
      numero: "03",
      titulo: "MÉDIO PRAZO",
      imagem: capa3,
      aulas: ["Conceito", "Erros Comuns", "Como Elaborar?", "Restrições"],
    },
    {
      numero: "04",
      titulo: "CURTO PRAZO",
      imagem: capa4,
      aulas: [
        "Conceito",
        "Como Elaborar Parte 1",
        "Como Elaborar Parte 2",
        "PCC - Percentual do Planejamento Cumprido",
      ],
    },
    {
      numero: "05",
      titulo: "PLANEJAMENTO DE FASE",
      imagem: capa5,
      aulas: ["Conceito", "Como Elaborar Parte 1", "Como Elaborar Parte 2"],
    },
    {
      numero: "06",
      titulo: "MELHORIA CONTÍNUA",
      imagem: capa6,
      aulas: ["Conceito", "Como Elaborar Parte 1", "Como Elaborar Parte 2"],
    },
    {
      numero: "07",
      titulo: "CASOS DE OBRAS",
      imagem: capa7,
      aulas: [
        "Exemplos Práticos",
        "Estudo de Caso: Obra Com Cronograma Superdimensionado",
        "Planejamento e estacamento de Hélice Contínua",
        "Consultoria: Planejamento de Fase - Laje Tipo Concreto Protendido",
      ],
    },
    {
      numero: "08",
      titulo: "MATERIAIS DE APOIO",
      imagem: capa8,
      aulas: ["Recursos extras para implementação"],
    },
  ];

  const numerosRomanos = [
    "I.",
    "II.",
    "III.",
    "IV.",
    "V.",
    "VI.",
    "VII.",
    "VIII.",
  ];

  return (
    <main className="bg-white min-h-screen font-['Poppins',_sans-serif] overflow-x-hidden text-sm">
      {/* Botão Voltar - Reduzido para estilo Linktree */}
      <div className="p-4 max-w-[800px] mx-auto">
        <Link
          to="/cursos"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest"
        >
          <ArrowLeft size={14} /> Voltar para Cursos
        </Link>
      </div>

      <section className="w-full bg-[#0a0212] rounded-tl-[60px] rounded-br-[60px] py-12 px-4 md:px-6">
        <div className="max-w-[750px] mx-auto">
          <header className="text-center mb-12 space-y-2">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              Especialização
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tight">
              Conteúdo Programático <br />
              <span className="text-pink-500 italic">Na Prática</span>
            </h1>
            <div className="relative w-16 h-[2px] bg-pink-500 mx-auto mt-4"></div>
          </header>

          <div className="flex flex-col gap-6">
            {modulosCurso.map((modulo, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row bg-[#1a0d2b] border border-[#2d1b4d] rounded-tl-[30px] rounded-br-[30px] overflow-hidden w-full transition-all duration-300 hover:border-pink-500/30 shadow-lg"
              >
                {/* Imagem - Ajustada para 28% e alinhada à esquerda */}
                <div className="w-full md:w-[28%] relative h-28 md:h-auto overflow-hidden">
                  <img
                    src={modulo.imagem}
                    alt={modulo.titulo}
                    className="absolute inset-0 w-full h-full object-cover object-[0%_center] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Conteúdo Detalhado - Estilo Compacto */}
                <div className="w-full md:w-[72%] p-6 md:p-7 flex flex-col justify-center bg-[#13091e]">
                  <div className="flex items-center gap-2 text-pink-500 mb-2">
                    <PlusCircle size={14} />
                    <span className="text-[9px] font-bold uppercase tracking-widest">
                      Módulo {modulo.numero}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-tighter">
                    {modulo.titulo}
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {modulo.aulas.map((aula, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400 text-[11px] leading-tight group-hover:text-gray-200 transition-colors"
                      >
                        <span className="text-pink-500 font-bold shrink-0">
                          {numerosRomanos[i]}
                        </span>
                        <span>{aula}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Botão de Compra - Estilo Linktree */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <a
              href="https://mnengenharia25.hotmart.host/planejamento-de-obras-na-pratica-8fe32d2c-f454-44f4-b108-554178ffdf52"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 bg-white text-black font-bold py-4 px-10 rounded-full text-xs uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all shadow-xl active:scale-95"
            >
              Garantir minha vaga{" "}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
            <p className="text-gray-500 text-[9px] uppercase tracking-widest">
              Acesso imediato à plataforma
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Curso_Plan;

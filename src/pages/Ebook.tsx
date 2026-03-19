import { ArrowLeft, BookOpen, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import capaHelice from "../assets/cursoDepo/helice.jpeg";

const Ebook_Plan = () => {
  // Dados do Curso Hélice
  const modulosEbook = [
    {
      numero: "01",
      titulo: "PRÉ OBRA",
      imagem: capaHelice,
      aulas: ["1.1 Laudo de vizinhança", "1.2 Contratações", "1.3 Projetos"],
    },
    {
      numero: "02",
      titulo: "O CANTEIRO",
      imagem: capaHelice,
      aulas: [
        "2.1 O solo",
        "2.2 Gabarito",
        "2.3 Locação prédio",
        "2.4 Área de vivência/Instalações",
      ],
    },
    {
      numero: "03",
      titulo: "O PLANEJAMENTO",
      imagem: capaHelice,
      aulas: [
        "3.1 Preparação das armaduras das estacas",
        "3.2 Cotas de arrasamento",
        "3.3 Planejamento das estacas",
      ],
    },
    {
      numero: "04",
      titulo: "A EXECUÇÃO",
      imagem: capaHelice,
      aulas: ["4.1 Recebimento da hélice", "4.2 Processo de furação"],
    },
    {
      numero: "BÔNUS",
      titulo: "MATERIAIS EXCLUSIVOS",
      imagem: capaHelice,
      aulas: [
        "Checklist completo de conferência",
        "Modelos de documentos",
        "Planilhas de apoio",
      ],
    },
  ];

  return (
    <main className="bg-white min-h-screen font-['Poppins',_sans-serif] overflow-x-hidden">
      {/* Botão Voltar */}
      <div className="p-4 max-w-[800px] mx-auto">
        <Link
          to="/cursos"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest"
        >
          <ArrowLeft size={14} /> Voltar para Cursos
        </Link>
      </div>

      {/* Container Escuro Principal */}
      <section className="w-full bg-[#0a0212] rounded-tl-[60px] rounded-br-[60px] py-12 px-4">
        <div className="max-w-[750px] mx-auto">
          <header className="text-center mb-20 space-y-4">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              E-book / Curso de Hélice
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tight">
              Conteúdo do Material
            </h1>
            <div className="relative w-16 h-[2px] bg-pink-500 mx-auto mt-4"></div>
          </header>

          {/* Lista de Módulos - Tamanho Reduzido */}
          <div className="flex flex-col gap-6">
            {modulosEbook.map((modulo, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row bg-[#1a0d2b] border border-[#2d1b4d] rounded-tl-[30px] rounded-br-[30px] overflow-hidden w-full transition-all duration-300 hover:border-pink-500/30 shadow-lg"
              >
                {/* LADO ESQUERDO: Capa compacta */}
                <div className="w-full md:w-[28%] relative h-48 md:h-auto overflow-hidden">
                  <img
                    src={modulo.imagem}
                    alt={modulo.titulo}
                    className="absolute inset-0 w-full h-full object-cover object-right grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d2b] to-transparent opacity-60 md:hidden"></div>
                </div>

                {/* LADO DIREITO: Conteúdo detalhado */}
                <div className="w-full md:w-[72%] p-6 md:p-7 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-pink-500/90 mb-2">
                    <BookOpen size={14} />
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                      {modulo.numero === "BÔNUS"
                        ? "Extra"
                        : `Capítulo ${modulo.numero}`}
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
                        <span className="text-pink-500 font-bold">•</span>
                        <span>{aula}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Chamada para Ação */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <a
              href="https://pay.kiwify.com.br/4TQvqGe"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-10 rounded-full text-xs uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Comprar material agora{" "}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
            <p className="text-gray-500 text-[9px] uppercase tracking-widest">
              Acesso imediato após a confirmação
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ebook_Plan;

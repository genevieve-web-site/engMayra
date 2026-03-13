import { ArrowLeft, PlusCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Curso_Plan = () => {
  // Estrutura atualizada para replicar o design da referência
  // Cada card é um Módulo, contendo suas respectivas aulas
  const modulosCurso = [
    {
      numero: "01",
      titulo: "Introdução",
      imagem:
        "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
      aulas: [
        "Boas-vindas e alinhamento do curso",
        "A mentalidade do engenheiro de planejamento",
        "Como utilizar os materiais de apoio",
      ],
    },
    {
      numero: "02",
      titulo: "O longo prazo",
      imagem:
        "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800",
      aulas: [
        "Visão macro do empreendimento",
        "Estruturação da EAP (Estrutura Analítica de Projeto)",
        "Definição de marcos e caminho crítico",
        "Montagem do cronograma mestre",
      ],
    },
    {
      numero: "03",
      titulo: "O médio prazo",
      imagem:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      aulas: [
        "Análise de restrições (Lookahead)",
        "Garantindo fluxo contínuo de trabalho",
        "Reuniões de médio prazo eficientes",
      ],
    },
    {
      numero: "04",
      titulo: "O curto prazo",
      imagem:
        "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=800",
      aulas: [
        "Planejamento semanal e diário",
        "Gestão visual no canteiro de obras",
        "Engajando a equipe de execução",
        "Medição e controle de produtividade",
      ],
    },
    {
      numero: "05",
      titulo: "Planejamento de fase",
      imagem:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
      aulas: [
        "Faseamento estratégico da obra",
        "Transição entre etapas críticas",
        "Exemplos práticos de faseamento",
      ],
    },
  ];

  // Array para gerar os números romanos dinamicamente (I, II, III...)
  const numerosRomanos = [
    "I.",
    "II.",
    "III.",
    "IV.",
    "V.",
    "VI.",
    "VII.",
    "VIII.",
    "IX.",
    "X.",
  ];

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

      {/* Container Escuro Principal */}
      <section className="w-full bg-[#0a0212] rounded-tl-[80px] rounded-br-[80px] py-20 px-4 md:px-6">
        <div className="max-w-[1000px] mx-auto">
          <header className="text-center mb-20 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Veja o que você vai receber <br className="hidden md:block" />
              ao adquirir o curso:
            </h1>
          </header>

          {/* Lista de Módulos (Estilo SPE) */}
          <div className="flex flex-col gap-10">
            {modulosCurso.map((modulo, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-[#34083b] border border-white/5 rounded-[32px] overflow-hidden w-full shadow-2xl transition-all duration-300 hover:border-white/10"
              >
                {/* LADO ESQUERDO: Imagem */}
                <div className="w-full md:w-[45%] relative min-h-[250px] md:min-h-[380px]">
                  {/* Overlay gradiente igual à referência para escurecer as bordas da imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#13091e] via-[#13091e]/40 to-transparent z-10" />

                  <img
                    src={modulo.imagem}
                    alt={modulo.titulo}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  />

                  {/* Texto grande sobreposto na imagem (Igual ao "5 pilares dos bons stories") */}
                  <div className="absolute bottom-8 left-8 z-20 pr-8">
                    <h4 className="text-white font-bold text-3xl leading-tight drop-shadow-lg">
                      {modulo.titulo}
                    </h4>
                  </div>
                </div>

                {/* LADO DIREITO: Conteúdo e Aulas */}
                <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-[#13091e] z-20">
                  {/* Cabeçalho do Módulo */}
                  <div className="flex items-center gap-3 text-gray-400 mb-8 border-b border-white/10 pb-6">
                    <PlusCircle size={20} className="text-pink-500" />
                    <span className="text-base font-medium">
                      Módulo {modulo.numero}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6">
                    {modulo.titulo}
                  </h3>

                  {/* Lista de Aulas com Números Romanos */}
                  <ul className="space-y-4">
                    {modulo.aulas.map((aula, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-300 text-sm md:text-base leading-relaxed"
                      >
                        <span className="text-gray-500 font-semibold w-6 shrink-0">
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

          {/* Botão de Compra no final da página */}
          <div className="mt-20 flex justify-center">
            <a
              href="https://mnengenharia25.hotmart.host/planejamento-de-obras-na-pratica-8fe32d2c-f454-44f4-b108-554178ffdf52"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 bg-white text-black font-bold py-5 px-10 rounded-full text-lg uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all shadow-xl"
            >
              Garantir minha vaga{" "}
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Curso_Plan;

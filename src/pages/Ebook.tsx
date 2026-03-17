import { ArrowLeft, BookOpen, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Ebook_Plan = () => {
  // Estrutura para o E-book (Capítulos e tópicos)
  const modulosEbook = [
    {
      numero: "01",
      titulo: "Checklist de Início",
      imagem:
        "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
      aulas: [
        "Documentação essencial para o canteiro",
        "Itens de segurança e infraestrutura inicial",
        "Primeiros passos para mobilização da equipe",
        "Erros comuns no dia zero da obra",
      ],
    },
    {
      numero: "02",
      titulo: "Modelos de Cronograma",
      imagem:
        "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800",
      aulas: [
        "Cronograma de Gantt simplificado",
        "Linhas de balanço na prática",
        "O quadro Kanban no canteiro de obras",
        "Como atualizar seu cronograma semanalmente",
      ],
    },
    {
      numero: "03",
      titulo: "Gestão de Equipe",
      imagem:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      aulas: [
        "A importância do DDS e alinhamento matinal",
        "Como delegar tarefas com clareza",
        "Lidando com atrasos e baixa produtividade",
        "Comunicação entre escritório e canteiro",
      ],
    },
    {
      numero: "04",
      titulo: "Materiais Padrão",
      imagem:
        "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=800",
      aulas: [
        "Lista base para insumos de estrutura",
        "Controle visual de estoque na obra",
        "Gestão do tempo de entrega (Lead Time)",
        "Evitando o desperdício de materiais",
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
          to="/cursos"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft size={16} /> Voltar para Cursos
        </Link>
      </div>

      {/* Container Escuro Principal */}
      <section className="w-full bg-[#0a0212] rounded-tl-[80px] rounded-br-[80px] py-20 px-4 md:px-6">
        <div className="max-w-[1000px] mx-auto">
          <header className="text-center mb-20 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Veja o que você vai aprender <br className="hidden md:block" />
              dentro do E-book:
            </h1>
          </header>

          {/* Lista de Capítulos (Estilo SPE) */}
          <div className="flex flex-col gap-10">
            {modulosEbook.map((modulo, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-[#13091e] border border-white/5 rounded-[32px] overflow-hidden w-full shadow-2xl transition-all duration-300 hover:border-white/10"
              >
                {/* LADO ESQUERDO: Imagem */}
                <div className="w-full md:w-[45%] relative min-h-[250px] md:min-h-[380px]">
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#13091e] via-[#13091e]/40 to-transparent z-10" />

                  <img
                    src={modulo.imagem}
                    alt={modulo.titulo}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  />

                  {/* Texto grande sobreposto na imagem */}
                  <div className="absolute bottom-8 left-8 z-20 pr-8">
                    <h4 className="text-white font-bold text-3xl leading-tight drop-shadow-lg">
                      {modulo.titulo}
                    </h4>
                  </div>
                </div>

                {/* LADO DIREITO: Conteúdo e Tópicos */}
                <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-[#13091e] z-20">
                  {/* Cabeçalho do Capítulo */}
                  <div className="flex items-center gap-3 text-gray-400 mb-8 border-b border-white/10 pb-6">
                    {/* Troquei o ícone PlusCircle pelo BookOpen para fazer mais sentido com um E-book */}
                    <BookOpen size={20} className="text-orange-400" />
                    <span className="text-base font-medium">
                      Capítulo {modulo.numero}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6">
                    {modulo.titulo}
                  </h3>

                  {/* Lista de Tópicos com Números Romanos */}
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

          {/* Botão de Compra da Kiwify */}
          <div className="mt-20 flex justify-center">
            <a
              href="https://pay.kiwify.com.br/4TQvqGe"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 bg-white text-black font-bold py-5 px-10 rounded-full text-lg uppercase tracking-widest hover:bg-orange-400 hover:text-white transition-all shadow-xl"
            >
              Comprar Agora{" "}
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

export default Ebook_Plan;

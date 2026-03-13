import imgBG1 from "../assets/mayra/ConsultoriaMayra.jpeg";
import imgBG2 from "../assets/mayra/consultoria.jpg";
import imgBG3 from "../assets/mayra/Mayra_emObra.jpeg";

import {
  ArrowLeft,
  MapPin,
  Star,
  Calendar,
  Zap,
  Target,
  BarChart,
  ShieldAlert,
  Repeat,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Consultoria = () => {
  // Dados extraídos exatamente do seu PDF de proposta
  const pacotes = [
    {
      title: "Consultoria Mensal Fixo",

      description:
        "Acompanhamento constante com dia a definir. Ideal para garantir que o planejamento saia do papel e a produtividade se mantenha alta ao longo de toda a obra.",
      image: imgBG1,
      icon: <Calendar size={24} />,
    },
    {
      title: "Consultoria por Etapa/Fase",

      description:
        "Foco total em fases críticas, conforme a necessidade e o cronograma da obra. Ideal para quem precisa de um 'choque de gestão' em uma etapa específica.",
      image: imgBG2,
      icon: <Zap size={24} />,
    },
  ];

  const entregaveis = [
    {
      title: "Longo Prazo",
      icon: <Target size={20} />,
      text: "Cronograma geral, marcos principais e análise do caminho crítico.",
    },
    {
      title: "Médio Prazo",
      icon: <Calendar size={20} />,
      text: "Cronogramas de 8 semanas, pacotes de trabalho e interdependências.",
    },
    {
      title: "Curto Prazo",
      icon: <Zap size={20} />,
      text: "Cronogramas semanais, análise de produtividade e ajustes táticos.",
    },
    {
      title: "Fase de Execução",
      icon: <BarChart size={20} />,
      text: "Quebra por etapas construtivas e planejamento com suprimentos.",
    },
    {
      title: "Gestão de Restrições",
      icon: <ShieldAlert size={20} />,
      text: "Controle de impedimentos, insumos, lead time e logística.",
    },
    {
      title: "Melhoria Contínua",
      icon: <Repeat size={20} />,
      text: "Lições aprendidas, registro de falhas e acertos para obras futuras.",
    },
  ];

  return (
    <main className="bg-white min-h-screen font-['Poppins',_sans-serif] overflow-x-hidden">
      {/* Voltar */}
      <div className="p-6 max-w-[1100px] mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>

      {/* Seção Principal Escura */}
      <section className="w-full bg-[#05010a] rounded-tl-[80px] rounded-br-[80px] py-20 px-4 md:px-6">
        <div className="max-w-[1000px] mx-auto">
          <header className="text-center mb-20 space-y-4">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm">
              Mentoria & Gestão
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight uppercase tracking-tighter">
              Consultoria de <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                Planejamento
              </span>
            </h1>

            {/* Brilho Neon */}
            <div className="relative w-full max-w-[400px] h-[2px] mx-auto mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-[8px] opacity-70 animate-pulse"></div>
            </div>
          </header>

          {/* ========================================================= */}
          {/* CARDS ESTILO "LUANA CAROLINA" (Texto esquerdo / Foto Dt)  */}
          {/* ========================================================= */}
          <div className="space-y-12 mb-24">
            {pacotes.map((pacote, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row w-full bg-[#0a0514] border border-pink-500/20 rounded-[32px] overflow-hidden group hover:border-pink-500/50 transition-colors shadow-2xl"
              >
                {/* Lado do Texto */}
                <div className="w-full md:w-[50%] p-10 lg:p-14 flex flex-col justify-center relative">
                  <div className="mb-6 inline-flex items-center gap-3 text-pink-500">
                    {pacote.icon}
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Formato {index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                    {pacote.title}
                  </h3>

                  {/* Linha gradiente abaixo do título */}
                  <div className="h-[2px] w-20 bg-gradient-to-r from-pink-500 to-orange-400 mb-6"></div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {pacote.description}
                  </p>

                  <div className="mb-10">
                    <span className="text-4xl font-bold text-white tracking-tighter">
                      {pacote.price}
                    </span>
                    <span className="text-pink-500 font-medium ml-1">
                      {pacote.period}
                    </span>
                  </div>

                  {/* Avatar + Assinatura (Estilo o "Luana Carolina" da imagem) */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src="URL_DA_SUA_FOTO_AQUI"
                      alt="Mayra Alves"
                      className="w-8 h-8 rounded-full object-cover border-white/20"
                    />
                    <span className="text-xs text-gray-400 font-semibold tracking-wide">
                      Mayra Alves Nunes
                    </span>
                  </div>
                </div>

                {/* Divisor Diagonal (Efeito hachurado rosa) */}
                <div
                  className="hidden md:block w-12 shrink-0 bg-[#0a0514] border-l border-r border-pink-500/10 z-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(236,72,153,0.15) 4px, rgba(236,72,153,0.15) 8px)",
                  }}
                ></div>

                {/* Lado da Imagem */}
                <div className="w-full md:w-[calc(50%-3rem)] min-h-[300px] relative overflow-hidden">
                  <img
                    src={pacote.image}
                    alt={pacote.title}
                    className="absolute inset-0 w-full h-full object-cover  group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* ========================================================= */}

          {/* O QUE ESTÁ INCLUSO (Baseado na Página 3 do PDF) */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center uppercase tracking-tight">
              O que está <span className="text-pink-500 italic">incluso</span>{" "}
              na proposta:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entregaveis.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#11081f] border border-white/5 p-8 rounded-3xl hover:border-orange-500/30 transition-colors"
                >
                  <div className="text-orange-400 mb-6 bg-orange-500/10 w-12 h-12 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PRÓXIMOS PASSOS (Baseado na Página 4 do PDF) */}
          <div className="bg-gradient-to-b from-[#1a0d2b] to-transparent p-10 md:p-16 rounded-[40px] border border-white/5 mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center uppercase tracking-tight">
              Próximos <span className="text-pink-500 italic">Passos</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Linha conectora desktop */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>

              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto bg-black border-2 border-pink-500 rounded-full flex items-center justify-center text-pink-500 font-bold text-xl mb-6 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                  01
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Reunião de Alinhamento
                </h4>
                <p className="text-gray-400 text-sm">
                  Entendemos suas necessidades, desejos e os pontos que desejam
                  desenvolver na obra.
                </p>
              </div>

              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto bg-black border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-400 font-bold text-xl mb-6 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  02
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Definição do Formato
                </h4>
                <p className="text-gray-400 text-sm">
                  Escolhemos juntos se o atendimento será mensal fixo ou por
                  etapa/fase do cronograma.
                </p>
              </div>

              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto bg-pink-500 border-2 border-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                  03
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Início da Consultoria
                </h4>
                <p className="text-gray-300 text-sm">
                  Após aprovações, damos início à execução do planejamento
                  tático no canteiro.
                </p>
              </div>
            </div>
          </div>

          {/* ONDE ATENDO (Atualizado para São Paulo e Online) */}
          <div className="bg-[#11051f] rounded-[40px] p-10 md:p-16 border border-pink-500/10 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-xs">
                  <MapPin size={18} /> Presencial e Online
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase">
                  Onde a{" "}
                  <span className="text-pink-500 italic">Engenharia</span>{" "}
                  acontece
                </h2>
                <p className="text-gray-300 text-lg">
                  Atendimento presencial focado na cidade de{" "}
                  <strong>São Paulo - SP</strong> e região metropolitana.
                </p>
                <p className="text-gray-400">
                  Para outras localidades, realizamos consultorias de
                  planejamento no formato <strong>100% online</strong>,
                  atendendo obras em todo o Brasil.
                </p>
              </div>
              <div className="w-full md:w-[45%] h-72 rounded-[30px] overflow-hidden  transition-all duration-700 border border-white/10">
                <img
                  src={imgBG3}
                  alt="Canteiro de Obras"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* DEPOIMENTO */}
          <div className="max-w-3xl mx-auto text-center space-y-8 mb-10">
            <div className="flex justify-center text-orange-400">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <blockquote className="text-2xl md:text-3xl text-white italic font-light leading-snug">
              "O planejamento visual da MN mudou a forma como minha equipe
              enxerga a obra. Hoje não temos mais furos de materiais e o
              cronograma é sagrado."
            </blockquote>
            <cite className="block text-pink-500 font-bold uppercase tracking-widest text-sm not-italic">
              — Engenheiro Residente, Obra Costa
            </cite>
          </div>
        </div>
      </section>

      {/* Footer Final */}
      <footer className="py-20 text-center bg-white">
        <h3 className="text-black text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-10">
          Pronto para ter previsibilidade e produtividade?
        </h3>
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-orange-500 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(236,72,153,0.3)]"
        >
          Solicitar Orçamento <ArrowUpRight size={20} />
        </a>
      </footer>
    </main>
  );
};

export default Consultoria;

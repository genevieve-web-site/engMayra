import perfilImg from "../assets/mayra/sobre.jpg";
import logoContech from "../assets/logoecontech-removebg-preview.png";
import logoPrevision from "../assets/new-prevision-logo.svg";
import logoEfficon from "../assets/efficon.png";
import bgParcerias from "../assets/cursoDepo/bgParcerias.jpg";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  GraduationCap,
  BookOpen,
  Presentation,
  PlayCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

// 1. Array movido para o topo para ficar acessível a todo o arquivo
const formacoes = [
  {
    id: 1,
    title: "Engenharia Civil",
    subtitle: "Faculdade Católica SC",
    icon: Building2,
  },
  {
    id: 2,
    title: "Pós graduação Gestão de negócios imobiliários",
    subtitle: "Faculdade IDD Curitiba",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Planejamento Lean",
    subtitle: " SK Consultoria e Treinamento",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Gestão Visual",
    subtitle: "Contech",
    icon: Presentation,
  },
];

// Sub-componente ServiceCard formatado como Post-it
const ServiceCard = ({ number, title, description, index }: ServiceProps) => {
  const colors = [
    "bg-postit-yellow text-postit-yellow-ink", // Amarelo
    "bg-postit-blue text-postit-blue-ink", // Azul
    "bg-postit-pink text-postit-pink-ink", // Rosa
    "bg-postit-green text-postit-green-ink", // Verde
  ];

  return (
    <div
      className={`p-8 shadow-lg flex flex-col justify-between min-h-[280px] 
                 relative mb-8 lg:mb-0 transition-transform hover:scale-[1.02]
                 ${colors[index % colors.length]}`}
      style={{ boxShadow: "5px 5px 15px rgba(0,0,0,0.08)" }}
    >
      {/* Detalhe visual de fita adesiva */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/40 -mt-2"></div>

      <div>
        <span className="text-3xl font-mono opacity-50 italic">#{number}</span>
        <h3 className="text-base md:text-sm font-bold mt-4 mb-4  tracking-tight">
          {title}
        </h3>
      </div>
      <p className="text-sm font-medium leading-relaxed opacity-90">
        {description}
      </p>

      {/* Ponto de fixação (alfinete) */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-black/20"></div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div id="about" className="w-full bg-white font-['Poppins',_sans-serif]">
      {/* Botão Voltar (Estilo atualizado padronizado) */}
      <div className="p-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>

      {/* SEÇÃO 1: SOBRE A ENGENHEIRA (Agora com o fundo escuro arredondado) */}
      <section className=" bg-[#0a0212] rounded-tl-[80px] rounded-br-[80px] pt-16 pb-24 px-6 md:px-12 lg:px-24">
        <header className="md:hidden mb-8">
          <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm mb-2">
            Sobre a Especialista
          </h2>
          <h1 className="text-4xl font-extrabold leading-tight text-white">
            Planejamento de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 italic">
              Obras
            </span>
          </h1>
        </header>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={perfilImg}
                alt="Engenheira Mayra Alves Nunes"
                className="w-full h-[520px] md:h-[640px] lg:h-[720px] object-cover transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white p-6 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.3)]">
              <p className="text-4xl font-bold">+7</p>
              <p className="text-sm uppercase tracking-widest">
                Anos de <br /> Experiência
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <header className="hidden md:block">
              <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm mb-2">
                Sobre mim
              </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                Do canteiro de obras para a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 italic">
                  estratégia.
                </span>
              </h1>
            </header>

            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                Ao longo da minha experiência em campo, percebi que atrasos,
                retrabalhos e improdutividade são consequência de um
                planejamento que não conversa com a realidade da execução
              </p>
              <p>
                Foi a partir disso que passei a focar na engenharia do
                planejamento aplicada à prática: métodos que saem do papel,
                organizam a produção e trazem previsibilidade para a obra.
              </p>
              <p>
                Hoje, ajudo engenheiros e empresas a estruturarem seus projetos
                com mais controle, clareza e resultado.
              </p>
              <p className="border-l-4 border-pink-500 pl-4 italic bg-white/5 py-3 rounded-r-lg">
                Acredito que o bom planejamento faz toda a diferença'
              </p>
            </div>
          </div>
        </div>
        {/* CARROSSEL: AGORA FORA DO GRID PARA OCUPAR A LARGURA TODA */}
        <div className="pt-6 w-full relative">
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-6 border-b border-white/10 pb-2">
            Qualificações
          </h4>

          {/* Este container faz o carrossel "vazar" as margens no Desktop */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
            <div className="flex w-max animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused] py-4">
              {[...formacoes, ...formacoes, ...formacoes].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-[#111111] border border-white/5 rounded-2xl mx-3 w-56 shrink-0 transition-all hover:bg-[#1a1a1a] hover:border-pink-500/30 group"
                >
                  <item.icon className="w-10 h-10 text-pink-500 mb-3 group-hover:text-orange-400 transition-colors" />
                  <h4 className="font-bold text-sm uppercase text-center text-white transition-colors tracking-tight">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-gray-400 uppercase mt-2 text-center tracking-widest opacity-70">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
      {/* SEÇÃO: PARCERIAS DE SUCESSO */}
      <section
        className="py-24 px-6 md:px-12 lg:px-24 border-white/5 bg-cover bg-left md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgParcerias})` }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da Seção */}
          <header className="text-center mb-16 space-y-4">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm font-sans">
              Ecossistema
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter">
              Parcerias de <br className="md:hidden" />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                Sucesso
              </span>
            </h3>
            <p className=" bg-white/80 text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
              Empresas e tecnologias de ponta que confiam <br /> no meu trabalho
              e caminham junto com o propósito de transformar a construção
              civil.
            </p>
          </header>

          {/* Grid de Parceiros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CARD 1: CONTECH */}
            <div className="bg-white/80 border border-black/10 rounded-[32px] p-10 transition-all duration-300 group flex flex-col justify-between shadow-xl hover:-translate-y-2">
              <div>
                <span className="inline-block px-4 py-1  bg-blue-700/10 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-purple-500/20">
                  Embaixadora Oficial
                </span>
                <h4 className="text-3xl font-bold text-black mb-0 tracking-tight">
                  Escola CONTECH
                </h4>
                <img
                  src={logoContech}
                  alt="CONTECH"
                  className="w-38 h-38 object-contain"
                />
                <p className="text-gray-700 text-sm leading-relaxed mb-10">
                  Reconhecida como Embaixadora da Eficiência, atuando ativamente
                  na disseminação da cultura Lean Construction e metodologias
                  ágeis para o canteiro de obras.
                </p>
              </div>

              {/* Link para o Webinar */}
              <a
                href="https://www.youtube.com/watch?v=FLLgr075r08"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray text-sm font-bold uppercase tracking-wider hover:text-blue-800 transition-colors"
              >
                <PlayCircle size={28} className="text-gray-500 " />
                Webinar: Lean na Prática
              </a>
            </div>

            {/* CARD 2: PREVISION */}
            <div className="bg-white/80 border border-black/10 rounded-[32px] p-10 hover:border-orange-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl hover:-translate-y-2">
              <div>
                <span className="inline-block px-4 py-1 bg-purple-800/10 text-purple-800 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-purple-800/20">
                  Parceiro Tecnológico
                </span>
                <h4 className="text-3xl font-bold text-black mb-0 tracking-tight">
                  Prevision
                </h4>
                <img
                  src={logoPrevision}
                  alt="Prevision"
                  className="w-38 h-38 object-contain mb-0"
                />
                <p className="text-gray-700 text-sm leading-relaxed mb-10">
                  Parceria com a principal plataforma de planejamento e gestão
                  de obras do Brasil. Elevando o nível de controle através de
                  tecnologia em Linha de Balanço.
                </p>
              </div>

              {/* Link para a Sienge/Prevision */}
              <a
                href="https://sienge.com.br/prevision-obras"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-black text-sm font-bold uppercase tracking-wider hover:text-purple-400 transition-colors"
              >
                <ArrowUpRight
                  size={28}
                  className="text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-transform"
                />
                Conheça a plataforma
              </a>
            </div>

            {/* CARD 3: EFFICON */}
            <div className="bg-white/80 border border-black/10 rounded-[32px] p-10 hover:border-orange-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl hover:-translate-y-2">
              <div>
                <span className="inline-block px-4 py-1 bg-red-800/10 text-red-800 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-red-800/20">
                  Parceiro Tecnológico
                </span>
                <h4 className="text-3xl font-bold text-black  tracking-tight">
                  Efficon
                </h4>
                <img
                  src={logoEfficon}
                  alt="Efficon"
                  className="w-38 h-38 object-contain mb-0"
                />
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Com a Efficon, sua equipe registra inspeções, checklists e
                  conformidades de forma prática e organizada, direto do
                  canteiro. Todas as etapas ficam documentadas e acessíveis,
                  facilitando o acompanhamento e a correção de desvios com
                  agilidade.
                </p>
                {/* Link para o site EfficonGest */}
                <a
                  href="https://efficongest.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-black text-sm font-bold uppercase tracking-wider hover:text-red-800 transition-colors mt-2"
                >
                  <ArrowUpRight
                    size={28}
                    className="text-red-800 group-hover:scale-110 group-hover:rotate-12 transition-transform"
                  />
                  Conheça a EfficonGest
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: SERVIÇOS EM POST-ITS (Mantida Fundo Claro) */}
      <section className="bg-[#eee992] rounded-tl-[80px] rounded-br-[80px] pt-16 pb-24 px-6 md:px-12 lg:px-24 py-20 px-6 md:px-12 lg:px-24 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-gray-900">
              Meus <br />{" "}
              <span className="text-gray-400 italic font-light">VALORES</span>
            </h2>
            <p className="text-gray-500 max-w-sm text-sm border-l-2 border-pink-500 pl-4 font-mono italic">
              // Planejamento são soluções coladas no canteiro.
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-6">
            <ServiceCard
              index={0}
              number="01"
              title="#Clareza acima de complexidade"
              description="Planejamento precisa ser entendido por quem executa."
            />
            <ServiceCard
              index={1}
              number="02"
              title=" Método acima de improviso"
              description="Resultado consistente vem de processo, não de esforço isolado."
            />
            <ServiceCard
              index={2}
              number="03"
              title="Realidade de obra em primeiro lugar"
              description="Nada funciona se não for aplicável no campo."
            />
            <ServiceCard
              index={3}
              number="04"
              title="Compromisso com prazo"
              description="Planejamento existe para garantir previsibilidade e entrega."
            />
          </div>

          <div className="mt-14 max-w-2xl mx-auto rounded-[28px] border border-gray-200 bg-gray-50 px-6 py-8 text-center space-y-3">
            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
              Contato
            </h3>
            <p className="text-gray-600 text-base">
              E-mail:{" "}
              <span className="font-semibold text-gray-900">
                mnengenharia25@gmail.com
              </span>
            </p>
            <p className="text-gray-600 text-base">
              WhatsApp:{" "}
              <a
                href="https://wa.me/5547996212925"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-900 hover:text-green-600 transition-colors"
              >
                +55 47 99621-2925
              </a>
            </p>
          </div>

          {/* Botão de rodapé (Opcional, mantido do seu design original) */}
          <div className="flex justify-center mt-14">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors font-semibold"
            >
              <ArrowLeft size={18} />
              Voltar ao Início
            </Link>
          </div>
        </div>
        <footer className="w-full flex justify-center mt-8">
          <a
            href="https://www.genevieve.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 text-[10px] tracking-widest hover:text-gray-400 transition-colors"
          >
            Desenvolvido por Genevieve Website Constructions
          </a>
        </footer>
      </section>
    </div>
  );
};

export default AboutSection;

import imgBG1 from "../assets/consultoria/consultoria.jpeg";
import imgBG2 from "../assets/consultoria/atendimento.jpg";
import imgBG3 from "../assets/mayra/empe.jpeg";
import perfil from "../assets/mayra/perfil.jpeg";

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
  const pacotes = [
    {
      title: "Consultoria Mensal Fixo",
      description:
        "Ideal para garantir que o planejamento saia do papel e se mantenha ao longo de toda a obra.",
      image: imgBG1,
      icon: <Calendar size={20} />,
      price: "Sob Consulta",
      period: "/mensal",
    },
    {
      title: "Consultoria por Etapa/Fase",
      description:
        "Foco total em fases críticas. Ideal para quem precisa de um 'choque de gestão' em uma etapa específica.",
      image: imgBG2,
      icon: <Zap size={20} />,
      price: "Sob Consulta",
      period: "/fase",
    },
  ];

  const entregaveis = [
    {
      title: "Longo Prazo",
      icon: <Target size={18} />,
      text: "Cronograma geral e análise do caminho crítico.",
    },
    {
      title: "Médio Prazo",
      icon: <Calendar size={18} />,
      text: "Cronogramas de 8 semanas e interdependências.",
    },
    {
      title: "Curto Prazo",
      icon: <Zap size={18} />,
      text: "Cronogramas semanais e ajustes táticos.",
    },
    {
      title: "Fase de Execução",
      icon: <BarChart size={18} />,
      text: "Quebra por etapas construtivas e suprimentos.",
    },
    {
      title: "Gestão de Restrições",
      icon: <ShieldAlert size={18} />,
      text: "Controle de impedimentos, insumos e logística.",
    },
    {
      title: "Melhoria Contínua",
      icon: <Repeat size={18} />,
      text: "Lições aprendidas e registros para obras futuras.",
    },
  ];

  return (
    <main className="bg-white min-h-screen font-['Poppins',_sans-serif] overflow-x-hidden">
      <div className="p-4 max-w-[900px] mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest"
        >
          <ArrowLeft size={14} /> Voltar
        </Link>
      </div>

      <section className="w-full bg-[#05010a] rounded-tl-[60px] rounded-br-[60px] py-16 px-4">
        <div className="max-w-[850px] mx-auto">
          <header className="text-center mb-14 space-y-2">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              Mentoria & Gestão
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
              Consultoria de{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                Planejamento
              </span>
            </h1>
            <div className="relative w-32 h-[1px] mx-auto mt-4 bg-pink-500/50"></div>
          </header>

          {/* CARDS DE CONSULTORIA - REDUZIDOS */}
          <div className="space-y-8 mb-20">
            {pacotes.map((pacote, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row w-full bg-[#0a0514] border border-pink-500/10 rounded-[24px] overflow-hidden group hover:border-pink-500/30 transition-all shadow-xl"
              >
                <div className="w-full md:w-[55%] p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-4 inline-flex items-center gap-2 text-pink-500">
                    {pacote.icon}
                    <span className="text-[9px] font-bold uppercase tracking-widest">
                      Formato {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {pacote.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {pacote.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-white">
                      {pacote.price}
                    </span>
                    <span className="text-pink-500 text-xs ml-1">
                      {pacote.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <img
                      src={perfil}
                      className="w-6 h-6 rounded-full object-cover  opacity-70"
                    />
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">
                      Mayra Nunes
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-[45%] min-h-[220px] relative overflow-hidden">
                  <img
                    src={pacote.image}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ENTREGÁVEIS - MAIS COMPACTO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {entregaveis.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#11081f] border border-white/5 p-6 rounded-2xl hover:bg-[#1a0d2b] transition-all"
              >
                <div className="text-orange-400 mb-4 bg-orange-500/5 w-10 h-10 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[11px] leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* ONDE ATENDO - SLIM */}
          <div className="bg-[#0a0212] rounded-[30px] p-8 border border-white/5 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-[9px]">
                  <MapPin size={14} /> Joinville e Online
                </div>
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                  Onde a{" "}
                  <span className="text-pink-500 italic">Engenharia</span>{" "}
                  acontece
                </h2>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Joinville/SC e região com suporte presencial. Para outras
                  localidades, consultoria 100% online em todo o Brasil.
                </p>
              </div>
              <div className="w-full md:w-[35%] h-48 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={imgBG3}
                  className="w-full h-full object-cover  opacity-60"
                />
              </div>
            </div>
          </div>

          {/* DEPOIMENTOS - BEM MENORES */}
          <div className="max-w-4xl mx-auto space-y-6 mb-10">
            <div className="flex justify-center text-orange-400/50 scale-75">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  quote:
                    "Clareza que a equipe nunca tinha tido. Ganhamos muito ritmo na execução.",
                  name: "Guilherme S.",
                  role: "Eng. Civil",
                },
                {
                  quote:
                    "Passamos a ter previsibilidade e rotina eficiente. A gestão visual fez a diferença.",
                  name: "Hadassa S.",
                  role: "Eng. Civil",
                },
                {
                  quote:
                    "Conseguimos organizar a execução e minimizar impactos em uma fundação difícil.",
                  name: "Raphael B.",
                  role: "Eng. Civil",
                },
              ].map((depo, i) => (
                <div
                  key={i}
                  className="bg-[#0a0212]/50 border border-white/5 rounded-xl p-5"
                >
                  <p className="text-[10px] md:text-[11px] text-gray-400 italic font-light leading-relaxed mb-4">
                    “{depo.quote}”
                  </p>
                  <cite className="block text-pink-500 font-bold uppercase tracking-widest text-[8px] not-italic">
                    {depo.name}{" "}
                    <span className="text-gray-600 font-normal">
                      | {depo.role}
                    </span>
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center bg-white">
        <a
          href="https://wa.me/35997382410"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pink-600 transition-all shadow-lg"
        >
          Solicitar Orçamento <ArrowUpRight size={14} />
        </a>
        <div className="mt-8">
          <a
            href="https://www.genevieve.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 text-[10px] tracking-widest hover:text-gray-400 transition-colors"
          >
            Desenvolvido por Genevieve Website Constructions
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Consultoria;

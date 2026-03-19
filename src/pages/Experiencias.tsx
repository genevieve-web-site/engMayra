import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import imageProject1 from "../assets/consultoria/1.jpeg";
import imageProject2 from "../assets/consultoria/2.jpeg";
import imageProject3 from "../assets/consultoria/3.jpeg";
import imageProject4 from "../assets/consultoria/4.jpeg";
import imageProject5 from "../assets/consultoria/5.jpeg";
import imageProject6 from "../assets/consultoria/6.jpeg";

import imageCarousel1 from "../assets/consultoria/COSTA.jpeg";
import imageCarousel2 from "../assets/consultoria/GRUPPO.jpeg";
import imageCarousel3 from "../assets/mayra/Mayra_emObra.jpeg";
import imageCarousel4 from "../assets/consultoria/atendimento.jpg";

//imagens
const Experiencias = () => {
  const [imagensObras, setImagensObras] = useState([
    {
      src: imageCarousel1,
      alt: "Imagem do canteiro de obras - COSTA",
    },
    {
      src: imageCarousel2,
      alt: "Imagem do canteiro de obras - GRUPPO",
    },
    {
      src: imageCarousel3,
      alt: "Profissional analisando plantas da obra",
    },
    {
      src: imageCarousel4,
      alt: "Profissional analisando plantas da obra",
    },
  ]);

  const avancarImagem = () => {
    setImagensObras((prev) => [...prev.slice(1), prev[0]]);
  };

  // Substituí os textos por imagens de fundo para os cards
  const obrasCards = [
    {
      obra: "HOME CLUB COSTA E SILVA",
      imagem: imageProject1,
      describe:
        "Planejamento de fase da etapa de estrutura em concreto protendido",
    },
    {
      obra: "JACOB",
      imagem: imageProject2,
      describe: "Planejamento de fase das fundações profundas.",
    },
    {
      obra: "JARDIM DO GRANT",
      imagem: imageProject3,
      describe: "Planejamento de fase laje tipo em concreto protendido.",
    },
    {
      obra: "BRASIL.70",
      imagem: imageProject4,
      describe: "Planejamento de médio prazo torre em alvenaria estrutural.",
    },
    {
      obra: "VIVA COSTA E SILVA",
      imagem: imageProject5,
      describe:
        "Replanejamento para entrega final de obra. 2 torres em alvenaria estrutural. ",
    },
    {
      obra: "INSIDE",
      imagem: imageProject6,
      describe: "Planejamento de médio prazo. Torre em concreto armado ",
    },
  ];

  return (
    <main className="bg-white min-h-screen font-['Poppins',_sans-serif]">
      {/* Botão Voltar */}
      <div className="p-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>

      {/* Seção Escura (Estilo SPE) */}
      <section className="w-full bg-[#0a0212] rounded-tl-[80px] rounded-br-[80px] py-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center">
          <header className="mb-16 space-y-4">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm">
              Experiências
            </h2>
            <h1 className="text-2xl md:text-6xl font-bold text-white leading-tight uppercase tracking-tighter">
              EXPERIÊNCIA EM CAMPO: <br />
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                O PLANEJAMENTO NA PRÁTICA
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              O planejamento só tem valor quando funciona na prática. Essas
              obras mostram como método, controle e execução bem estruturada
              geram resultado real no canteiro.
            </p>

            {/* Linha de Brilho Neon */}
            <div className="relative w-full max-w-[300px] h-[2px] mx-auto mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-[8px] opacity-70 animate-pulse"></div>
            </div>
            {/* CARROSSEL DE IMAGENS INFINITO */}
            <div className="relative w-full overflow-hidden py-10">
              {/* Gradientes laterais para suavizar a entrada/saída das fotos */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#06000c] to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10"></div>

              <button
                type="button"
                onClick={avancarImagem}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                aria-label="Avançar imagens"
              >
                <ArrowRight size={18} />
              </button>

              <div className="flex w-[200%] animate-scroll-infinite gap-4">
                {/* Array de imagens (Repetido duas vezes para o efeito infinito) */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    {imagensObras.map((imagem) => (
                      <img
                        key={`${i}-${imagem.alt}`}
                        src={imagem.src}
                        className="w-[280px] h-[180px] object-cover rounded-2xl border border-white/10 transition-all shadow-lg"
                        alt={imagem.alt}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* Lista de Projetos (Card visual + card de texto à direita) */}
          <div className="flex flex-col gap-6 mb-24">
            {obrasCards.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 items-stretch"
              >
                <div className="relative h-[220px] border border-[#2d1b4d] rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-lg group">
                  <img
                    src={item.imagem}
                    alt={item.obra}
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030006]/70 via-[#030006]/30 to-transparent z-10"></div>
                </div>

                <div className="h-[220px] bg-white/90 text-black border border-black/10 rounded-tr-[30px] rounded-bl-[30px] p-6 text-left flex flex-col justify-center shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex text-orange-500 shrink-0">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                  <span className="text-black font-bold text-sm md:text-base tracking-tight leading-snug">
                    {item.obra}
                  </span>
                  <p className="mt-2 text-gray-700 text-xs md:text-sm leading-relaxed">
                    {item.describe}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Final (O "Para qual bolso o dinheiro está indo?") */}
          <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#1a0d2b] to-transparent p-12 rounded-[40px] border border-white/5">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 uppercase tracking-tighter leading-tight">
              Toda obra precisa de planejamento <br />
              bem feito. <br />
              <span className="text-pink-500 ">
                Agora é hora de estruturar o seu.
              </span>
            </h3>

            <a
              href="https://wa.me/SEUNUMERO"
              className="inline-block bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold py-5 px-6 rounded-full text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(236,72,153,0.3)]"
            >
              QUERO ESTRUTURAR <br />
              MEU PLANEJAMENTO
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experiencias;

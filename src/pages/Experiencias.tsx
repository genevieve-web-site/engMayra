import { useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
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

import video from "../assets/videos/1.mp4";
import video2 from "../assets/videos/2.mp4";
import video3 from "../assets/videos/3.mp4";

const Experiencias = () => {
  const [imagensObras] = useState([
    { src: imageCarousel1, alt: "Imagem do canteiro de obras - COSTA" },
    { src: imageCarousel2, alt: "Imagem do canteiro de obras - GRUPPO" },
    { src: imageCarousel3, alt: "Profissional analisando plantas da obra" },
    { src: imageCarousel4, alt: "Profissional analisando plantas da obra" },
  ]);

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
        "Replanejamento para entrega final de obra. 2 torres em alvenaria estrutural.",
    },
    {
      obra: "INSIDE",
      imagem: imageProject6,
      describe: "Planejamento de médio prazo. Torre em concreto armado",
    },
  ];

  return (
    <main className="bg-white min-h-screen font-['Poppins',_sans-serif]">
      {/* SEO: Título da página para motores de busca */}
      <title>Experiências em Campo | Eng. Mayra Nunes</title>

      <div className="p-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>

      <section className="w-full bg-[#0a0212] rounded-tl-[80px] rounded-br-[80px] py-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center">
          <header className="mb-16 space-y-4">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm">
              Portfólio & Cases
            </h2>
            <h1 className="text-2xl md:text-6xl font-bold text-white leading-tight uppercase tracking-tighter">
              EXPERIÊNCIA EM CAMPO: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                O PLANEJAMENTO NA PRÁTICA
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              O planejamento só tem valor quando funciona na prática. Essas
              obras mostram como método, controle e execução bem estruturada
              geram resultado real no canteiro.
            </p>

            <div className="relative w-full max-w-[300px] h-[2px] mx-auto mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-[8px] opacity-70 animate-pulse"></div>
            </div>

            {/* Carrossel Infinito - Adicionado Will-Change para performance */}
            <div className="relative w-full overflow-hidden py-10">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0212] to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0212] to-transparent z-10"></div>
              <div className="flex w-[200%] animate-scroll-infinite gap-4 will-change-transform">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    {imagensObras.map((imagem, idx) => (
                      <img
                        key={`${i}-${idx}`}
                        src={imagem.src}
                        className="w-[280px] h-[180px] object-cover rounded-2xl border border-white/10 shadow-lg"
                        alt={imagem.alt}
                        loading="lazy"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* LISTA DE CARDS - EFEITO CARTA (STACKING) */}
          <div className="flex flex-col gap-12 mb-24 items-center">
            {obrasCards.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 items-stretch w-full 
                           sticky top-20 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  // Efeito de leve rotação intercalada para parecer cartas reais
                  transform: `rotate(${index % 2 === 0 ? "0.5deg" : "-0.5deg"})`,
                  marginTop: index === 0 ? "0" : "-20px", // Sobreposição sutil
                }}
              >
                {/* Imagem do Projeto */}
                <div className="relative h-[250px] md:h-[300px] border border-[#2d1b4d] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-2xl group">
                  <img
                    src={item.imagem}
                    alt={`Obra ${item.obra} - Planejamento de Engenharia`}
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030006]/80 via-[#030006]/20 to-transparent z-10"></div>
                </div>

                {/* Conteúdo do Projeto */}
                <div className="bg-white text-black border border-black/5 rounded-tr-[40px] rounded-bl-[40px] p-8 text-left flex flex-col justify-center shadow-2xl relative z-20">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        fill="#f97316"
                        className="text-orange-500"
                      />
                    ))}
                  </div>
                  <h3 className="text-black font-extrabold text-lg md:text-xl tracking-tight leading-tight mb-3">
                    {item.obra}
                  </h3>
                  <div className="h-[2px] w-12 bg-pink-500 mb-4"></div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.describe}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Seção de Vídeos - Otimização de SEO e Performance */}
          <div className="max-w-5xl mx-auto mt-16 mb-12">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-10 uppercase tracking-tighter text-center">
              Resultados{" "}
              <span className="text-pink-500 italic">em Movimento</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {[video, video2, video3].map((v, i) => (
                <div
                  key={i}
                  className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  <video
                    src={v}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-[300px] h-[530px] object-cover bg-black"
                  />
                  {/* Overlay sutil para SEO */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-[10px] uppercase font-bold tracking-widest">
                      Rotina de Canteiro
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <a
                href="https://www.instagram.com/eng.mayranns/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-black font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all shadow-xl"
              >
                Acompanhar no Instagram
              </a>
            </div>
          </div>

          {/* CTA Final */}
          <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#1a0d2b] to-transparent p-12 rounded-[50px] border border-white/5 mt-32">
            <h3 className="text-white text-2xl md:text-4xl font-bold mb-8 uppercase tracking-tighter leading-tight">
              Sua obra merece um <br />
              <span className="text-pink-500 italic">
                Planejamento de Elite
              </span>
            </h3>
            <a
              href="https://wa.me/554796212925"
              className="inline-block bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold py-5 px-10 rounded-full text-sm md:text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(236,72,153,0.4)]"
            >
              Falar com a Mayra agora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experiencias;

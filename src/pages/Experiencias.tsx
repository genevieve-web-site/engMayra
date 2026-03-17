import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import imageProject1 from "../assets/mayra/Mayra_emObra.jpeg";
import imageProject2 from "../assets/mayra/ConsultoriaMayra.jpeg";
import imageProject3 from "../assets/mayra/consultoria.jpg";
import imageProject4 from "../assets/mayra/Mayra_emObra.jpeg";
import imageProject5 from "../assets/mayra/ConsultoriaMayra.jpeg";
import imageProject6 from "../assets/mayra/consultoria.jpg";

const Experiencias = () => {
  const [imagensObras, setImagensObras] = useState([
    {
      src: imageProject1,
      alt: "Obra 1",
    },
    {
      src: imageProject2,
      alt: "Obra 2",
    },
    {
      src: imageProject3,
      alt: "Obra 3",
    },
    {
      src: imageProject4,
      alt: "Obra 4",
    },
    {
      src: imageProject5,
      alt: "Obra 5",
    },
    {
      src: imageProject6,
      alt: "Obra 6",
    },
  ]);

  const avancarImagem = () => {
    setImagensObras((prev) => [...prev.slice(1), prev[0]]);
  };

  // Substituí os textos por imagens de fundo para os cards
  const obrasCards = [
    {
      obra: "Laje Residencial Alphaville",
      imagem: imageProject1,
    },
    {
      obra: "Fundação Empresarial Cathuo",
      imagem: imageProject2,
    },
    {
      obra: "Condomínio Vertical Aurora",
      imagem: imageProject3,
    },
    {
      obra: "Complexo Residencial Vale Verde",
      imagem: imageProject4,
    },
    {
      obra: "Ampliação Industrial Nova Era",
      imagem: imageProject5,
    },
    {
      obra: "Edifício Prime Center",
      imagem: imageProject6,
    },
  ];

  return (
    <main className="bg-white min-h-screen font-['Poppins',_sans-serif]">
      {/* Botão Voltar */}
      <div className="p-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>

      {/* Seção Escura (Estilo SPE) */}
      <section className="w-full bg-[#030006] rounded-tl-[80px] rounded-br-[80px] py-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center">
          <header className="mb-16 space-y-4">
            <h2 className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm">
              Experiências
            </h2>
            <h1 className="text-2xl md:text-6xl font-bold text-white leading-tight uppercase tracking-tighter">
              Projetos: <br />
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                Confira minhas obras
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              O método de planejamento visual funciona para qualquer engenheiro
              que aplica a metodologia e os resultados das minhas obras provam
              isso.
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

          {/* Grid de Projetos (Cards com Imagem de Fundo) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {obrasCards.map((item, index) => (
              <div
                key={index}
                className="relative h-[220px] border border-[#2d1b4d] rounded-tr-[30px] rounded-bl-[30px] flex flex-col justify-end p-6 text-left hover:border-pink-500/40 transition-all hover:-translate-y-2 group overflow-hidden shadow-lg"
              >
                {/* IMAGEM DE FUNDO */}
                <img
                  src={item.imagem}
                  alt={item.obra}
                  className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                />

                {/* CAMADA ESCURA (OVERLAY) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030006]/95 via-[#030006]/50 to-transparent z-10"></div>

                {/* CONTEÚDO (Estrelas + Nome) */}
                <div className="relative z-20 flex items-center gap-3">
                  <div className="flex text-orange-400 shrink-0 drop-shadow-md">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                  <span className="text-white font-bold text-sm uppercase tracking-tight drop-shadow-md truncate">
                    {item.obra}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Final (O "Para qual bolso o dinheiro está indo?") */}
          <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#1a0d2b] to-transparent p-12 rounded-[40px] border border-white/5">
            <h3 className="text-white text-2xl md:text-4xl font-bold mb-8 uppercase tracking-tighter leading-tight">
              Toda obra precisa de bons <br />
              planejamentos <br />
              <span className="text-pink-500 ">Angede uma consultoria</span>
            </h3>

            <a
              href="https://wa.me/SEUNUMERO"
              className="inline-block bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold py-5 px-10 rounded-full text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(236,72,153,0.3)]"
            >
              Quero Agendar
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experiencias;

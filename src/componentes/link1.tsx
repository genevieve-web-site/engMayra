import perfilImage from "../assets/mayra/perfil.jpeg";
import ImageAbout from "../assets/mayra/about.jpeg";
import ImageExperiense from "../assets/mayra/sobre.jpg";
import Imagecurses from "../assets/cursoDepo/capa_cursos.jpeg";
import ImageConsult from "../assets/mayra/capaConsult.jpeg";

import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LinkButton = ({
  title,
  subtitle,
  to,
  image,
  imageClassName,
  imageContainerClassName,
}: {
  title: string;
  subtitle: string;
  to: string;
  image: string;
  imageClassName?: string;
  imageContainerClassName?: string;
}) => (
  <Link
    to={to}
    // Reduzi o max-w de 4xl para 2xl (aprox 672px) para ficar mais elegante no desktop
    className="w-full flex flex-col md:flex-row bg-[#1a0d2b] border border-white/10 rounded-[1.5rem] mb-4 overflow-hidden hover:bg-[#25143d] transition-colors group max-w-2xl mx-auto"
  >
    {/* Área de Texto - Diminuí os paddings e fontes */}
    <div className="flex-1 flex flex-col p-6 md:p-8 relative justify-center">
      <h2 className="text-2xl md:text-2xl font-bold text-white mb-2 tracking-tight transition-colors">
        {title}
      </h2>

      {/* Linha decorativa menor */}
      <div className="h-[2px] w-12 bg-gradient-to-r from-pink-500 to-orange-400 mb-4"></div>

      <p className="text-gray-400 group-hover:text-white text-sm md:text-sm leading-relaxed max-w-[95%] transition-colors">
        {subtitle}
      </p>
    </div>

    {/* Área da Imagem - Reduzi a altura no desktop de 340px para 200px */}
    <div
      className={`w-full md:w-[35%] h-[280px] md:h-[200px] shrink-0 border-l border-white/5 ${imageContainerClassName ?? ""}`}
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-full object-cover group-hover:opacity-90 transition-opacity ${imageClassName ?? ""}`}
      />
    </div>
  </Link>
);

const LinkTree = () => {
  return (
    // Reduzi o padding vertical de 20 para 12 no desktop
    <div className="min-h-screen bg-[#0a0212] text-white flex flex-col items-center px-4 md:px-8 py-12 md:py-12 font-sans">
      {/* Cabeçalho do Perfil - Diminuí os tamanhos */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-10">
        <div className="w-[100px] h-[140px] rounded-full overflow-hidden border border-white/20 mb-4 shadow-2xl">
          <img
            src={perfilImage}
            alt="Mayra"
            className="w-full h-full object-cover object-top scale-125"
          />
        </div>

        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-3xl leading-none mb-2 font-light tracking-tight italic">
            Engª Mayra Alves Nunes
          </h1>
          <p className="uppercase font-light text-[10px] tracking-[0.3em]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 font-bold">
              Planejamento e execução de obras
            </span>
          </p>
        </div>
      </div>

      {/* Container dos Cards - max-w-2xl mantém tudo centralizado e menor */}
      <div className="w-full max-w-2xl">
        <LinkButton
          title="Sobre Mim"
          subtitle="Conheça minha trajetória profissional."
          to="/about"
          image={ImageAbout}
          imageClassName="object-top"
        />
        <LinkButton
          title="Experiências"
          subtitle="Confira os principais projetos e resultados."
          to="/experiencias"
          image={ImageExperiense}
        />
        <LinkButton
          title="Cursos"
          subtitle="Táticas de planejamento avançado em obras."
          to="/cursos"
          image={Imagecurses}
        />
        <LinkButton
          title="Consultoria"
          subtitle="Agende uma análise estratégica agora."
          to="/consultoria"
          image={ImageConsult}
        />
      </div>

      {/* Redes Sociais - Menores e com margem reduzida */}
      <div className="flex gap-8 mt-10">
        <a
          href="https://www.instagram.com/eng.mayranns/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/mayraalvesnunes/"
          className="text-gray-400 hover:text-blue-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://wa.me/554796212925"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 transition-colors"
        >
          <MessageCircle size={20} />
        </a>
      </div>

      <p className="text-gray-600 text-[10px] mt-10 uppercase tracking-widest">
        © 2026 Engenheira Mayra Nunes. Todos os direitos reservados.
      </p>
      <a
        href="https://www.genevieve.com.br/"
        target="_blank"
        rel="noreferrer"
        className="text-gray-600 text-[10px] tracking-widest hover:text-gray-400 transition-colors"
      >
        Desenvolvido por Genevieve Website Constructions
      </a>
    </div>
  );
};

export default LinkTree;

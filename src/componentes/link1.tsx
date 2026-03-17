import perfilImage from "../assets/mayra/perfil.jpeg";
import ImageAbout from "../assets/mayra/about.jpeg";
import ImageExperiense from "../assets/mayra/ConsultoriaMayra.jpeg";
import Imagecurses from "../assets/cursoDepo/10-01.jpg";
import ImageConsult from "../assets/consultoria/close-up-woman-looking-plans.jpg";

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
    className="w-full flex flex-col md:flex-row bg-[#0a0a0a] border border-white/10 rounded-[2rem] mb-6 overflow-hidden hover:bg-white transition-colors group max-w-4xl mx-auto"
  >
    {/* Área de Texto */}
    <div className="flex-1 flex flex-col p-8 md:p-12 relative">
      <h2 className="text-3xl md:text-[40px] font-bold text-white group-hover:text-black mb-2 tracking-tight transition-colors">
        {title}
      </h2>

      {/* Linha decorativa P&B */}
      <div className="h-[2px] w-24 bg-gradient-to-r from-pink-500 to-orange-400 mb-6"></div>

      <p className="text-gray-400 group-hover:text-black text-lg md:text-base leading-relaxed max-w-[90%] mb-4 transition-colors">
        {subtitle}
      </p>
    </div>

    {/* Área da Imagem */}
    <div
      className={`w-full md:w-[45%] h-[380px] md:h-[340px] shrink-0 border-l border-white/5 ${imageContainerClassName ?? ""}`}
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-full object-cover group-hover:opacity-100 transition-opacity ${imageClassName ?? ""}`}
      />
    </div>
  </Link>
);

const LinkTree = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 md:px-8 py-20 font-sans">
      {/* Cabeçalho do Perfil */}
      <div className="w-full max-w-4xl flex flex-col items-center mb-16">
        <div className="w-[120px] h-[150px] rounded-full overflow-hidden border border-white/20 mb-6 shadow-2xl">
          <img
            src={perfilImage}
            alt="Mayra"
            className="w-full h-full object-cover object-top scale-125"
          />
        </div>

        <div className="text-center">
          <h1 className="font-serif text-[42px] leading-none mb-3 font-light tracking-tight italic">
            Mayra Alves
          </h1>
          <p className="uppercase font-light text-[12px] tracking-[0.4em]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              Engenharia • Gestão • Estratégia
            </span>
          </p>
        </div>
      </div>

      {/* Container dos Cards */}
      <div className="w-full">
        <LinkButton
          title="Sobre"
          subtitle="Conheça a trajetória e os valores profissionais de Mayra Nunes."
          to="/about"
          image={ImageAbout}
          imageClassName="object-top"
          imageContainerClassName="md:h-[390px]"
        />
        <LinkButton
          title="Experiências"
          subtitle="Confira os principais projetos realizados e resultados alcançados."
          to="/experiencias"
          image={ImageExperiense}
        />
        <LinkButton
          title="Cursos"
          subtitle="Metodologias e táticas de planejamento avançado em obras."
          to="/cursos"
          image={Imagecurses}
        />
        <LinkButton
          title="Consultoria"
          subtitle="Agende uma análise estratégica para o seu negócio."
          to="/consultoria"
          image={ImageConsult}
        />
      </div>

      {/* Redes Sociais */}
      <div className="flex gap-10 mt-16">
        <a
          href="https://www.instagram.com/eng.mayranns/"
          className="text-gray-200  hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition-all duration-300"
        >
          <Instagram size={24} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/mayra-alves/"
          className="text-gray-200   hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 transition-all duration-300"
        >
          <Linkedin size={24} strokeWidth={1.5} />
        </a>
        <a
          href="https://wa.me/5547996212925"
          className="text-gray-200  hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 transition-all duration-300"
        >
          <MessageCircle size={24} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
};

export default LinkTree;

import { ArrowUpRight, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Sobre Mim",
    description:
      "Engenheira civil e pós-graduanda em gestão de projetos. Especialista em trazer previsibilidade para o canteiro de obras.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
    link: "/about",
    isInternal: true,
  },
  {
    title: "Experiências",
    description:
      "Confira projetos de engenharia e gestão com resultados comprovados em planejamentos de obras.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    link: "/experiencias",
    isInternal: true,
  },
  {
    title: "Cursos",
    description:
      "Cursos exclusivos de planejamento e gestão em obras com aplicação prática.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    link: "/cursos",
    isInternal: true,
  },
  {
    title: "Consultoria",
    description:
      "Solicite orçamento para consultoria mensal ou por etapa e aumente a eficiência da construção.",
    image:
      "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800",
    link: "/consultoria",
    isInternal: true,
  },
] as const;

const cardClassName =
  "group relative flex flex-col md:flex-row bg-[#08010f] border border-[#212602] rounded-[20px] overflow-hidden w-full max-w-[860px] min-h-[260px] md:h-[310px] mx-auto transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-1";

const LinkTreeSection = () => {
  return (
    <section className="bg-white min-h-screen py-12 md:py-20 px-4 md:px-6 font-['Poppins',_sans-serif]">
      <div className="max-w-[1180px] mx-auto bg-[#0a0212] rounded-[40px] p-6 md:p-14 shadow-2xl">
        <div className="w-full max-w-[980px] flex flex-col items-center mx-auto mb-16">
          <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-[0.5px] border-white/20 mb-8 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
              alt="Mayra"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-4xl font-bold tracking-tighter  text-white">
              Mayra Alves
            </h1>
          </div>
        </div>

        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-4xl font-bold tracking-tighter uppercase text-white">
            Melhores práticas de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 italic">
              planejamento de obras
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {links.map((item, index) => {
            const cardContent = (
              <>
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center items-start text-left z-10">
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-3xl font-bold leading-tight text-white">
                      {item.title}
                    </h3>

                    <div className="relative h-px w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent z-20"></div>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[980px]">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3 pt-3">
                      <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                          alt="Mayra Nunes"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                        Mayra Nunes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[36%] h-48 md:h-full shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#12081f] via-transparent to-transparent z-10 hidden md:block" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>

                <div className="absolute top-6 right-6 text-white/10 group-hover:text-pink-500 transition-colors z-20">
                  <ArrowUpRight size={24} />
                </div>
              </>
            );

            if (item.isInternal) {
              return (
                <Link key={index} to={item.link} className={cardClassName}>
                  {cardContent}
                </Link>
              );
            }

            return (
              <a key={index} href={item.link} className={cardClassName}>
                {cardContent}
              </a>
            );
          })}
        </div>

        <div className="flex justify-center gap-8 pt-16 text-gray-500 flex-wrap">
          <a
            href="#"
            className="hover:text-pink-900 transition-colors flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest"
          >
            <Instagram size={16} /> Instagram
          </a>
          <a
            href="#"
            className="hover:text-blue-900 transition-colors flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-green-900 transition-colors flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkTreeSection;

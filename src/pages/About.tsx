
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import fundoImg from '../assets/fundo.png';

const About: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="min-h-screen pt-20 overflow-hidden relative bg-gray-900">
   
       {/* Background Image with Gradient Overlay */}
       <div className="absolute inset-0 z-0">
          <img 
            src={fundoImg} 
            alt="Supply Chain Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/70"></div>
        </div>
      
      <div className="w-full px-4 py-16 relative z-10">
        {/* Seção Principal */}
        <div className="max-w-4xl mx-auto mb-16 opacity-0 transform translate-y-12 transition-all duration-1000 ease-out"
             style={{
               opacity: isVisible ? 1 : 0,
               transform: isVisible ? 'translateY(0)' : 'translateY(3rem)'
             }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in text-center">
            Sobre a CELEN
          </h1>
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="font-semibold text-xl text-red-600 dark:text-red-400">
                Liderança Global em Soluções MRO
              </p>
              <p>
                Somos líderes especializados no fornecimento de soluções MRO (Manutenção, Reparo e Operações) de alta qualidade.
              </p>
              <p>
                Nossa expertise atende corporações multinacionais nos setores mais exigentes do mundo.
              </p>
              <p>
                Com um compromisso inabalável com a excelência, inovação e confiabilidade, capacitamos empresas a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manter máxima eficiência operacional</li>
                <li>Superar desafios em ambientes complexos</li>
                <li>Alcançar resultados superiores</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Indústrias que Atendemos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 opacity-0 transform translate-y-12 transition-all duration-1000 ease-out delay-300"
             style={{
               opacity: isVisible ? 1 : 0,
               transform: isVisible ? 'translateY(0)' : 'translateY(3rem)'
             }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white col-span-full mb-8">
            Indústrias que atendemos:
          </h2>

          {/* Mineração */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">Mineração</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Fornecendo materiais duráveis e de alto desempenho para operações de extração e processamento.
            </p>
          </div>

          {/* Petróleo e Gás */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">Petróleo e Gás</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Oferecendo suprimentos críticos para atividades de upstream, midstream e downstream.
            </p>
          </div>

          {/* Portos e Ferrovias */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">Portos e Ferrovias</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Garantindo logística eficiente e manutenção de infraestrutura.
            </p>
          </div>

          {/* Perfuração */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">Perfuração</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Fornecendo equipamentos e componentes especializados para precisão e segurança.
            </p>
          </div>

          {/* Metalurgia e Siderurgia */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">Metalurgia e Siderurgia</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Disponibilizando materiais robustos para condições extremas.
            </p>
          </div>

          {/* Barragens e Plantas de Energia */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">Barragens e Plantas de Energia</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Soluções para geração de energia e gestão hídrica.
            </p>
          </div>
        </div>

        {/* Conclusão */}
        <div className="w-full text-center opacity-0 transform translate-y-12 transition-all duration-1000 ease-out delay-500"
             style={{
               opacity: isVisible ? 1 : 0,
               transform: isVisible ? 'translateY(0)' : 'translateY(3rem)'
             }}>
          <p className="text-lg text-gray-100 mb-8 leading-relaxed">
            Nossa vasta experiência, alcance global e dedicação inabalável à qualidade nos tornam o parceiro preferencial das maiores
            indústrias. Conte conosco para manter suas operações em pleno funcionamento, em qualquer lugar do mundo.
          </p>
          <div className="text-2xl font-bold text-red-600 hover:scale-110 transition-transform duration-300 cursor-default">
            Inovação. Confiabilidade. Excelência Global.
          </div>

          {/* Contatos */}
          <div className="mt-12 text-sm text-gray-600 dark:text-gray-400 space-y-2 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
            <p>+258 84 860 6700 | +258 82 369 2370 | +258 87 369 2370</p>
            <p>ensonejosem@gmail.com</p>
            <p>emunguambe@celeninvestimentos.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

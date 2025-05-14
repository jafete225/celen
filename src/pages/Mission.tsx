import type { FC } from 'react';
import { useEffect, useState } from 'react';
import fundoImg from '../assets/fundo.png';

const Mission: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="relative min-h-screen">
      {/* Fundo com overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fundoImg}
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 pt-24 pb-16 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 opacity-0 transform translate-y-12 transition-all duration-1000 ease-out"
               style={{
                 opacity: isVisible ? 1 : 0,
                 transform: isVisible ? 'translateY(0)' : 'translateY(3rem)'
               }}>
            {/* Missão */}
            <div className="bg-gradient-to-br from-red-900/90 to-red-800/90 p-8 rounded-lg backdrop-blur-sm
                 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500
                 hover:scale-105 hover:-rotate-1 group">
              <h2 className="text-4xl font-bold text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500">Missão</h2>
              <div className="space-y-4 text-gray-100">
                <p>
                  Fornecer soluções MRO (Manutenção, Reparo e Operações) de excelência, garantindo a
                  eficiência operacional e a segurança de nossos clientes nos setores mais exigentes do mundo.
                </p>
                <p>
                  Através de produtos de alta qualidade, logística ágil e suporte especializado, buscamos ser o
                  parceiro estratégico que impulsiona a produtividade e a sustentabilidade das operações industriais.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="bg-gradient-to-br from-red-900/90 to-red-800/90 p-8 rounded-lg backdrop-blur-sm
                 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500
                 hover:scale-105 hover:rotate-1 group delay-150">
              <h2 className="text-4xl font-bold text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500">Valores</h2>
              <ul className="space-y-4 text-gray-100">
                <li className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <span className="font-bold text-red-400">Excelência Operacional -</span>
                  <span>Buscamos a perfeição em cada detalhe, desde a qualidade dos produtos até o atendimento ao cliente.</span>
                </li>
                <li className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <span className="font-bold text-red-400">Inovação Contínua -</span>
                  <span>Investimos em tecnologia e processos para oferecer soluções inovadoras e sustentáveis.</span>
                </li>
                <li className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <span className="font-bold text-red-400">Integridade -</span>
                  <span>Agimos com transparência, ética e respeito em todas as nossas relações.</span>
                </li>
                <li className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <span className="font-bold text-red-400">Compromisso com o Cliente -</span>
                  <span>Entendemos suas necessidades e superamos expectativas com agilidade e profissionalismo.</span>
                </li>
                <li className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <span className="font-bold text-red-400">Sustentabilidade -</span>
                  <span>Promovemos práticas responsáveis que equilibram produtividade e impacto ambiental.</span>
                </li>
              </ul>
            </div>

            {/* Visão */}
            <div className="bg-gradient-to-br from-red-900/90 to-red-800/90 p-8 rounded-lg backdrop-blur-sm
                 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500
                 hover:scale-105 hover:-rotate-1 group delay-300">
              <h2 className="text-4xl font-bold text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500">Visão</h2>
              <div className="space-y-4 text-gray-100">
                <p>
                  Ser reconhecidos como a referência global em suprimentos MRO, destacando-nos
                  pela inovação, confiabilidade e capacidade de antecipar as necessidades dos
                  mercados em que atuamos.
                </p>
                <p>
                  Almejamos expandir nossa presença internacional, mantendo sempre o
                  compromisso com a excelência e a satisfação dos nossos clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Slogan */}
          <div className="text-center mt-16 opacity-0 transform translate-y-12 transition-all duration-1000 delay-500 ease-out"
               style={{
                 opacity: isVisible ? 1 : 0,
                 transform: isVisible ? 'translateY(0)' : 'translateY(3rem)'
               }}>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Liderando o futuro da indústria,{' '}
              <span className="text-red-500 inline-block hover:scale-110 hover:rotate-3 transition-transform duration-300">hoje</span>.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

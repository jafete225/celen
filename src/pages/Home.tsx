import { useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import MiningModal from '../components/MiningModal';
import OilAndGasModal from '../components/OilAndGasModal';
import PortsAndRailwaysModal from '../components/PortsAndRailwaysModal';
import DrillingSolutionsModal from '../components/DrillingSolutionsModal';
import MetallurgicalSolutionsModal from '../components/MetallurgicalSolutionsModal';
import fundoImg from '../assets/fundo.png';
import comboioImg from '../assets/comboio2.png';
import oleoImg from '../assets/oleo4.png';
import liderandoImg from '../assets/liderando.png';
import escavadorImg from '../assets/escavador.png';
import escavador1Img from '../assets/escavador1.png';
import escavador2Img from '../assets/escavador2.png';
import escavador3Img from '../assets/escavador3.png';

interface Solucao {
  titulo: string;
  imagem: string;
}

const solucoes: Solucao[] = [
  { titulo: 'SOLUÇÕES PARA MINERAÇÃO', imagem: escavadorImg },
  { titulo: 'ÓLEO E GÁS', imagem: oleoImg },
  { titulo: 'PORTOS E FERROVIÁRIOS', imagem: comboioImg },
  { titulo: 'SOLUÇÕES DE EQUIPAMENTO', imagem: escavador1Img },
  { titulo: 'PERFURAÇÃO', imagem: escavador2Img },
  { titulo: 'SOLUÇÕES METALÚRGICAS E SIDERÚRGICAS', imagem: escavador3Img },
];

const Home: FC = () => {
  const [isMiningModalOpen, setIsMiningModalOpen] = useState(false);
  const [isOilAndGasModalOpen, setIsOilAndGasModalOpen] = useState(false);
  const [isPortsAndRailwaysModalOpen, setIsPortsAndRailwaysModalOpen] = useState(false);
  const [isDrillingSolutionsModalOpen, setIsDrillingSolutionsModalOpen] = useState(false);
  const [isMetallurgicalModalOpen, setIsMetallurgicalModalOpen] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={fundoImg} 
            alt="Supply Chain Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                CELEN
              </span>{' '}
              SUPPLY CHAIN
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Soluções integradas e eficientes para sua cadeia de suprimentos
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl flex items-center justify-center"
                title="Contato via WhatsApp"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Soluções Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {solucoes.map((solucao, index) => (
              <div 
                key={index} 
                className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-red-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer"
                onClick={() => {
                  if (solucao.titulo === 'SOLUÇÕES PARA MINERAÇÃO') {
                    setIsMiningModalOpen(true);
                  } else if (solucao.titulo === 'ÓLEO E GÁS') {
                    setIsOilAndGasModalOpen(true);
                  } else if (solucao.titulo === 'PORTOS E FERROVIÁRIOS') {
                    setIsPortsAndRailwaysModalOpen(true);
                  } else if (solucao.titulo === 'PERFURAÇÃO') {
                    setIsDrillingSolutionsModalOpen(true);
                  } else if (solucao.titulo === 'SOLUÇÕES METALÚRGICAS E SIDERÚRGICAS') {
                    setIsMetallurgicalModalOpen(true);
                  }
                }}
              >
                <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-colors duration-500"></div>
                <div className="relative mb-6 h-48 rounded-lg overflow-hidden">
                  <img 
                    src={solucao.imagem} 
                    alt={solucao.titulo} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{solucao.titulo}</h3>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Process Steps - 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Transporte */}
            <div className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-red-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-colors duration-500"></div>
              <div className="relative mb-6 h-48 rounded-lg overflow-hidden">
                <img 
                  src={comboioImg} 
                  alt="Transporte" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Transporte</h3>
              <p className="text-gray-300">Soluções logísticas eficientes para sua cadeia de suprimentos.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Armazenamento */}
            <div className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-red-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-colors duration-500"></div>
              <div className="relative mb-6 h-48 rounded-lg overflow-hidden">
                <img 
                  src={oleoImg} 
                  alt="Armazenamento" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Armazenamento</h3>
              <p className="text-gray-300">Gestão de estoque inteligente e segura.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Distribuição */}
            <div className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-red-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-colors duration-500"></div>
              <div className="relative mb-6 h-48 rounded-lg overflow-hidden">
                <img 
                  src={liderandoImg} 
                  alt="Distribuição" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Distribuição</h3>
              <p className="text-gray-300">Entrega precisa e pontual para seus clientes.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link
              to="/about"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                PORQUÊ
              </span>{' '}
              <span className="text-gray-900 dark:text-white">
                ESCOLHER-NOS?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nossa abordagem inovadora faz a diferença na sua cadeia de suprimentos
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Rede de Qualidade</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Acesso direto aos fabricantes CRM, garantindo produtos autênticos e de alta qualidade.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Garantia de Qualidade</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Todos os componentes atendem aos padrões ISO/ASME/IEC, assegurando confiabilidade.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Logística Otimizada</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Entrega just-in-time com rastreamento 24/7 para seus projetos.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Suporte Especializado</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Equipe técnica dedicada para auxiliar em todas as etapas do processo.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Soluções Completas</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Todo o processo da cadeia superior, desde o fornecedor até o cliente final.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Presença Global</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Atendimento internacional com padrão de excelência em qualquer localidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <MiningModal isOpen={isMiningModalOpen} onClose={() => setIsMiningModalOpen(false)} />
      <OilAndGasModal isOpen={isOilAndGasModalOpen} onClose={() => setIsOilAndGasModalOpen(false)} />
      <PortsAndRailwaysModal isOpen={isPortsAndRailwaysModalOpen} onClose={() => setIsPortsAndRailwaysModalOpen(false)} />
      <DrillingSolutionsModal isOpen={isDrillingSolutionsModalOpen} onClose={() => setIsDrillingSolutionsModalOpen(false)} />
      <MetallurgicalSolutionsModal isOpen={isMetallurgicalModalOpen} onClose={() => setIsMetallurgicalModalOpen(false)} />
    </>
  );
};

export default Home;
import type { FC } from 'react';

interface PortsAndRailwaysModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PortsAndRailwaysModal: FC<PortsAndRailwaysModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            PORTOS & FERROVIAS
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Oferecemos expertise técnica e soluções completas para infraestrutura portuária e ferroviária, 
            entregando eficiência, segurança e inovação em cada etapa.
          </p>

          <div className="space-y-8">
            {/* Infraestrutura Portuária */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                INFRAESTRUTURA PORTUÁRIA MODERNA
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Sistemas automatizados de movimentação de carga (pórticos STS, RTGs, ASCs)</li>
                <li>Eletrificação portuária e soluções de energia em terra</li>
                <li>Logística inteligente e sistemas operacionais de terminais</li>
                <li>Tecnologia de escaneamento e inspeção de contêineres</li>
              </ul>
            </div>

            {/* Otimização Ferroviária */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                OTIMIZAÇÃO FERROVIÁRIA
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Sistemas avançados de sinalização (ETCS, CBTC)</li>
                <li>Soluções de manutenção e inspeção de trilhos</li>
                <li>Tecnologias para eficiência no transporte de carga (rastreamento de vagões, otimização de carga)</li>
                <li>Sistemas de eletrificação e energia ferroviária</li>
              </ul>
            </div>

            {/* Tecnologias Sustentáveis */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                TECNOLOGIAS SUSTENTÁVEIS
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Equipamentos para redução de emissões (RTGs híbridos, sistemas movidos a CNG)</li>
                <li>Integração de energias renováveis (solar, eólica)</li>
                <li>Projetos portuários ecológicos (tratamento de água, redução de ruído, reciclagem)</li>
              </ul>
            </div>

            {/* Excelência Operacional */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                EXCELÊNCIA OPERACIONAL
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Sistemas de monitoramento e controle em tempo real</li>
                <li>Manutenção preditiva e gestão de ativos</li>
                <li>Otimização de logística e planejamento com IA</li>
              </ul>
            </div>

            {/* Vantagens-Chave */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                VANTAGENS-CHAVE
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Expertise Global – Experiência comprovada em modernização portuária e ferroviária</li>
                <li>Inovação – Soluções digitais e de automação de ponta</li>
                <li>Abordagem Personalizada – Sistemas customizados para eficiência e sustentabilidade</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              ENTREGANDO CONFIABILIDADE, INOVAÇÃO E ALTA PERFORMANCE
            </p>
            <p className="text-gray-600 dark:text-gray-300 italic mt-2">
              Seus desafios de infraestrutura, nossas soluções projetadas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortsAndRailwaysModal;

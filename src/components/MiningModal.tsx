import type { FC } from 'react';

interface MiningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MiningModal: FC<MiningModalProps> = ({ isOpen, onClose }) => {
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
            SOLUÇÕES PARA MINERAÇÃO
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Oferecemos expertise técnico e soluções de ponta a ponta para o setor de mineração:
          </p>

          <div className="space-y-8">
            {/* Equipamentos */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                EQUIPAMENTOS DE ALTA PERFORMANCE
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Máquinas pesadas, sistemas de perfuração e tecnologia autônoma para operações eficientes
              </p>
            </div>

            {/* Insumos */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                INSUMOS E CONSUMÍVEIS CRÍTICOS
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explosivos, lubrificantes avançados e EPIs com certificação internacional
              </p>
            </div>

            {/* Tecnologia */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                TECNOLOGIA E INOVAÇÃO
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sensores IoT, gestão inteligente de frotas e análise preditiva para maximizar produtividade
              </p>
            </div>

            {/* Serviços */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                SERVIÇOS ESPECIALIZADOS
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Manutenção 24/7, logística em áreas remotas e consultoria em sustentabilidade
              </p>
            </div>

            {/* Diferenciais */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                DIFERENCIAIS
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Parceria com líderes globais do setor</li>
                <li>Soluções customizadas para cada etapa da operação</li>
                <li>Entrega ágil e suporte técnico especializado</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              GARANTIMOS EFICIÊNCIA, SEGURANÇA E RESULTADOS.
            </p>
            <p className="text-gray-600 dark:text-gray-300 italic mt-2">
              Sua mineração, nossa expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningModal;

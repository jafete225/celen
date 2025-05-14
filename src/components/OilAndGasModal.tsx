import type { FC } from 'react';

interface OilAndGasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OilAndGasModal: FC<OilAndGasModalProps> = ({ isOpen, onClose }) => {
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
            ÓLEO E GÁS
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Oferecemos expertise técnico e soluções completas para o setor de óleo e gás:
          </p>

          <div className="space-y-8">
            {/* Equipamentos */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                EQUIPAMENTOS DE ALTA PERFORMANCE
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sistemas de perfuração, válvulas industriais e robótica submarina para operações eficientes e seguras
              </p>
            </div>

            {/* Insumos */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                INSUMOS ESPECIALIZADOS
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fluidos de perfuração, revestimentos anticorrosivos e produtos químicos de alta qualidade
              </p>
            </div>

            {/* Tecnologia */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                TECNOLOGIA E INOVAÇÃO
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sensores IoT para monitoramento remoto, sistemas de automação e análise preditiva para maximizar eficiência operacional
              </p>
            </div>

            {/* Serviços */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                SERVIÇOS ESPECIALIZADOS
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Manutenção 24/7, logística em ambientes críticos e engenharia sob demanda
              </p>
            </div>

            {/* Diferenciais */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                DIFERENCIAIS
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Parceria com os principais players globais</li>
                <li>Soluções customizadas para upstream, midstream e downstream</li>
                <li>Resposta rápida e suporte técnico especializado</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              GARANTIMOS EFICIÊNCIA, SEGURANÇA E PERFORMANCE.
            </p>
            <p className="text-gray-600 dark:text-gray-300 italic mt-2">
              Seu desafio, nossa solução.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilAndGasModal;

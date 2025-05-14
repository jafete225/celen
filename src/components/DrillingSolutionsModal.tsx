import type { FC } from 'react';

interface DrillingSolutionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrillingSolutionsModal: FC<DrillingSolutionsModalProps> = ({ isOpen, onClose }) => {
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
            SOLUÇÕES DE PERFURAÇÃO
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Expertise abrangente e soluções integradas para a indústria global.
          </p>

          <div className="space-y-8">
            {/* Equipamentos */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                EQUIPAMENTOS DE ALTA PERFORMANCE
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Sistemas de Perfuração: Sondas premium, ferramentas de perfuração direcional e tecnologia de combinação</li>
                <li>Controle de Pressão: Válvulas industriais, BOPs (Blowout Preventers) e sistemas de wellhead</li>
                <li>Soluções Submarinas: ROVs (Veículos Operados Remotamente), manifolds e infraestrutura para águas profundas</li>
              </ul>
            </div>

            {/* Insumos */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                INSUMOS ESPECIALIZADOS
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Fluídos de Perfuração: Formulações customizadas para estabilidade, lubrificação e remoção de cascalho</li>
                <li>Proteção Contra Corrosão: Revestimentos avançados, proteção catódica e tecnologia de materiais</li>
                <li>Soluções Químicas: Ativos de alto desempenho para estimulação e produção de poços</li>
              </ul>
            </div>

            {/* Tecnologia */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                TECNOLOGIA & INOVAÇÃO
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Monitoramento Digital: Sensores IoT e painéis de dados em tempo real para operações</li>
                <li>Automação: Sistemas de perfuração com IA e robótica API/AI</li>
                <li>Análise Preditiva: Modelos de machine learning para reduzir paradas não programadas (NPT)</li>
              </ul>
            </div>

            {/* Garantias */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                GARANTIMOS
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Eficiência: Redução de custos operacionais com processos otimizados</li>
                <li>Segurança: Conformidade com padrões API, ISO e OSHA</li>
                <li>Performance: Máximo uptime e ROI para seus ativos</li>
              </ul>
            </div>

            {/* Vantagens */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                VANTAGENS-CHAVE
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Rede Global: Parcerias com líderes do setor (Schlumberger, Halliburton, Baker Hughes)</li>
                <li>Expertise por Segmentos: Soluções customizadas para upstream, midstream e downstream</li>
                <li>Suporte 24/7: Equipes técnicas dedicadas com resposta de emergência em &lt;24h</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 italic mt-2">
              Seus desafios de perfuração, nossas soluções projetadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrillingSolutionsModal;

import type { FC } from 'react';

interface MetallurgicalSolutionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MetallurgicalSolutionsModal: FC<MetallurgicalSolutionsModalProps> = ({ isOpen, onClose }) => {
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
            SOLUÇÕES METALÚRGICAS & SIDERÚRGICAS
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Expertise global em matérias-primas, equipamentos avançados e otimização de processos 
            para a indústria metalúrgica e siderúrgica.
          </p>

          <div className="space-y-8">
            {/* Matérias-Primas & Ligas */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                MATÉRIAS-PRIMAS & LIGAS
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Ferro-Gusa: Processos de alto-forno, DRI/HBI, sinterização metálica e forno elétrico</li>
                <li>Aciaria: Especiais - Ligas de alta pureza, refratários e consumíveis de trabalho</li>
                <li>Elementos de Liga: Cobre, níquel, molibdênio e vanádio</li>
              </ul>
            </div>

            {/* Equipamentos */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                EQUIPAMENTOS DE PRODUÇÃO
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Conversores Siderúrgicos: Forno Elétrico a Arco, BOF (Basic Oxygen Furnace)</li>
                <li>Sistemas de Automação</li>
                <li>Conformação Mecânica: Placas para moldes, revestimentos de distribuição e desgaste (abrasão)</li>
                <li>Laminação: Tecnologias para lingotamento contínuo, sistemas de decapagem e controle de precisão</li>
              </ul>
            </div>

            {/* Tecnologias */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                TECNOLOGIAS E INOVAÇÃO
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Otimização de Processos: Simulação de carga com IA e melhoria de transformação</li>
                <li>Controle de Emissões: Lavadores de gases, captura de carbono e recuperação de calor residual</li>
                <li>Critério de Qualidade: Analisadores LIBS, controle online e documentação</li>
              </ul>
            </div>

            {/* Serviços */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                SERVIÇOS DE VALOR AGREGADO
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Consultoria Técnica: Análise de eficiência energética e gestão de produção</li>
                <li>Gestão da Cadeia de Suprimentos: Logística integrada para sistemas ágeis</li>
                <li>Sistemas de Controle/Monitoramento 24/7</li>
              </ul>
            </div>

            {/* Por que escolher */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                POR QUE ESCOLHER NOSSAS SOLUÇÕES?
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                <li>Expertise integrada: Da matéria-prima à tecnologia para produção eficiente</li>
                <li>Parcerias Globais: Colaboração com centros de excelência (ex. TECNALIA, Düsseldorf)</li>
                <li>Foco em Sustentabilidade: Economia circular e estratégias de descarbonização</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              ENTREGANDO CONFIABILIDADE, INOVAÇÃO E EFICIÊNCIA DE CUSTOS
            </p>
            <p className="text-gray-600 dark:text-gray-300 italic mt-2">
              Seus desafios de produção, nossa expertise metalúrgica e siderúrgica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetallurgicalSolutionsModal;

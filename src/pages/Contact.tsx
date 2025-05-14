import type { FC } from 'react';
import { useEffect, useState } from 'react';

const Contact: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5c0000] to-[#3c0000] text-white pt-20 flex items-center justify-center">
      <div className="w-full py-16">
        {/* Thank You Section */}
        <div className="text-center opacity-0 transform translate-y-12 transition-all duration-1000 ease-out"
             style={{
               opacity: isVisible ? 1 : 0,
               transform: isVisible ? 'translateY(0)' : 'translateY(3rem)'
             }}>
          <h1 className="text-6xl md:text-7xl font-bold mb-12 text-white">
            THANK YOU
          </h1>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl mb-12 transform hover:scale-105 transition-all duration-500 border border-white/10 mx-0">
            <div className="space-y-6 text-lg">
              <div className="flex items-center justify-center space-x-4 text-xl flex-wrap gap-y-4">
                <span className="font-semibold hover:text-red-400 transition-colors duration-300 cursor-pointer">
                  +258 84 860 6700
                </span>
                <span className="text-white/50">|</span>
                <span className="font-semibold hover:text-red-400 transition-colors duration-300 cursor-pointer">
                  +258 82 369 2370
                </span>
                <span className="text-white/50">|</span>
                <span className="font-semibold hover:text-red-400 transition-colors duration-300 cursor-pointer">
                  +258 87 369 2370
                </span>
              </div>
              
              <div className="flex flex-col items-center space-y-3 mt-6">
                <a href="mailto:celen.inves@gmail.com" className="hover:text-red-400 transition-colors duration-300">celen.inves@gmail.com</a>
                <a href="mailto:ensonejosem@gmail.com" className="hover:text-red-400 transition-colors duration-300">ensonejosem@gmail.com</a>
                <a href="mailto:emunguambe@celeninvestimentos.com" className="hover:text-red-400 transition-colors duration-300">emunguambe@celeninvestimentos.com</a>
              </div>
              
              <div className="text-center mt-8 space-y-2">
                <p className="text-white/70">Endereço</p>
                <p className="text-lg">
                  Bairro Costa do Sol, Rua 4694 Nº 442<br />
                  Maputo, Mozambique
                </p>
              </div>
            </div>
          </div>

          {/* Developer Credits */}
          <div className="text-sm text-gray-300 opacity-0 transform translate-y-12 transition-all duration-1000 ease-out delay-500"
               style={{
                 opacity: isVisible ? 1 : 0,
                 transform: isVisible ? 'translateY(0)' : 'translateY(3rem)'
               }}>
            <p>Desenvolvido  por</p>
            <p className="font-semibold text-red-400 hover:text-red-300 transition-colors duration-300">
              Jafet Pedro Comé
            </p>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <a href="https://github.com/jafetpedro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jafetpedro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <p className="text-xs mt-4">© {new Date().getFullYear()} CELEN. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

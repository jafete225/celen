import type { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-red-600">CELEN</span>
        <span className="ml-1 text-red-600 text-xl">↗</span>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">Supply Chain</span>
    </div>
  );
};

export default Logo;

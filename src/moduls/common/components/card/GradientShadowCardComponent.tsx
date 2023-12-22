import { ICardGradient } from './_types';

const GradientShadowCardComponent: React.FC<ICardGradient> = ({ blur = 'blur', children }) => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="relative group">
        <div
          className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg ${blur} opacity-10 group-hover:opacity-100 transition duration-1000 group-hover:duration-500`}
        />
        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export { GradientShadowCardComponent };

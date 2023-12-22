import { ICardComponent } from './_types';

const CardComponent: React.FC<ICardComponent> = ({ children }) => {
  return (
    <div className="group block max-w-lg mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-sm space-y-3 hover:shadow-2xl">
      {children}
    </div>
  );
};
export { CardComponent };

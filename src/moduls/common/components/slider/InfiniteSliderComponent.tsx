import { ISlider } from './_types';

const InfiniteSliderComponent: React.FC<ISlider> = ({ children, className }) => {
  return (
    <div className="relative m-auto overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-[''] mb-10 p-10 shadow-2xl bg-gradient-to-r from-teal-500 to-red-300 ">
      <div className={`${className} flex w-[calc(250px*10)] gap-10`}>{children}</div>
    </div>
  );
};

export { InfiniteSliderComponent };

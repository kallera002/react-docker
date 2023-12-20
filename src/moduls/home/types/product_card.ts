import { ISVG } from '../../common/_types';

export interface IProductDetail extends ISVG {
  title: string;
  description: string;
  stack: boolean;
  bgColor: string;
}

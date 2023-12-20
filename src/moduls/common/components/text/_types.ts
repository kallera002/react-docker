import { IChildren } from '../../_types';

export interface ITextGradient extends IChildren {
  background?: string;
}

export interface IBaseText {
  id?: string;
  firstTitle: string;
  secondTitle: string;
  textIcon: string;
  leftSpacing?: number;
  topSpacing?: number;
}

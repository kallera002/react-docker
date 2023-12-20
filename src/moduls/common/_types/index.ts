export interface IChildren {
  children: React.ReactNode;
}

/**
 *
 */

export interface ISectionWrapper extends IChildren {
  padding?: string;
}

export interface IBaseLayout extends IChildren {
  padding?: string;
  id: string;
  mt?: number;
}

export interface ISVG {
  svgIcon: React.ReactElement;
}

export interface ITag {
  tag: string;
}

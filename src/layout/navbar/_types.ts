import { IChildren } from '../../moduls/common/_types';

export interface INavbar {
  onClick?: () => void;
  isOpen?: boolean;
}

/**
 *
 */
export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  onClick?: () => void;
}

export interface IMobileNavbarItem extends IChildren {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface INavbar {
    onClick?:() => void
    isOpen?:boolean
}

/**
 *
 */
export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

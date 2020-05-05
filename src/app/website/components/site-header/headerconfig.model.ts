export interface IImage {
  src: string;
  alt: string;
}

export interface IIconButton {
  id: string;
  icon: string;
  disabled: boolean;
  tooltip?: string;
}

export interface IHeaderConfig {
  logo: IImage;
  title?: string;
  type: string;
  iconbtns: IIconButton[];
}

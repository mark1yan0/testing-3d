export interface IColorItem {
  color: string;
  name: string;
}

export type TMaterial = 'leather' | 'fabric';

export type IClick = (event: React.MouseEvent<HTMLDivElement>) => void;

export interface IGenericProps {
  item: IColorItem;
  matcher: IColorItem;
}

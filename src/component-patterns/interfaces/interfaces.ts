import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImagesProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	increaseBy: (n: number) => void;
	counter: number;
	product: Product;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImagesProps) => JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

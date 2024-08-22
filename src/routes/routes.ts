import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../lazyload/pages';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
	path: string;
	to: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const LazyLayout = lazy(
	() => import(/*webpackChunkName: "LazyLayout"*/ '../lazyload/layout/LazyLayout')
);

export const routes: Route[] = [
	{
		path: '/lazyload/*',
		to: '/lazyload/',
		Component: LazyLayout,
		name: 'LazyLayout',
	},
	{
		path: 'nolazy',
		to: '/nolazy',
		Component: NoLazy,
		name: 'No Lazy',
	},
];

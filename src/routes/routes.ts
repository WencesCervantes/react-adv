import { type } from "node:os";
import { lazy } from "react";
import { NoLazy } from "../01-LazyLoad/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(/*webpackChunkName:"LazyLayout"*/ "../01-LazyLoad/layout/LazyLayout")
);

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload",
    Component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];

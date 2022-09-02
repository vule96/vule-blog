import {
  CSSProperties,
  FC as ReactFunctionalComponent,
  ReactNode,
} from 'react';
import { StitchesCSS as CSS } from 'stitches.config';

export type ComponentChild = ReactNode | ReactNode[] | null | undefined;

export interface ComponentProps {
  children?: ComponentChild;
  className?: string;
  style?: CSSProperties;
  css?: CSS;
}

export type FC<T = Record<string, unknown>> = ReactFunctionalComponent<
  ComponentProps & T
>;
import paths from "./routes";

type Keys = keyof typeof paths;

export type ReactRoutesType = {
  PATH: typeof paths[Keys] | "*";
  ELEMENT: JSX.Element;
};

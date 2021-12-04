import { ImgHTMLAttributes } from "react";

export type PreviewerProps = {
  image: ImgHTMLAttributes<HTMLImageElement>;
  captions: {
    top: string;
    bottom: string;
  };
};

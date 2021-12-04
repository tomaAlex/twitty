import { ImgHTMLAttributes } from "react";

export type PreviewerProps = {
  image: ImgHTMLAttributes<HTMLImageElement>;
  captions: {
    top: string;
    bottom: string;
  };
  style?: React.CSSProperties;
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

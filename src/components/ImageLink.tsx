import React from "react";

interface ImageLinkProps {
  link: string;
  src: string;
}
export const ImageLink: React.FC<ImageLinkProps> = ({ link, src }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <img
      src={src}
      alt=""
      onClick={handleClick}
      style={{ cursor: "pointer" }} // カーソルをポインターに変更してクリック可能にする
    />
  );
};

export default ImageLink;
